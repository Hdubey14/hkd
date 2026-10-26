
import { useState, forwardRef } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import Select from "react-select";
import { getCountryCallingCode } from "libphonenumber-js";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

import usePageMeta from "../hooks/usePageMeta";
import "./ContactPage.css";

// =====================================================
// PHONE INPUT: ENFORCE NATIONAL DIGIT LIMIT
// =====================================================

const LimitedPhoneNumberInput = forwardRef(
  function LimitedPhoneNumberInput(
    { maxNationalDigits, onChange, ...inputProps },
    ref
  ) {
    const handleInputChange = (event) => {
      const inputValue = event.target.value || "";
      const digits = inputValue.replace(/\D/g, "");

      // Enforce the maximum on the actual input.
      // India allows exactly 10 national digits, excluding +91.
      if (
        Number.isInteger(maxNationalDigits) &&
        maxNationalDigits > 0 &&
        digits.length > maxNationalDigits
      ) {
        return;
      }

      onChange?.(event);
    };

    return (
      <input
        {...inputProps}
        ref={ref}
        onChange={handleInputChange}
      />
    );
  }
);

// =====================================================
// SEARCHABLE COUNTRY SELECT
// =====================================================

function SearchableCountrySelect({
  options = [],
  value,
  onChange,
  disabled,
  name,
  tabIndex,
}) {
  const countryOptions = options
    .filter((option) => option.value && option.value !== "ZZ")
    .map((option) => {
      let callingCode = "";

      try {
        callingCode = getCountryCallingCode(option.value);
      } catch {
        callingCode = "";
      }

      return {
        value: option.value,
        label: `${option.label} (+${callingCode})`,
        callingCode,
      };
    });

  const selectedOption =
    countryOptions.find((option) => option.value === value) || null;

  return (
    <div
      className="phone-country-wrapper"
      style={{
        width: "175px",
        minWidth: "175px",
        flex: "0 0 175px",
      }}
    >
      <Select
        inputId="contact-page-country"
        className="phone-country-select"
        classNamePrefix="phone-country"
        name={name}
        options={countryOptions}
        value={selectedOption}
        onChange={(option) => onChange(option?.value || undefined)}
        isDisabled={disabled}
        isSearchable
        placeholder="Country"
        noOptionsMessage={() => "No country found"}
        menuPlacement="auto"
        tabSelectsValue={false}
        tabIndex={tabIndex}
        aria-label="Search and select country"
        filterOption={(candidate, input) => {
          const search = input.trim().toLowerCase();
          const callingCode = candidate.data.callingCode || "";

          return (
            candidate.label.toLowerCase().includes(search) ||
            candidate.data.value.toLowerCase().includes(search) ||
            callingCode.includes(search.replace(/\+/g, ""))
          );
        }}
        styles={{
          container: (base) => ({
            ...base,
            width: "175px",
            minWidth: "175px",
            flex: "0 0 175px",
            fontSize: "13px",
          }),
          control: (base, state) => ({
            ...base,
            minHeight: "46px",
            height: "46px",
            borderRadius: "8px",
            borderColor: state.isFocused ? "#64748b" : "#d1d5db",
            boxShadow: "none",
            cursor: "pointer",
            "&:hover": { borderColor: "#64748b" },
          }),
          valueContainer: (base) => ({
            ...base,
            padding: "0 7px",
            flexWrap: "nowrap",
          }),
          singleValue: (base) => ({
            ...base,
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }),
          input: (base) => ({ ...base, margin: 0, padding: 0 }),
          indicatorsContainer: (base) => ({ ...base, flexShrink: 0 }),
          dropdownIndicator: (base) => ({ ...base, padding: "5px" }),
          clearIndicator: (base) => ({ ...base, padding: "4px" }),
          menu: (base) => ({ ...base, width: "260px", zIndex: 9999 }),
          menuList: (base) => ({ ...base, maxHeight: "220px" }),
          option: (base, state) => ({
            ...base,
            fontSize: "13px",
            padding: "9px 12px",
            cursor: "pointer",
            backgroundColor: state.isFocused ? "#eef2ff" : base.backgroundColor,
            color: "#1f2937",
          }),
        }}
      />
    </div>
  );
}

// =====================================================
// PHONE HELPERS
// =====================================================

// PhoneInput stores its value in international format, e.g. +919876543210.
// Remove the country calling code before counting national digits.
function getNationalDigits(value, countryCode) {
  if (!value) return "";

  const allDigits = String(value).replace(/\D/g, "");

  // PhoneInput normally returns an international value.
  // Only strip the calling code when the value starts with it.
  if (String(value).trim().startsWith("+")) {
    try {
      const callingCode = getCountryCallingCode(countryCode);

      if (callingCode && allDigits.startsWith(callingCode)) {
        return allDigits.slice(callingCode.length);
      }
    } catch {
      // Fall through to the available digits.
    }
  }

  return allDigits;
}

// =====================================================
// CONTACT PAGE
// =====================================================

function ContactPage() {
  usePageMeta(
    "Contact Xlligent Softwares | Discuss Your Software Project",
    "Contact Xlligent Softwares to discuss business software, ERP implementation, website development, mobile apps or a custom digital solution.",
    "contact Xlligent Softwares, software project enquiry, ERP consultation, web development company contact"
  );

  const locations = [
    "Durham, North Carolina, USA",
    "Indore, Madhya Pradesh, India",
    "Bangalore, Karnataka, India",
    "Penang, Malaysia",
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    product: "",
    requirement: "",
  });

  const [country, setCountry] = useState("IN");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
    setError("");
  };

  const handlePhoneChange = (value) => {
    const nextValue = value || "";

    // Final safety check for India.
    // The actual input also blocks the 11th national digit.
    if (country === "IN" && nextValue) {
      const nationalDigits = getNationalDigits(nextValue, "IN");

      if (nationalDigits.length > 10) {
        return;
      }
    }

    setFormData((previous) => ({
      ...previous,
      phone: nextValue,
    }));

    setSubmitted(false);
    setError("");
  };

  const handleCountryChange = (nextCountry) => {
    setCountry(nextCountry || "IN");

    // Clear the old number when changing countries.
    setFormData((previous) => ({
      ...previous,
      phone: "",
    }));

    setSubmitted(false);
    setError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (sending) return;

    setSubmitted(false);
    setError("");

    if (!formData.phone || !isValidPhoneNumber(formData.phone)) {
      setError(
        "Please select the correct country and enter a valid phone number."
      );
      return;
    }

    // India: exactly 10 national digits and a valid mobile prefix.
    if (country === "IN") {
      const nationalDigits = getNationalDigits(formData.phone, "IN");

      if (!/^[6-9]\d{9}$/.test(nationalDigits)) {
        setError(
          "Please enter a valid Indian mobile number with exactly 10 digits."
        );
        return;
      }
    }

    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone,
          product: formData.product,
          requirement: formData.requirement.trim(),
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok || result.success === false) {
        throw new Error(
          result.message ||
            result.error ||
            "Unable to send your message. Please try again."
        );
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        product: "",
        requirement: "",
      });

      setCountry("IN");
    } catch (err) {
      console.error("Contact form submission failed:", err);
      setError(
        err.message || "Unable to send your message. Please try again."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="contact-page">
      {/* HERO */}
      <section className="contact-hero">
        <span className="section-tag">GET IN TOUCH</span>

        <h1>
          Let's Start a
          <span> Conversation</span>
        </h1>

        <p>
          Have a project or business requirement in mind?
          Get in touch with Xlligent Softwares and discuss
          your requirements with the team.
        </p>
      </section>

      {/* CONTACT CONTENT */}
      <section className="contact-section">
        <div className="contact-info">
          <span className="section-tag">CONTACT US</span>

          <h2>
            Let's Discuss
            <span> Your Requirement</span>
          </h2>

          <p>
            Whether you need business management software,
            an ERP solution, or a web or app product, you
            can connect with us through the details below.
          </p>

          <div className="contact-item">
            <div className="contact-icon">
              <FaPhoneAlt />
            </div>
            <div>
              <span>Call Us</span>
              <a href="tel:+916261900209">+91 6261900209</a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <div>
              <span>Email Us</span>
              <a href="mailto:sales@xlligent-softwares.com">
                sales@xlligent-softwares.com
              </a>
              <a href="mailto:usaservices@xlligent-softwares.com">
                usaservices@xlligent-softwares.com
              </a>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <FaMapMarkerAlt />
            </div>
            <div>
              <span>Our Locations</span>

              {locations.map((location) => (
                <p key={location} className="contact-location">
                  {location}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* CONTACT FORM */}
        <div className="contact-form-card">
          <span className="section-tag">SEND A MESSAGE</span>

          <h2>
            Tell Us About
            <span> Your Project</span>
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="contact-page-name">Your Name</label>
                <input
                  id="contact-page-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  maxLength={100}
                  autoComplete="name"
                  required
                  disabled={sending}
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-page-email">Email Address</label>
                <input
                  id="contact-page-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  maxLength={254}
                  autoComplete="email"
                  required
                  disabled={sending}
                />
              </div>
            </div>

            {/* INTERNATIONAL PHONE */}
            <div className="form-group">
              <label htmlFor="contact-page-phone">Phone Number</label>

              <PhoneInput
                countrySelectComponent={SearchableCountrySelect}
                inputComponent={LimitedPhoneNumberInput}
                defaultCountry="IN"
                international={false}
                limitMaxLength
                value={formData.phone || undefined}
                onChange={handlePhoneChange}
                onCountryChange={handleCountryChange}
                placeholder="Enter phone number"
                autoComplete="tel-national"
                required
                disabled={sending}
                numberInputProps={{
                  id: "contact-page-phone",
                  name: "phone",
                  inputMode: "numeric",
                  maxNationalDigits: country === "IN" ? 10 : undefined,
                  "aria-label": "Phone number without country calling code",
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-page-product">Products</label>
              <Select
                inputId="contact-page-product"
                name="product"
                className="contact-product-select"
                classNamePrefix="contact-product"
                options={[
                  { value: "ERP", label: "ERP Solution" },
                  { value: "School Management", label: "School Management Solution" },
                  { value: "Pharmacy", label: "Pharmacy Management Solution" },
                  { value: "Real Estate", label: "Real Estate Solution" },
                  { value: "Custom Web Development", label: "Custom Web Development Solution" },
                  { value: "College Management", label: "College Management Solution" },
                  { value: "Billing Software", label: "Billing Management Solution" },
                  { value: "E-Commerce", label: "E-Commerce Solution" },
                  { value: "Hospital Management", label: "Hospital Management Solution" },
                  { value: "Manufacturing ERP", label: "Manufacturing ERP Solution" },
                  { value: "Other", label: "Other" },
                ]}
                value={[
                  { value: "ERP", label: "ERP Solution" },
                  { value: "School Management", label: "School Management Solution" },
                  { value: "Pharmacy", label: "Pharmacy Management Solution" },
                  { value: "Real Estate", label: "Real Estate Solution" },
                  { value: "Custom Web Development", label: "Custom Web Development Solution" },
                  { value: "College Management", label: "College Management Solution" },
                  { value: "Billing Software", label: "Billing Management Solution" },
                  { value: "E-Commerce", label: "E-Commerce Solution" },
                  { value: "Hospital Management", label: "Hospital Management Solution" },
                  { value: "Manufacturing ERP", label: "Manufacturing ERP Solution" },
                  { value: "Other", label: "Other" },
                ].find((option) => option.value === formData.product) || null}
                onChange={(option) => setFormData((previous) => ({ ...previous, product: option?.value || "" }))}
                isSearchable
                isClearable
                placeholder="Search or select a product..."
                required
                isDisabled={sending}
                menuPlacement="auto"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contact-page-requirement">
                Your Requirement
              </label>
              <textarea
                id="contact-page-requirement"
                name="requirement"
                value={formData.requirement}
                onChange={handleChange}
                rows="6"
                maxLength={5000}
                placeholder="Tell us about your project or requirement..."
                required
                disabled={sending}
              />
            </div>

            {error && (
              <div className="form-error" role="alert">
                {error}
              </div>
            )}

            {submitted && (
              <div className="form-success" role="status">
                Thank you! Your message has been sent successfully. We will
                get back to you soon.
              </div>
            )}

            <button
              type="submit"
              className="contact-submit"
              disabled={sending}
            >
              {sending ? "Sending..." : "Send Message"}
              {!sending && <FaArrowRight />}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
