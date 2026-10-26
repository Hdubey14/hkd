
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
    FaArrowRight,
    FaCheckCircle,
    FaPhoneAlt,
    FaChevronLeft,
    FaChevronRight,
} from "react-icons/fa";

import CTA from "../component/CTA";
import usePageMeta from "../hooks/usePageMeta";
import "./PortfolioPage.css";

const AUTOPLAY_DELAY = 7000;

const projects = [
  {
    number: "01",
    title: "School Management Solution",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=90",
    slug: "school-management",
    description:
      "A complete school management solution designed to simplify academic, administrative and everyday school operations through one centralized platform.",
    highlights: [
      "Student & Teacher Management",
      "Attendance & Examination",
      "Fees & Finance Management",
      "Parent & Communication",
    ],
    builtFor: "Schools • Teachers • Administrators • Parents",
  },
  {
    number: "02",
    title: "Hospital Management Solution",
   image: "https://teramedik.com/articles/1777020884_4.png", slug: "hospital-management",
    description:
      "An integrated hospital management platform that helps healthcare organizations manage patients, appointments, clinical workflows and administrative operations efficiently.",
    highlights: [
      "Patient & Appointment Management",
      "OPD & IPD Management",
      "Pharmacy & Medicine Management",
      "Billing & Financial Operations",
    ],
    builtFor: "Hospitals • Clinics • Doctors • Healthcare Staff",
  },
  {
    number: "03",
    title: "ERP Solution",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=90",
    slug: "erp-portals",
    description:
      "A centralized ERP solution that connects important business processes and operational data to improve coordination, visibility and everyday business management.",
    highlights: [
      "Finance & Accounting",
      "HR & Employee Management",
      "Inventory & Purchase",
      "Sales & Business Reports",
    ],
    builtFor: "Businesses • Enterprises • Operations Teams",
  },
  {
    number: "04",
    title: "College Management Solution",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=90",
    slug: "college-management",
    description:
      "A centralized college management platform built to organize admissions, students, faculty, courses and academic activities in one connected system.",
    highlights: [
      "Admission & Student Management",
      "Faculty & Course Management",
      "Attendance & Examination",
      "Fees & Administration",
    ],
    builtFor: "Colleges • Universities • Faculty • Administrators",
  },
  {
    number: "05",
    title: "Billing Management Solution",
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=90",
    slug: "billing-management",
    description:
      "A practical billing and business management solution designed to simplify invoicing, sales, payments, products and customer transactions.",
    highlights: [
      "Invoice & Billing",
      "Product & Customer Management",
      "Sales & Payment Tracking",
      "Financial Reports",
    ],
    builtFor: "Retailers • Businesses • Shops • Service Providers",
  },
  {
    number: "06",
    title: "Pharmacy Management Solution",
    image:
      "https://images.unsplash.com/photo-1576602976047-174e57a47881?auto=format&fit=crop&w=1400&q=90",
    slug: "pharmacy-management",
    description:
      "A pharmacy management solution designed to organize medicines, inventory, purchases, suppliers and billing while keeping important stock information accessible.",
    highlights: [
      "Medicine & Batch Management",
      "Inventory & Stock Tracking",
      "Purchase & Supplier Management",
      "Pharmacy Billing",
    ],
    builtFor: "Pharmacies • Medical Stores • Pharmacy Staff",
  },
  {
    number: "07",
    title: "Web Development ",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=90",
    slug: "custom-web-development",
    description:
      "Custom websites and web applications developed around specific business requirements, workflows and user needs with modern and responsive interfaces.",
    highlights: [
      "Responsive Web Applications",
      "Custom Business Features",
      "API & Database Integration",
      "Scalable Web Solutions",
    ],
    builtFor: "Startups • Businesses • Organizations • Enterprises",
  },
  {
    number: "08",
    title: "Real Estate ",
   image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90", slug: "real-estate",
    description:
      "A centralized real estate management solution for organizing properties, listings, customers and leads while improving day-to-day property operations.",
    highlights: [
      "Property & Listing Management",
      "Buyer & Seller Management",
      "Lead & Inquiry Tracking",
      "Property Reports & Data",
    ],
    builtFor: "Real Estate Agencies • Brokers • Property Teams",
  },
  {
    number: "09",
    title: "E-Commerce ",
   image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=90", slug: "e-commerce",
    description:
      "A complete e-commerce solution designed to manage online products, customers, orders, inventory and digital sales through one centralized platform.",
    highlights: [
      "Product & Catalog Management",
      "Orders & Customer Management",
      "Inventory Management",
      "Payments & Sales Tracking",
    ],
    builtFor: "Retail Businesses • Brands • Online Stores • Sellers",
  },
  {
    number: "10",
    title: "Manufacturing ERP Solution",
    image:
      "https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1400&q=90",
    slug: "manufacturing-erp",
    description:
      "A complete manufacturing ERP solution designed to manage production planning, raw materials, purchasing, inventory, quality control, costing, warehouse and dispatch operations.",
    highlights: [
      "Production Planning & Management",
      "BOM & Product Costing",
      "Raw Material & Purchase Management",
      "Warehouse & Quality Control",
    ],
    builtFor:
      "Manufacturing Companies • Production Teams • Factories • Enterprises",
  },
];
function PortfolioPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const touchStartX = useRef(null);

    usePageMeta(
        "Business Software Products | Xlligent Softwares",
        "Explore school, hospital, college, pharmacy, billing, manufacturing, real estate and e-commerce software solutions from Xlligent Softwares.",
        "business software products, school ERP, hospital software, college management software, pharmacy software, billing software, manufacturing ERP"
    );

    useEffect(() => {
        if (isPaused) return undefined;

        const timer = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % projects.length);
        }, AUTOPLAY_DELAY);

        return () => window.clearInterval(timer);
    }, [isPaused]);

    const showPrevious = () => {
        setActiveIndex((current) =>
            (current - 1 + projects.length) % projects.length
        );
    };

    const showNext = () => {
        setActiveIndex((current) => (current + 1) % projects.length);
    };

    const handleTouchStart = (event) => {
        touchStartX.current = event.touches[0].clientX;
        setIsPaused(true);
    };

    const handleTouchEnd = (event) => {
        if (touchStartX.current === null) {
            setIsPaused(false);
            return;
        }

        const distance =
            event.changedTouches[0].clientX - touchStartX.current;

        if (Math.abs(distance) > 45) {
            if (distance < 0) showNext();
            else showPrevious();
        }

        touchStartX.current = null;
        setIsPaused(false);
    };

    return (
        <main className="info-page portfolio-page">
            <section className="info-hero portfolio-hero">
                <span className="section-tag">OUR PRODUCTS</span>

                <h1>
                    Smart Solutions Built For 
                    <span> Real Businesses</span>
                </h1>

                <p>
                    Explore software products developed by Xlligent
                    Softwares to simplify operations, improve productivity
                    and help businesses manage their everyday processes
                    efficiently.
                </p>
            </section>

            <section className="info-section xprod-section">
                <div
                    className="xprod-carousel"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onFocus={() => setIsPaused(true)}
                    onBlur={(event) => {
                        if (!event.currentTarget.contains(event.relatedTarget)) {
                            setIsPaused(false);
                        }
                    }}
                >
                    <div className="xprod-carousel-topline">
                        <span className="xprod-carousel-kicker">
                            SOLUTIONS THAT MOVE BUSINESS FORWARD
                        </span>

                        <span className="xprod-carousel-count" aria-live="polite">
                            <strong>
                                {String(activeIndex + 1).padStart(2, "0")}
                            </strong>
                            <span>
                                {" "}/ {String(projects.length).padStart(2, "0")}
                            </span>
                        </span>
                    </div>

                    <div className="xprod-stage" aria-live="polite">
                        {projects.map((project, projectIndex) => (
                            <article
                                className={`xprod-card ${
                                    projectIndex === activeIndex ? "is-active" : ""
                                }`}
                                key={project.slug}
                                aria-hidden={projectIndex !== activeIndex}
                            >
                                <div className="xprod-card-visual">
                                    <img
                                        className="xprod-background"
                                        src={project.image}
                                        alt={`${project.title} solution`}
                                        loading={projectIndex === 0 ? "eager" : "lazy"}
                                    />

                                    <div className="xprod-visual-shade" />

                                    <span className="xprod-visual-number">
                                        {project.number}
                                    </span>

                                    <span className="xprod-visual-caption">
                                        XLLIGENT SOFTWARES · PRODUCT SUITE
                                    </span>
                                </div>

                                <div className="xprod-content">
                                                    <h2 className="xprod-title">
                                        Customised {project.title}
                                    </h2>

                                    <p className="xprod-description">
                                        {project.description}
                                    </p>

                                    <div className="xprod-feature-section">
                                        <h3 className="xprod-feature-title">
                                            KEY CAPABILITIES
                                        </h3>

                                        <div className="xprod-highlights">
                                            {project.highlights.map((highlight) => (
                                                <div
                                                    className="xprod-highlight"
                                                    key={highlight}
                                                >
                                                    <FaCheckCircle aria-hidden="true" />
                                                    <span>{highlight}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="xprod-built-for">
                                        <span>BUILT FOR</span>
                                        <p>{project.builtFor}</p>
                                    </div>

                                    <div className="xprod-actions">
                                        <Link
                                            to={`/products/${project.slug}`}
                                            className="xprod-action xprod-primary"
                                            tabIndex={projectIndex === activeIndex ? 0 : -1}
                                        >
                                            <span>Explore Product</span>
                                            <FaArrowRight aria-hidden="true" />
                                        </Link>

                                        <Link
                                            to="/contact"
                                            className="xprod-action xprod-contact"
                                            tabIndex={projectIndex === activeIndex ? 0 : -1}
                                        >
                                            <FaPhoneAlt aria-hidden="true" />
                                            <span>Talk to Our Team</span>
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}

                        <button
                            type="button"
                            className="xprod-arrow xprod-arrow-prev"
                            aria-label="Previous product"
                            onClick={showPrevious}
                        >
                            <FaChevronLeft aria-hidden="true" />
                        </button>

                        <button
                            type="button"
                            className="xprod-arrow xprod-arrow-next"
                            aria-label="Next product"
                            onClick={showNext}
                        >
                            <FaChevronRight aria-hidden="true" />
                        </button>
                    </div>

                    <div className="xprod-carousel-controls">
                        <div className="xprod-dots" aria-label="Choose a product">
                            {projects.map((project, index) => (
                                <button
                                    type="button"
                                    key={project.slug}
                                    className={`xprod-dot ${
                                        index === activeIndex ? "is-active" : ""
                                    }`}
                                    aria-label={`Show ${project.title}`}
                                    aria-current={
                                        index === activeIndex ? "true" : undefined
                                    }
                                    onClick={() => setActiveIndex(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

            </section>

            <CTA />
        </main>
    );
}

export default PortfolioPage;
