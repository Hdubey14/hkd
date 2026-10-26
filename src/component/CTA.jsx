import { Link } from "react-router-dom";
import {
    FaArrowRight,
    FaEnvelope,
    FaPhoneAlt,
    FaWhatsapp,
    FaCheckCircle
} from "react-icons/fa";
import "./CTA.css";

function CTA() {
    const whatsappMessage =
        "Hello! I visited www.xlligent-softwares.com and I’m interested in your services. Could you please share more information about your software solutions?";

    const whatsappURL = `https://wa.me/916261900209?text=${encodeURIComponent(
        whatsappMessage
    )}`;

    return (
        <section className="cta-section">
            <div className="cta-bg-orb cta-bg-orb-one"></div>
            <div className="cta-bg-orb cta-bg-orb-two"></div>

            <div className="cta-content">
                <div className="cta-copy">
                    <span className="cta-eyebrow">
                        <span className="cta-eyebrow-dot"></span>
                        LET'S CONNECT
                    </span>

                    <h2>
                        Ready To See
                        <span className="cta-heading-accent">
                            {" "}Our Products?
                        </span>
                    </h2>

                    <p className="cta-description">
                        Tell us about your business operations. We'll help you
                        find the right Xlligent solution, tailored to your
                        team's needs.
                    </p>

                    <div className="cta-benefits">
                        <span>
                            <FaCheckCircle />
                            Business-focused solutions
                        </span>

                        <span>
                            <FaCheckCircle />
                            Personalised guidance
                        </span>
                    </div>

                    <div className="cta-buttons">
                        <Link to="/contact" className="cta-primary">
                            Contact Us
                            <FaArrowRight className="cta-arrow" />
                        </Link>

                    </div>
                </div>

                <div className="cta-contact-card">
                    <div className="cta-card-top">
                        <div className="cta-card-icon">
                            <FaWhatsapp />
                        </div>

                        <div>
                            <span className="cta-card-kicker">
                                HAVE A PROJECT IN MIND?
                            </span>
                            <h3>Let's make it happen.</h3>
                        </div>
                    </div>

                    <p className="cta-card-description">
                        Connect with our team to discuss your requirements
                        and explore the right solution for your business.
                    </p>

                    <a
                        href={whatsappURL}
                        className="cta-whatsapp-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span>Start a WhatsApp Chat</span>
                        <FaArrowRight />
                    </a>

                    <div className="cta-card-divider"></div>

                    <a
                        href="mailto:sales@xlligent-softwares.com"
                        className="cta-detail-row"
                    >
                        <span className="cta-detail-icon">
                            <FaEnvelope />
                        </span>
                        <span>sales@xlligent-softwares.com</span>
                    </a>

                    <a
                        href="mailto:usaservices@xlligent-softwares.com"
                        className="cta-detail-row"
                    >
                        <span className="cta-detail-icon">
                            <FaEnvelope />
                        </span>
                        <span>usaservices@xlligent-softwares.com</span>
                    </a>

                    <a
                        href="tel:+916261900209"
                        className="cta-detail-row"
                    >
                        <span className="cta-detail-icon">
                            <FaPhoneAlt />
                        </span>
                        <span>+91 6261900209</span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CTA;