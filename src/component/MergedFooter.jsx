import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaArrowUp,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "./MergedFooter.css";

const companyLinks = [
    { label: "About Us", to: "/about" },
    { label: "Services", to: "/services" },
    { label: "Products", to: "/products" },
    { label: "Our Projects", to: "/project" },
    { label: "Reviews", to: "/reviews" },
    { label: "Careers", to: "/career" },
];

const serviceLinks = [
    { label: "Software Development", to: "/services" },
    { label: "Customized ERP Solutions", to: "/services" },
    { label: "Web Designing", to: "/services" },
    { label: "Cloud Solutions", to: "/services" },
    { label: "AI Integration", to: "/services" },
];

const officeLocations = [
    {
        name: "Durham, North Carolina, USA",
        query: "Durham North Carolina USA",
    },
    {
        name: "Indore, Madhya Pradesh, India",
        query: "Indore Madhya Pradesh India",
    },
    {
        name: "Bangalore, Karnataka, India",
        query: "Bangalore Karnataka India",
    },
    {
        name: "Penang, Malaysia",
        query: "Penang Malaysia",
    },
];

const socialLinks = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/company/xlligentsoftwares-pvt-ltd/",
        className: "linkedin",
        Icon: FaLinkedinIn,
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/xlligent_softwares_pvt.ltd/",
        className: "instagram",
        Icon: FaInstagram,
    },
    {
        name: "Facebook",
        href: "https://www.facebook.com/xlligentsoftwares/",
        className: "facebook",
        Icon: FaFacebookF,
    },
];

export default function MergedFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="second-footer">
            <div className="second-footer-inner">
                <div className="second-footer-grid">

                    {/* 1. BRAND AND SOCIAL LINKS */}
                    <div className="footer-brand-column">
                        <Link
                            to="/"
                            className="footer-brand"
                            aria-label="Xlligent Softwares home"
                        >
                            <img
                                src="/second-images/logo.webp"
                                alt="Xlligent Softwares"
                                
                            />
                        </Link>

                        <p className="footer-description">
                            Xlligent Softwares delivers software solutions
                            tailored to business needs, helping organizations
                            improve processes, productivity and digital
                            experiences.
                        </p>

                        <h6 className="footer-social-heading">
                            Connect With Us
                        </h6>

                        <div className="footer-social-links">
                            {socialLinks.map(
                                ({ name, href, className, Icon }) => (
                                    <a
                                        key={name}
                                        href={href}
                                        className={`footer-social-icon ${className}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit Xlligent Softwares on ${name}`}
                                        title={name}
                                    >
                                        <Icon aria-hidden="true" />
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    {/* 2. COMPANY */}
                    <nav
                        className="footer-links-column"
                        aria-label="Company navigation"
                    >
                        <h6>Company</h6>

                        <ul>
                            {companyLinks.map(({ label, to }) => (
                                <li key={`${to}-${label}`}>
                                    <Link to={to}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* 3. SERVICES */}
                    <nav
                        className="footer-links-column"
                        aria-label="Services navigation"
                    >
                        <h6>Our Services</h6>

                        <ul>
                            {serviceLinks.map(({ label, to }) => (
                                <li key={label}>
                                    <Link to={to}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* 4. LOCATIONS */}
                    <div className="footer-locations-column">
                        <h6>Our Locations</h6>

                        <ul className="office-locations">
                            {officeLocations.map(({ name, query }) => (
                                <li key={name}>
                                    <a
                                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`}
                                        className="office-location-link"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Find ${name} on Google Maps`}
                                    >
                                        <FaMapMarkerAlt aria-hidden="true" />
                                        <span>{name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* 5. CONTACT */}
                    <div className="footer-contact-column">
                        <h6>Contact Us</h6>

                        <ul className="contact-list">
                            <li>
                                <FaPhone
                                    className="footer-contact-icon"
                                    aria-hidden="true"
                                />

                                <a href="tel:+916261900209">
                                    +91 6261900209
                                </a>
                            </li>

                            <li>
                                <FaEnvelope
                                    className="footer-contact-icon"
                                    aria-hidden="true"
                                />

                                <a href="mailto:sales@xlligent-softwares.com">
                                    sales@xlligent-softwares.com
                                </a>
                            </li>

                            <li>
                                <FaEnvelope
                                    className="footer-contact-icon"
                                    aria-hidden="true"
                                />

                                <a href="mailto:usaservices@xlligent-softwares.com">
                                    usaservices@xlligent-softwares.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* COPYRIGHT AND BOTTOM BAR */}
                <div className="second-footer-bottom">
                    <p>
                        © {currentYear} Xlligent Softwares Pvt. Ltd.
                        {" "}All rights reserved.
                    </p>

                  

                    <button
                        type="button"
                        className="footer-back-to-top"
                        onClick={() => {
                            window.scrollTo({
                                top: 0,
                                behavior: "smooth",
                            });
                        }}
                        aria-label="Back to top"
                        title="Back to top"
                    >
                        <FaArrowUp aria-hidden="true" />
                    </button>
                </div>
            </div>
        </footer>
    );
}