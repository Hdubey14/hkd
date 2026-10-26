import {
    FaCheckCircle,
    FaHospital,
    FaIndustry,
    FaGraduationCap,
    FaFileInvoice,
    FaCapsules,
    FaBuilding,
    FaShoppingCart,
} from "react-icons/fa";

import CTA from "../component/CTA";
import usePageMeta from "../hooks/usePageMeta";
import "./Aboutpage.css";

const overviewImage =
    "https://www.xlligent-softwares.com/storage/pages/a3fNC2Qu9a20EI4egys3hLrzzFGNJ7tYfLf37B7R.jpg";

const funFactImage =
    "https://www.xlligent-softwares.com/storage/pages/txigyOneK8QbCTnpMlRyuL32zcpAT2ExrqF83cXO.jpg";

function About() {
    usePageMeta(
        "About Xlligent Softwares | Industry-Focused Software Products",
        "Learn about Xlligent Softwares, a software company developing customised industry-focused software products for education, healthcare, manufacturing, business management, real estate and e-commerce.",
        "about Xlligent Softwares, software development company, school management software, hospital management software, manufacturing ERP, pharmacy management software, college management system, billing software, real estate software, e-commerce solutions"
    );

    const approach = [
        "Software designed around real business workflows",
        "Customised solutions for industry-specific requirements",
        "Centralised and easy-to-use interfaces",
        "Continuous product improvements and support",
        "Scalable modules that adapt to changing business needs",
        "Industry-focused innovation and practical digital solutions",
    ];

    // Products currently featured on the website
    const products = [
        {
            title: "School Management Solution",
            category: "EDUCATION",
            modules: "20+ Modules",
            description:
                "Simplify school administration with student records, attendance, fee management, examinations, staff information, parent communication and academic reporting in one organised platform.",
            image:
                "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=700&q=80",
            number: "01",
        },
        {
            title: "Hospital Management Solution",
            category: "HEALTHCARE",
            modules: "20+ Modules",
            description:
                "Coordinate patient registration, appointments, doctor schedules, billing, departments, staff information and hospital administration through a connected digital workflow.",
            image:
                "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=700&q=80",
            number: "02",
        },
        {
            title: "Manufacturing Solution",
            category: "MANUFACTURING",
            modules: "20+ Modules",
            description:
                "Organise production planning, raw materials, inventory, purchasing, costing, quality processes and dispatch to improve visibility across manufacturing operations.",
            image:
                "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=700&q=80",
            number: "03",
        },
        {
            title: "College Management Solution",
            category: "EDUCATION",
            modules: "20+ Modules",
            description:
                "Bring student information, admissions, academics, faculty, attendance, fee collection, examinations and institutional administration together in one system.",
            image:
                "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=700&q=80",
            number: "04",
        },
        {
            title: "Billing Management Solution",
            category: "BUSINESS",
            modules: "20+ Modules",
            description:
                "Manage invoicing, customer and supplier records, payment tracking, transaction histories and business reports with a streamlined billing management workflow.",
            image:
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=700&q=80",
            number: "05",
        },
        {
            title: "Pharmacy Management Solution",
            category: "HEALTHCARE",
            modules: "20+ Modules",
            description:
                "Track medicines, stock levels, purchases, sales, expiry dates, suppliers and billing to help pharmacies organise inventory and daily operations efficiently.",
            image:
                "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=700&q=80",
            number: "06",
        },
        {
            title: "Real Estate Solution",
            category: "REAL ESTATE",
            modules: "20+ Modules",
            description:
                "Organise property listings, customer enquiries, leads, site visits, follow-ups, bookings and sales activities through a centralised property management workflow.",
            image:
                "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=700&q=80",
            number: "07",
        },
        {
            title: "E-Commerce Solution",
            category: "E-COMMERCE",
            modules: "20+ Modules",
            description:
                "Connect product catalogues, customer accounts, online orders, payments, inventory, shipping and sales operations to support a smoother digital shopping experience.",
            image:
                "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=700&q=80",
            number: "08",
        },

    ];

    const facts = [
        { value: "121+", label: "Clients Globally" },
        { value: "897+", label: "Successful Implementations" },
        { value: "5+", label: "Years of Experience" },
        { value: "90%", label: "Customer Retention" },
        { value: "4.9/5", label: "Google Rating (72 Reviews)" },
        { value: "24/7", label: "Customer Support & Assistance" },
    ];

    // Keep these figures aligned with the homepage.
    // Display only figures verified by your company.


    return (
        <main className="info-page about-page">
            {/* HERO */}
            {/* COMPANY OVERVIEW — MERGED HERO + OVERVIEW */}
            <section className="info-hero about-hero original-overview-section">
                <div className="original-about-container overview-grid">
                    <div className="original-about-copy">
                        <span className="section-tag">
                            COMPANY OVERVIEW
                        </span>

                        <h1>
                            About <span>Xlligent Softwares</span>
                        </h1>

                        <p>
                            Xlligent Softwares is a product-focused software company
                            committed to developing customised, user-friendly digital
                            solutions for businesses, educational institutions,
                            healthcare providers and other industries. Our goal is to
                            make technology practical, accessible and useful for
                            everyday business operations.Our software portfolio covers School Management, College
                            Management, Hospital Management, Pharmacy Management,
                            Manufacturing Management, Billing Management, Real Estate
                            Management and E-Commerce.
                        </p>

                        <p>
                            We understand that every organisation has its own
                            processes, challenges and priorities. That is why our
                            approach focuses on relevant functionality, configurable
                            workflows and straightforward interfaces that users can
                            understand and adopt more easily.By bringing related information and everyday tasks
                            together, our solutions can help reduce repetitive manual
                            work, improve information visibility and support better
                            coordination between teams. We continue to improve our
                            products to meet evolving business requirements.
                        </p>

                        <div className="about-hero-points">
                            <span>
                                <FaCheckCircle />
                                Industry-Focused Products
                            </span>

                            <span>
                                <FaCheckCircle />
                                Customised Business Workflows
                            </span>

                            <span>
                                <FaCheckCircle />
                                Continuous Improvement
                            </span>
                        </div>
                    </div>

                </div>
            </section>

            {/* COMPANY FACTS / OUR JOURNEY */}
            <section className="info-section original-fun-section">
                <div className="original-about-container">
                    <div className="original-fun-heading">
                        <span className="section-tag">
                            OUR JOURNEY
                        </span>

                        <h2>
                            Experience That
                            <span> Builds Confidence</span>
                        </h2>

                        <p>
                            Our journey is centred on creating useful,
                            industry-focused software products that help
                            organisations bring their operations together.
                            By understanding practical business challenges
                            and evolving user expectations, we aim to make
                            everyday work more organised, accessible and
                            efficient.
                        </p>

                        <p>
                            We continue to focus on improving product
                            usability, expanding relevant capabilities and
                            developing solutions that align with the
                            changing requirements of different industries.
                            Our long-term approach is built around
                            practical innovation, adaptable technology
                            and continuous improvement.
                        </p>
                    </div>

                    <div className="original-fun-grid">
                        <div className="original-facts-grid">
                            {facts.map((fact, index) => (
                                <div
                                    className="original-fact"
                                    key={index}
                                >
                                    <div className="original-fact-value">
                                        <strong>{fact.value}</strong>
                                    </div>

                                    <p>{fact.label}</p>
                                </div>
                            ))}
                        </div>

                    </div>


                </div>
            </section>

            {/* PRODUCTS */}
            <section className="info-section about-products-section">
                <div className="services-heading">
                    <span className="section-tag">
                        PRODUCTS & INDUSTRIES WE SERVE
                    </span>

                    <h2>
                        Software for
                        <span> Every Business Need</span>
                    </h2>

                    <p>
                        Explore our software products for education,
                        healthcare, manufacturing, business management,
                        real estate and e-commerce. Our solutions bring
                        essential workflows into one organised environment,
                        helping teams manage information and coordinate
                        everyday operations more efficiently.
                    </p>
                </div>

                <div className="services-grid">
                    {products.map((product) => (
                        <article
                            className="service-card"
                            key={product.number}
                        >
                            <div className="product-card-top">
                                <div className="service-icon">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        loading="lazy"
                                    />
                                </div>

                                <span className="product-number">
                                    {product.number}
                                </span>
                            </div>

                            <span className="product-category">
                                {product.category}
                            </span>

                            <h3>{product.title}</h3>

                            <p>{product.description}</p>

                            <div className="product-card-footer">
                                <span className="product-module-count">
                                    {product.modules}
                                </span>

                                <span className="product-card-arrow">
                                    <FaCheckCircle />
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </section>



            {/* CALL TO ACTION */}
            <CTA />
        </main>
    );
}

export default About;