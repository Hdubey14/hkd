import { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../public/image/logo.webp"
import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaTimes,
    FaInstagram,
    FaFacebookF,
    FaYoutube,
    FaLinkedinIn
} from "react-icons/fa";
import "./contactsocial.css";

function ContactSidebar({ isOpen, onClose }) {
    useEffect(() => {

        const handleEscape = (e) => {
            if (e.key === "Escape") {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };

    }, [isOpen, onClose]);

    const closeButtonRef = useRef(null);

    useEffect(() => {

        if (isOpen) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            closeButtonRef.current?.focus();
        } else {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        }

        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };

    }, [isOpen]);


    return (
        <>
            <div
                className={`sidebar-overlay ${isOpen ? "show" : ""
                    }`}
                onClick={onClose}
            ></div>

            <aside
                className={`contact-sidebar ${isOpen ? "open" : ""
                    }`}
            >

                <div className="sidebar-header">

                    <img
                        src={logo}
                        alt="Xlligent Softwares"
                    />

                    <button
                        ref={closeButtonRef}
                        className="sidebar-close"
                        onClick={onClose}
                        aria-label="Close sidebar"
                    >
                        <FaTimes />
                    </button>

                </div>


                <div className="sidebar-content">

                    <nav className="sidebar-navigation" aria-label="Main navigation">
                        <h2 className="sidebar-navigation-heading">Explore Menu</h2>
                        <div className="sidebar-navigation-grid">
                            {[
                                ["Home", "/"],
                                ["About", "/about"],
                                ["Services", "/services"],
                                ["Products", "/products"],
                                ["Careers", "/career"],
                                ["Project", "/project"],
                                ["Reviews", "/reviews"],
                                ["FAQ", "/faq"],
                            ].map(([label, path]) => (
                                <NavLink
                                    key={path}
                                    to={path}
                                    end={path === "/"}
                                    className={({ isActive }) =>
                                        `sidebar-navigation-link${isActive ? " active" : ""}`
                                    }
                                    onClick={onClose}
                                >
                                    <span>{label}</span>
                                    <span className="sidebar-navigation-arrow" aria-hidden="true">›</span>
                                </NavLink>
                            ))}
                        </div>
                    </nav>

                    <p className="sidebar-project-text">
                        Do you have a project in your mind?

                        Keep connect us.
                    </p>


                    <h2>Contact Us</h2>
                    <Link
                        to="/contact"
                        className="sidebar-contact-button"
                        onClick={onClose}
                    >
                        Contact Us
                    </Link>

                    <div className="sidebar-contact-item">

                        <FaPhoneAlt />

                        <div>
                            
                            <a href="tel:+916261900209">
                                +91 6261900209
                            </a>
                        </div>

                    </div>


                    <div className="sidebar-contact-item">

                        <FaEnvelope />

                        <a href="mailto:sales@xlligent-softwares.com">
                            sales@xlligent-softwares.com
                        </a>

                    </div>

                    <div className="sidebar-contact-item">

                        <FaEnvelope />

                        <a href="mailto:usaservices@xlligent-softwares.com">
                            usaservices@xlligent-softwares.com
                        </a>

                    </div>


                    <div className="sidebar-location">

                        <div className="sidebar-location-title">
                            <span>Locations</span>
                        </div>


                        <p><FaMapMarkerAlt aria-hidden="true" /> Indore, Madhya Pradesh, India</p>

                        <p><FaMapMarkerAlt aria-hidden="true" /> Bangalore, Karnataka, India</p>

                        <p><FaMapMarkerAlt aria-hidden="true" /> Penang, Malaysia</p>
                        <p><FaMapMarkerAlt aria-hidden="true" /> Durham, North Carolina, USA</p>


                    </div>
                    <div className="sidebar-social-section">

                        <h3>Follow Us</h3>

                        <div className="sidebar-socials">

                            <a
                                href="https://www.instagram.com/xlligent_softwares_pvt.ltd/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="instagram"
                            >
                                <FaInstagram />
                            </a>

                            <a
                                href="https://www.facebook.com/xlligentsoftwares/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="facebook"
                            >
                                <FaFacebookF />
                            </a>

                            <a
                                href="https://www.youtube.com/@xlligent_softwares_pvt_ltd"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="YouTube"
                                className="youtube"
                            >
                                <FaYoutube />
                            </a>

                            <a
                                href="https://www.linkedin.com/company/xlligentsoftwares-pvt-ltd/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="linkedin"
                            >
                                <FaLinkedinIn />
                            </a>

                        </div>

                    </div>

                </div>

            </aside>

            <button className="ai-button">
                <span className="xlligent-x-mark" aria-hidden="true">X</span>
            </button>
            <a
                href={`https://wa.me/916261900209?text=${encodeURIComponent(
                    "Hello, I visited https://www.xlligent-softwares.com and I'm interested in your software products. Please share the pricing, features, and demo details.    "
                )}`}
                className="whatsapp-button"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on WhatsApp"
            >
                <FaWhatsapp />
            </a>

        </>
    );
}

export default ContactSidebar;
