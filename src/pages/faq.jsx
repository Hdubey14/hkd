import usePageMeta from "../hooks/usePageMeta";
import React, { useState } from "react";
import {
    FaPlus,
    FaMinus,
    FaQuestionCircle,
} from "react-icons/fa";
import "./faq.css";

const faqCategories = [
    {
        id: "company",
        title: "Company",
        questions: [
            {
                question: "What is Xlligent Softwares?",
                answer:
                    "Xlligent Softwares is a software development company focused on building business software, ERP solutions, web platforms, mobile applications and customized digital solutions for organizations.",
            },
            {
                question: "What type of businesses do you work with?",
                answer:
                    "We work with businesses, educational institutions, healthcare organizations, startups and other organizations that need customized software or digital solutions.",
            },
            {
                question: "Where is Xlligent Softwares located?",
                answer:
                    "Xlligent Softwares has business presence associated with locations including Dewas, Indore, Bangalore and Penang, Malaysia.",
            },
        ],
    },

    {
        id: "software",
        title: "Software & Products",
        questions: [
            {
                question: "What software products does Xlligent provide?",
                answer:
                    "Our product solutions can include School Management, ERP, business management, billing, healthcare, pharmacy, real estate, e-commerce and other customized software solutions.",
            },
            {
                question: "Can your software be customized?",
                answer:
                    "Yes. Software can be customized according to business workflows, departments, user roles, reports, integrations and other project-specific requirements.",
            },
            {
                question: "Can I see a product demo?",
                answer:
                    "Yes. Product demo links can be provided for available products. You can also contact our team to discuss your requirements and request a suitable demonstration.",
            },
        ],
    },

    {
        id: "development",
        title: "Development",
        questions: [
            {
                question: "Can Xlligent build custom software?",
                answer:
                    "Yes. Custom software can be developed around your business process, required modules, user roles, database structure, integrations and reporting requirements.",
            },
            {
                question: "Do you develop websites and web applications?",
                answer:
                    "Yes. We develop business websites, web applications, dashboards, portals and customized web platforms based on project requirements.",
            },
            {
                question: "Do you develop mobile applications?",
                answer:
                    "Mobile applications can be developed for business and product requirements depending on the scope, features and target platforms.",
            },
            {
                question: "Can you integrate APIs with software?",
                answer:
                    "Yes. APIs can be integrated for communication between systems, payment services, third-party platforms, notifications and other required services.",
            },
        ],
    },

    {
        id: "erp",
        title: "ERP & Business Solutions",
        questions: [
            {
                question: "What is an ERP solution?",
                answer:
                    "An ERP solution connects multiple business operations into a centralized system so organizations can manage data, processes, users and reports from one platform.",
            },
            {
                question: "Which departments can be included in an ERP?",
                answer:
                    "Depending on the project, ERP modules may include HR, accounts, sales, purchase, inventory, finance, CRM, operations, reports and other business-specific departments.",
            },
            {
                question: "Can ERP generate reports and dashboards?",
                answer:
                    "Yes. Reporting dashboards can be designed to provide useful information about business activities, transactions, performance and operational data.",
            },
        ],
    },

    {
        id: "ai",
        title: "AI & Technology",
        questions: [
            {
                question: "How can AI help in a software project?",
                answer:
                    "AI can help analyze business data, generate summaries and reports, identify patterns, provide insights, assist with routine administrative tasks and support automation where appropriate.",
            },
            {
                question: "Is AI included in every Xlligent product?",
                answer:
                    "Not necessarily. AI features depend on the product, business requirements, available data, technical feasibility and the specific functionality required for the project.",
            },
            {
                question: "Can AI be added to an existing software system?",
                answer:
                    "Yes, where technically suitable. AI capabilities can be integrated into existing systems for areas such as data analysis, recommendations, automation, reporting or assistance.",
            },
        ],
    },

    {
        id: "support",
        title: "Support & Project",
        questions: [
            {
                question: "What information is required to start a project?",
                answer:
                    "Usually we need information about your business, required software, important modules, users, workflow, integrations, reports and any specific features you want in the system.",
            },
            {
                question: "Do you provide support after development?",
                answer:
                    "Support and maintenance can be discussed according to the project scope and requirements. This may include issue resolution, updates and further improvements.",
            },
            {
                question: "How can I contact Xlligent Softwares?",
                answer:
                    "You can contact our team through the Contact Us page, email or the available phone and WhatsApp communication options.",
            },
        ],
    },
];

const extraQuestions = {
    company: [
        { question: "Where is Xlligent Softwares based?", answer: "Xlligent Softwares works with clients across different locations. Contact the team for current office and service-location details." },
        { question: "How can I learn more about the company?", answer: "Explore the About, Services, Products and Projects sections of this website, or contact the team directly." },
    ],
    software: [
        { question: "Can the software grow with my business?", answer: "Solutions can be planned with scalable features and additional modules as business requirements evolve." },
        { question: "Can I request a feature that is not listed?", answer: "Yes. Share the required workflow and feature details so the team can assess the best approach." },
    ],
    development: [
        { question: "Will the website work on mobile devices?", answer: "Responsive layouts can be designed to support phones, tablets, laptops and desktop screens." },
        { question: "Can you update an existing application?", answer: "Existing applications can be reviewed to assess improvements, new features, integrations and maintenance needs." },
    ],
    erp: [
        { question: "Can ERP permissions differ by user role?", answer: "Role-based access can be planned so that users see the features and information relevant to their responsibilities." },
        { question: "Can ERP reports be customized?", answer: "Reports and dashboards can be scoped around the business information and performance measures your team needs." },
    ],
    ai: [
        { question: "Does AI require business data?", answer: "Many AI use cases depend on relevant, permitted data. The appropriate data requirements are assessed for each project." },
        { question: "Can AI features be reviewed before launch?", answer: "AI functionality should be tested against the intended tasks, expected outputs, privacy requirements and user workflows before release." },
    ],
    support: [
        { question: "Can requirements change during a project?", answer: "Changes can be reviewed with the team to understand their impact on scope, timeline and cost before implementation." },
        { question: "How do I request a quotation?", answer: "Share your product needs, expected users, important modules, integrations and timeline through the Contact page to request a discussion." },
    ],
};

function FAQ() {
    usePageMeta(
        "Frequently Asked Questions | Xlligent Softwares",
        "Find answers about Xlligent Softwares, business software, ERP products, web and app development, project delivery and support.",
        "Xlligent Softwares FAQ, business software questions, ERP software, web development"
    );
    const [activeCategory, setActiveCategory] = useState("company");
    const [openQuestion, setOpenQuestion] = useState("company-0");

    const toggleQuestion = (id) => {
        setOpenQuestion(openQuestion === id ? "" : id);
    };

    return (
        <div className="xfaq-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="xfaq-hero">
                <div className="xfaq-hero-content">

                    <span className="xfaq-tag">
                        
                        FREQUENTLY ASKED QUESTIONS
                    </span>

                    <h1>
                        Everything You Need To<span> Know
                         About Xlligent</span>
                    </h1>

                    <p>
                        Find answers about our company, software products,
                        custom development, ERP solutions, AI capabilities,
                        technology and project support.
                    </p>

                </div>

                <div className="xfaq-hero-visual">
                    <div className="xfaq-question-orbit">
                        <span>?</span>
                    </div>

                    <div className="xfaq-floating-card xfaq-card-one">
                        Software
                    </div>

                    <div className="xfaq-floating-card xfaq-card-two">
                        AI & Technology
                    </div>

                    <div className="xfaq-floating-card xfaq-card-three">
                        ERP Solutions
                    </div>
                </div>
            </section>


            {/* =====================================================
                FAQ CONTENT
            ===================================================== */}

            <section className="xfaq-section" id="xfaq-content">

               
                <div className="xfaq-layout">

                    {/* SIDEBAR */}

                    <aside className="xfaq-sidebar">

                        <div className="xfaq-sidebar-title">
                            FAQ Categories
                        </div>

                        {faqCategories.map((category) => (
                            <button
                                type="button"
                                key={category.id}
                                className={`xfaq-category-link ${activeCategory === category.id ? "active" : ""}`}
                                aria-pressed={activeCategory === category.id}
                                onClick={() => { setActiveCategory(category.id); setOpenQuestion(`${category.id}-0`); }}
                            >
                                {category.title}
                            </button>
                        ))}

                    </aside>


                    {/* QUESTIONS */}

                    <div className="xfaq-list">

                        {faqCategories.filter((category) => category.id === activeCategory).map((category) => (
                            <div
                                className="xfaq-category"
                                id={`xfaq-${category.id}`}
                                key={category.id}
                            >

                                <div className="xfaq-category-heading">
                                    <span>{category.title}</span>
                                </div>

                                {[...category.questions, ...(extraQuestions[category.id] || [])].slice(0, 5).map((item, index) => {

                                    const questionId =
                                        `${category.id}-${index}`;

                                    const isOpen =
                                        openQuestion === questionId;

                                    return (
                                        <div
                                            className={`xfaq-item ${
                                                isOpen
                                                    ? "xfaq-item-open"
                                                    : ""
                                            }`}
                                            key={questionId}
                                        >

                                            <button
                                                className="xfaq-question"
                                                onClick={() =>
                                                    toggleQuestion(questionId)
                                                }
                                            >
                                                <span>
                                                    {item.question}
                                                </span>

                                                <span className="xfaq-icon">
                                                    {isOpen ? (
                                                        <FaMinus />
                                                    ) : (
                                                        <FaPlus />
                                                    )}
                                                </span>
                                            </button>

                                            <div
                                                className={`xfaq-answer ${
                                                    isOpen
                                                        ? "xfaq-answer-open"
                                                        : ""
                                                }`}
                                            >
                                                <p>
                                                    {item.answer}
                                                </p>
                                            </div>

                                        </div>
                                    );
                                })}

                            </div>
                        ))}

                    </div>

                </div>
            </section>


            {/* =====================================================
                CTA
            ===================================================== */}
        </div>
    );
}

export default FAQ;
