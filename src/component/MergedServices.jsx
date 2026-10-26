
import { useCallback, useEffect, useRef, useState } from "react";

import {
  FaArrowRight,
  FaArrowLeft,
  FaCheck,
  FaCode,
  FaExternalLinkAlt,
} from "react-icons/fa";

import "./MergedServices.css";

const xlgProducts = [
  {
    number: "01",
    module: "20+ Modules",
    category: "EDUCATION",
    title: "School Management Solution",
    description:
      "An all-in-one school management platform designed to streamline academic and administrative operations. Manage students, teachers, attendance, fees, examinations, classes, communication, documents and reports through a centralized system with role-based access, automated workflows and real-time dashboards.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1400&q=90",
    features: [
      "Student & Parent Management",
      "Teacher & Staff Management",
      "Attendance & Leave Management",
      "Fees & Payment Management",
      "Examination & Result Management",
      "Reports, Notifications & Communication",
      "Role-Based Access Control",
      "Academic & Class Management",
    ],
    moduleInfo: "20+ Modules",
    link: "/products/school-management",
    icon: "grid",
  },
  {
    number: "02",
    module: "20+ Modules",
    category: "HEALTHCARE",
    title: "Hospital Management Solution",
    description:
      "A comprehensive hospital management system built to connect clinical, administrative and financial operations on one secure platform. Manage patients, doctors, appointments, medical records, pharmacy, billing, staff, departments and reporting with real-time visibility, workflow automation and controlled access.",
    image:
      "https://ir.thg.co.th/storage/newsroom/press-release/2021/07/20210712-093705-7.jpg",
    features: [
      "Patient Registration",
      "Doctor & Staff Management",
      "Appointment & Scheduling",
      "Electronic Medical Records",
      "Pharmacy Management",
      "Billing & Insurance Management",
      "Department & Bed Management",
      "Reports, Analytics & Dashboards",
    ],
    moduleInfo: "20+ Modules",
    link: "/products/hospital-management",
    icon: "grid",
  },
  {
    number: "03",
    module: "20+ Modules",
    category: "MANUFACTURING",
    title: "Manufacturing Solution",
    description:
      "A powerful manufacturing management solution designed to connect production planning, raw materials, purchasing, inventory, warehouse, quality control, costing, sales and dispatch operations in one centralized platform. Manage production workflows, monitor material requirements, track production progress, control manufacturing costs and get real-time visibility across your entire manufacturing business.",
    image: "https://engenhan.com.br/projeto%202.png",
    features: [
      "Production Planning & Order Management",
      "Bill of Materials & Product Costing",
      "Raw Material & Inventory Management",
      "Material Requirement Planning",
      "Purchase & Supplier Management",
      "Warehouse & Stock Control",
      "Quality Control & Production Tracking",
      "Sales, Dispatch & MIS Reports",
    ],
    moduleInfo: "20+ Modules",
    link: "/products/manufacturing-erp",
    icon: "grid",
  },
  {
    number: "04",
    module: "20+ Modules",
    category: "EDUCATION",
    title: "College Management Solution",
    description:
      "A centralized college management solution built to simplify academic, administrative and student operations. Manage students, faculty, courses, attendance, examinations, fees, departments, communication and reports with automated workflows, role-based access and real-time institutional insights.",
    image:
      "https://images.pexels.com/photos/18471488/pexels-photo-18471488.jpeg?auto=compress&cs=tinysrgb&w=700",
    features: [
      "Student & Faculty Management",
      "Course & Department Management",
      "Attendance & Leave Management",
      "Examination & Results",
      "Fees & Payment Management",
      "Timetable & Academic Management",
      "Role-Based Access Control",
      "Reports & Institutional Analytics",
    ],
    moduleInfo: "20+ Modules",
    link: "/products/college-management",
    icon: "grid",
  },
  {
    number: "05",
    module: "20+ Modules",
    category: "BUSINESS",
    title: "Billing Management Solution",
    description:
      "A complete invoice management solution built specifically for MSMEs to create professional invoices, manage customers and suppliers, track payments and outstanding dues, handle GST-compliant billing and maintain complete sales records. Simplify day-to-day invoicing with automated calculations, payment reminders, inventory tracking, business reports and centralized financial information.",
    image: "https://seoxan.es/images_blog/mejoras_ar6.webp",
    features: [
      "GST-Compliant Invoice Generation",
      "Quotation & Proforma Invoice",
      "Customer & Supplier Management",
      "Payment & Outstanding Tracking",
      "Automatic Tax & Invoice Calculations",
      "Payment Reminders & Follow-Ups",
      "Sales & Invoice History",
      "MSME Business Reports & Analytics",
    ],
    moduleInfo: "20+ Modules",
    link: "/products/billing-management",
    icon: "grid",
  },
  {
    number: "06",
    module: "20+ Modules",
    category: "HEALTHCARE",
    title: "Pharmacy Management Solution",
    description:
      "A complete pharmacy management platform for controlling medicines, inventory, suppliers, purchases, sales, customers and billing from one centralized system. Track batch numbers, expiry dates and stock levels while improving operational accuracy with automated alerts, reports and controlled user access.",
    image: "https://wincast.mx/assets/farmacia.jpg",
    features: [
      "Medicine & Product Management",
      "Inventory & Stock Control",
      "Purchase & Sales Management",
      "Supplier & Vendor Management",
      "Batch & Expiry Tracking",
      "Pharmacy Billing & Payments",
      "Low Stock & Expiry Alerts",
      "Reports & Business Analytics",
    ],
    moduleInfo: "20+ Modules",
    link: "/products/pharmacy-management",
    icon: "grid",
  },
  {
    number: "07",
    module: "20+ Modules",
    category: "REAL ESTATE",
    title: "Real Estate Solution",
    description:
      "A complete real estate management platform designed to manage properties, leads, customers, agents, enquiries, site visits and sales from one centralized system. Track every stage of the sales journey, automate follow-ups and gain real-time visibility into properties, leads and business performance.",
    image:
      "https://fiverr-res.cloudinary.com/images/t_main1%2Cq_auto%2Cf_auto%2Cq_auto%2Cf_auto/gigs/469720049/original/3783bc823214e8837f101ed7f6de5b7d8deca02b/be-your-architect-draftsman-for-house-plans-2d-floor-plan-blueprints.jpeg",
    features: [
      "Property & Project Management",
      "Lead & Enquiry Management",
      "Customer & Agent Management",
      "Site Visit Scheduling",
      "Follow-Up & Reminder Automation",
      "Sales Pipeline Management",
      "Document & Booking Management",
      "Reports & Performance Analytics",
    ],
    moduleInfo: "20+ Modules",
    link: "/products/real-estate",
    icon: "grid",
  },
  {
    number: "08",
    module: "20+ Modules",
    category: "E-COMMERCE",
    title: "E-Commerce Solution",
    description:
      "A scalable e-commerce management platform built to manage the complete online shopping lifecycle from products and customers to orders, payments, inventory and delivery. Centralize operations, automate repetitive workflows and monitor sales performance through real-time dashboards and detailed business analytics.",
    image:
      "https://cdn.shopify.com/s/files/1/0841/2764/5978/files/inline2_q2_migration.png?v=1782803228",
    features: [
      "Product & Catalog Management",
      "Customer & Account Management",
      "Order & Returns Management",
      "Payment Gateway Integration",
      "Inventory & Stock Management",
      "Shipping & Delivery Management",
      "Offers, Coupons & Promotions",
      "Sales Reports & Analytics",
    ],
    moduleInfo: "20+ Modules",
    link: "/products/e-commerce",
    icon: "grid",
  },
];

function XlligentProducts() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const currentRef = useRef(0);
  const transitionLock = useRef(false);
  const resetFrameRef = useRef(null);
  const transitionFallbackRef = useRef(null);
  const touchPauseRef = useRef(false);

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isSectionVisible, setIsSectionVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const total = xlgProducts.length;

  const slides = [
    xlgProducts[total - 1],
    ...xlgProducts,
    xlgProducts[0],
  ];

  const slideIndex = current + 1;
  const realIndex = ((current % total) + total) % total;
  const product = xlgProducts[realIndex];

  const number = String(realIndex + 1).padStart(2, "0");
  const totalNumber = String(total).padStart(2, "0");

  useEffect(() => {
    currentRef.current = current;
  }, [current]);

  // Detect when the section is visible.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const clearTransitionFallback = useCallback(() => {
    if (transitionFallbackRef.current !== null) {
      clearTimeout(transitionFallbackRef.current);
      transitionFallbackRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (resetFrameRef.current !== null) {
        cancelAnimationFrame(resetFrameRef.current);
      }

      clearTransitionFallback();
    };
  }, [clearTransitionFallback]);

  // Fallback prevents the slider from getting permanently locked
  // if the CSS transitionend event does not fire.
  const unlockAfterFallback = useCallback(() => {
    clearTransitionFallback();

    transitionFallbackRef.current = setTimeout(() => {
      transitionLock.current = false;
      transitionFallbackRef.current = null;
    }, 900);
  }, [clearTransitionFallback]);

  const goTo = useCallback(
    (index) => {
      if (transitionLock.current) return;

      transitionLock.current = true;
      setIsAnimating(true);
      setCurrent(index);
      unlockAfterFallback();
    },
    [unlockAfterFallback]
  );

  const next = useCallback(() => {
    if (transitionLock.current) return;

    transitionLock.current = true;
    setIsAnimating(true);
    setCurrent((previous) => previous + 1);
    unlockAfterFallback();
  }, [unlockAfterFallback]);

  const previous = useCallback(() => {
    if (transitionLock.current) return;

    transitionLock.current = true;
    setIsAnimating(true);
    setCurrent((previous) => previous - 1);
    unlockAfterFallback();
  }, [unlockAfterFallback]);

  const handleTransitionEnd = (event) => {
    if (
      event.target !== trackRef.current ||
      event.propertyName !== "transform"
    ) {
      return;
    }

    clearTransitionFallback();

    const index = currentRef.current;

    if (index >= total) {
      setIsAnimating(false);
      setCurrent(0);
    } else if (index < 0) {
      setIsAnimating(false);
      setCurrent(total - 1);
    } else {
      transitionLock.current = false;
    }
  };

  // Re-enable animation after jumping from a cloned slide.
  useEffect(() => {
    if (isAnimating) return;

    resetFrameRef.current = requestAnimationFrame(() => {
      resetFrameRef.current = requestAnimationFrame(() => {
        setIsAnimating(true);
        transitionLock.current = false;
        clearTransitionFallback();
      });
    });

    return () => {
      if (resetFrameRef.current !== null) {
        cancelAnimationFrame(resetFrameRef.current);
      }
    };
  }, [isAnimating, clearTransitionFallback]);

  // Autoplay every 7 seconds. Pauses only when the slider is hovered
  // or the user is holding/touching the slider.
  useEffect(() => {
    if (!isSectionVisible || isPaused || touchPauseRef.current) {
      return;
    }

    const timer = setTimeout(() => {
      next();
    }, 7000);

    return () => clearTimeout(timer);
  }, [isSectionVisible, isPaused, current, next]);

  const handleTouchStart = (event) => {
    touchPauseRef.current = true;
    setIsPaused(true);

    touchStartX.current = event.touches[0].clientX;
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;

    touchPauseRef.current = false;
    setIsPaused(false);

    if (Math.abs(distance) < 45) return;

    if (distance > 0) {
      next();
    } else {
      previous();
    }
  };

  const handleTouchCancel = () => {
    touchPauseRef.current = false;
    setIsPaused(false);
  };

  return (
    <section
      ref={sectionRef}
      className="xlg-products-section"
      id="products"
    >
      <div className="xlg-products-container">
        <header className="xlg-products-header">
          <div className="xlg-products-heading">
            <span className="xlg-products-label">
              OUR PRODUCTS
            </span>

            <h2>
              Software Built For{" "}
              <span>Your Businesses.</span>
            </h2>

            <p className="xlg-products-subtitle">
              Intelligent, scalable software solutions designed
              around the way your business works.
            </p>
          </div>
        </header>

        <div className="xlg-products-main">
          <div
            className="xlg-product-detail"
            key={product.number}
          >
            <div className="xlg-detail-top">
              <span className="xlg-product-category">
                {product.category}
              </span>

              <span className="xlg-product-number">
                {product.number} / {totalNumber}
              </span>
            </div>

            <h3 className="xlg-product-title">
              Customised{" "}
              <span>{product.title}</span>
            </h3>

            <p className="xlg-product-description">
              {product.description}
            </p>

            <div className="xlg-product-features">
              {product.features.map((feature) => (
                <div
                  className="xlg-product-feature"
                  key={feature}
                >
                  <span className="xlg-feature-icon">
                    <FaCheck />
                  </span>

                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="xlg-product-detail-footer">
              <div className="xlg-module-info">
                <span className="xlg-module-icon">
                  {product.icon === "code" ? (
                    <FaCode />
                  ) : (
                    <FaCheck />
                  )}
                </span>

                <div>
                  <small>AVAILABLE</small>
                  <strong>{product.moduleInfo}</strong>
                </div>
              </div>

              <a
                href={product.link}
                className="xlg-view-product"
                aria-label={`View ${product.title}`}
              >
                <span>View Product</span>
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>

          <div className="xlg-slider-area">
            <div
              className="xlg-slider-window"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onTouchCancel={handleTouchCancel}
            >
              <div
                ref={trackRef}
                onTransitionEnd={handleTransitionEnd}
                className={`xlg-slider-track ${
                  isAnimating
                    ? "xlg-is-animated"
                    : "xlg-no-animation"
                }`}
                style={{
                  transform: `translateX(calc(50% - (${slideIndex} * 33.333333%) - 16.666667%))`,
                }}
              >
                {slides.map((item, index) => {
                  const actualIndex = xlgProducts.findIndex(
                    (entry) => entry.number === item.number
                  );

                  const isActive = actualIndex === realIndex;

                  return (
                    <article
                      className={`xlg-product-card ${
                        isActive ? "xlg-is-active" : ""
                      }`}
                      key={`${item.number}-${index}`}
                      onClick={() => {
                        if (actualIndex !== realIndex) {
                          goTo(actualIndex);
                        }
                      }}
                      aria-current={isActive ? "true" : undefined}
                    >
                      <div className="xlg-card-image">
                        <img
                          src={item.image}
                          alt={item.title}
                          draggable="false"
                          loading={index < 3 ? "eager" : "lazy"}
                        />

                        <div className="xlg-card-overlay" />

                        <span className="xlg-card-number">
                          {item.number}
                        </span>

                        <span className="xlg-card-category">
                          {item.category}
                        </span>

                        <div className="xlg-card-title">
                          <h4>{item.title}</h4>
                        </div>
                      </div>

                      <div className="xlg-card-bottom">
                        <span>{item.moduleInfo}</span>
                        <FaArrowRight aria-hidden="true" />
                      </div>
                    </article>
                  );
                })}
              </div>

              <button
                type="button"
                className="xlg-slider-arrow xlg-slider-prev"
                onClick={previous}
                aria-label="Previous product"
              >
                <FaArrowLeft />
              </button>

              <button
                type="button"
                className="xlg-slider-arrow xlg-slider-next"
                onClick={next}
                aria-label="Next product"
              >
                <FaArrowRight />
              </button>
            </div>

            <div className="xlg-slider-controls">
              <div className="xlg-dots">
                {xlgProducts.map((item, index) => (
                  <button
                    type="button"
                    key={item.number}
                    className={`xlg-dot ${
                      index === realIndex ? "xlg-active" : ""
                    }`}
                    onClick={() => goTo(index)}
                    aria-label={`Show ${item.title}`}
                    aria-current={
                      index === realIndex ? "true" : undefined
                    }
                  />
                ))}
              </div>

              <div className="xlg-slider-counter">
                <strong>{number}</strong>

                <span className="xlg-counter-line">
                  <span
                    style={{
                      width: `${((realIndex + 1) / total) * 100}%`,
                    }}
                  />
                </span>

                <span>{totalNumber}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default XlligentProducts;
