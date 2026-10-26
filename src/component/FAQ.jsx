import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import "./FAQ.css";

function FAQ() {

    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            question: "Is Xlligent Softwares a product company or an IT agency?",
            answer:
                "Xlligent Softwares is a product-based software company. We build our own software products for business operations, and configure them to fit each customer's workflow — rather than taking on generic outsourced projects.",
        },
        {
            question: "Can your software be customized for our business?",
            answer:
                "Yes. Our ERP and business management products are configured around the specific processes, roles and requirements of each business that uses them.",
        },
        {
            question: "What kind of businesses do you work with?",
            answer:
                "We work with businesses across different industries that need centralized, easy-to-use software to manage their day-to-day operations.",
        },
        {
            question: "Do you provide web and app products as well?",
            answer:
                "Yes. Alongside business management software, we also build web platforms and applications as part of our product offering.",
        },
        {
            question: "How can I see a demo or get in touch?",
            answer:
                "You can reach out through the contact page or call our team directly, and we'll walk you through the right product for your business.",
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(
            openIndex === index ? null : index
        );
    };

    return (
        <section className="faq-section">

            <div className="faq-heading">

                <span className="section-tag">
                    FAQ
                </span>

                <h2>
                    Frequently Asked<span> Questions</span>
                </h2>

                <p>
                    Find answers to common questions about
                    Xlligent Softwares and its services.
                </p>

            </div>

            <div className="faq-list">

                {faqs.map((faq, index) => (

                    <div
                        className={`faq-item ${
                            openIndex === index ? "active" : ""
                        }`}
                        key={index}
                    >

                        <button
                            className="faq-question"
                            onClick={() => toggleFAQ(index)}
                        >

                            <span>
                                {faq.question}
                            </span>

                            <FaPlus />

                        </button>

                        <div className="faq-answer">

                            <p>
                                {faq.answer}
                            </p>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default FAQ;
