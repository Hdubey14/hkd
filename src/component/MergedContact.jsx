
import { useState } from "react";
import PhoneInput, {
  isValidPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";

import Select from "react-select";
import { getCountryCallingCode } from "libphonenumber-js";

import {
  FaArrowUp,
  FaCheckCircle,
  FaPaperPlane,
  FaShieldAlt,
} from "react-icons/fa";

import "./MergedContact.css";

const INITIAL_FORM = {
  name: "",
  email: "",
  number: "",
  message: "",
};

// Keep your existing backend URL here.
const API_URL = "/api/contact";

// =====================================================
// SEARCHABLE COUNTRY SELECT
// Country name and calling code appear in the selector.
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
    .filter((option) => option.value)
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
    <div className="phone-country-wrapper" style={{ width: "175px", minWidth: "175px", flex: "0 0 175px" }}>
      <Select
        className="phone-country-select"
        classNamePrefix="phone-country"
        inputId="contact-country"
        name={name}
        options={countryOptions}
        value={selectedOption}
        onChange={(option) => onChange(option?.value || undefined)}
        isDisabled={disabled}
        isSearchable
        placeholder="Country"
        menuPlacement="auto"
        tabSelectsValue={false}
        tabIndex={tabIndex}
        aria-label="Search and select country"
        filterOption={(candidate, input) => {
          const search = input.trim().toLowerCase();

          return (
            candidate.label.toLowerCase().includes(search) ||
            candidate.data.value.toLowerCase().includes(search) ||
            candidate.data.callingCode.includes(search.replace("+", ""))
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
            "&:hover": {
              borderColor: "#64748b",
            },
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
          input: (base) => ({
            ...base,
            margin: 0,
            padding: 0,
          }),
          indicatorsContainer: (base) => ({
            ...base,
            flexShrink: 0,
          }),
          dropdownIndicator: (base) => ({
            ...base,
            padding: "5px",
          }),
          clearIndicator: (base) => ({
            ...base,
            padding: "4px",
          }),
          menu: (base) => ({
            ...base,
            width: "260px",
            zIndex: 9999,
          }),
          menuList: (base) => ({
            ...base,
            maxHeight: "220px",
          }),
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

export default function MergedContact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
    setSent(false);
  };

  const handlePhoneChange = (value) => {
    setForm((previous) => ({
      ...previous,
      number: value || "",
    }));

    setError("");
    setSent(false);
  };

  const validateForm = () => {
    const name = form.name.trim();
    const email = form.email.trim();
    const phone = form.number;
    const message = form.message.trim();

    if (!name || !email || !phone || !message) {
      return "Please fill in all the fields.";
    }

    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      return "Please enter a valid email address.";
    }

    if (!isValidPhoneNumber(phone)) {
      return "Please select the correct country and enter a valid phone number.";
    }

    if (message.length > 5000) {
      return "Your message must be under 5000 characters.";
    }

    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (sending) return;

    setError("");
    setSent(false);

    const validationError = validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setSending(true);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.number,
          message: form.message.trim(),
        }),
      });

      let result;

      try {
        result = await response.json();
      } catch {
        throw new Error(
          "The server returned an invalid response. Please try again."
        );
      }

      if (!response.ok || !result.success) {
        throw new Error(
          result.message || "Unable to send your enquiry. Please try again."
        );
      }

      setSent(true);
      setForm(INITIAL_FORM);
    } catch (err) {
      console.error("Contact form error:", err);

      if (err instanceof TypeError) {
        setError(
          "Unable to connect to the email server. Please ensure your backend is running."
        );
      } else {
        setError(err.message || "Something went wrong. Please try again.");
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="newsletter-section merged-light-contact">
      <div className="newsletter-box">
        <div className="newsletter-content">
          <span className="newsletter-label">LET'S CONNECT</span>

          <h2>
            Have a project in mind?
            <br />
            <span>Let's talk.</span>
          </h2>

          <p>
            Tell us about your requirements, and our team will get
            back to you with the right solution for your business.
          </p>

          <div className="newsletter-points">
            <div>
              <FaCheckCircle />
              <span>Solutions tailored to your business</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Quick response from our team</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Discuss your requirements directly</span>
            </div>
          </div>

          <div className="newsletter-note">
            <FaShieldAlt />
            <span>
              Your contact details are used to respond to your enquiry.
            </span>
          </div>
        </div>

        <div className="newsletter-form-wrap">
          <div className="newsletter-form-head">
            <div className="newsletter-icon">
              <FaPaperPlane />
            </div>

            <div>
              <h3>Send us a message</h3>
              <p>Fill out the form below to get started.</p>
            </div>
          </div>

          <form
            className="newsletter-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="newsletter-input-group">
              <label htmlFor="contact-name">Full Name</label>
              <input
                id="contact-name"
                className="newsletter-input"
                type="text"
                name="name"
                placeholder="Enter your full name"
                value={form.name}
                onChange={handleChange}
                maxLength={100}
                autoComplete="name"
                required
                disabled={sending}
              />
            </div>

            <div className="newsletter-input-group">
              <label htmlFor="contact-email">Email Address</label>
              <input
                id="contact-email"
                className="newsletter-input"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                maxLength={254}
                autoComplete="email"
                required
                disabled={sending}
              />
            </div>

            <div className="newsletter-input-group">
              <label htmlFor="contact-phone">Mobile Number</label>

              <PhoneInput
                countrySelectComponent={SearchableCountrySelect}
                defaultCountry="IN"
                international={false}
                limitMaxLength
                maxLength={11}
                value={form.number}
                onChange={handlePhoneChange}
                placeholder="Enter phone number"
                autoComplete="tel-national"
                required
                disabled={sending}
                numberInputProps={{
                  id: "contact-phone",
                  className: "newsletter-input",
                  "aria-label": "Mobile number without country calling code",
                }}
              />
            </div>

            <div className="newsletter-input-group">
              <label htmlFor="contact-message">How can we help?</label>
              <textarea
                id="contact-message"
                className="newsletter-input"
                name="message"
                placeholder="Tell us about your project or requirements..."
                value={form.message}
                onChange={handleChange}
                rows={4}
                maxLength={5000}
                required
                disabled={sending}
              />
            </div>

            {error && (
              <div className="merged-contact-error" role="alert">
                {error}
              </div>
            )}

            {sent && (
              <div className="merged-contact-success" role="status">
                <FaCheckCircle />
                <span>Your enquiry has been sent successfully!</span>
              </div>
            )}

            <button
              type="submit"
              className="newsletter-submit"
              disabled={sending}
            >
              <span>{sending ? "Sending..." : "Send Message"}</span>

              <span className="newsletter-submit-icon">
                {sending ? (
                  <span className="contact-spinner" />
                ) : (
                  <FaArrowUp />
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
