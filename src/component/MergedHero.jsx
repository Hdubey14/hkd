import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaArrowUp,
  FaChevronLeft,
  FaChevronRight,
  FaRobot,
  FaMicrochip,
  FaThLarge,
  FaGraduationCap,
  FaHospital,
  FaBuilding,
  FaPills,
  FaIndustry,

  FaUniversity,
} from "react-icons/fa";
import "./MergedHero.css";

const slides = [
  "/second-images/hero-1.jpg",
  "/second-images/hero-2.jpg",
  "/second-images/hero-3.jpg",
  "/second-images/hero-4.webp",
];

/* =========================================================
   SMALL ORBIT IMAGES
   Main hero slider is NOT changed
   ========================================================= */

const orbitImages = [
  "/second-images/hero-1.jpg",
  "/second-images/hero-2.jpg",
  "/second-images/hero-3.jpg",
  "/second-images/hero-4.webp",
];

/* =========================================================
   8 PRODUCTS
   ========================================================= */
   
   const productBadges = [
  {
    icon: <FaGraduationCap />,
    title: "School Management Solution",
    sub: "Smart Education",
    className: "product-badge-1",
  },
  {
    icon: <FaHospital />,
    title: "Hospital Management Solution",
    sub: "Healthcare ERP",
    className: "product-badge-2",
  },
  {
    icon: <FaUniversity />,
    title: "College Management Solution",
    sub: "Campus Automation",
    className: "product-badge-3",
  },
  
  {
    icon: <FaBuilding />,
    title: "Real Estate Solution",
    sub: "Property Management",
    className: "product-badge-4",
  },
  {
    icon: <FaPills />,
    title: "Pharmacy Management Solution",
    sub: "Pharma Automation",
    className: "product-badge-5",
  },
  {
    icon: <FaThLarge />,
    title: "ERP Solution",
    sub: "Business Automation",
    className: "product-badge-6",
  },
  {
    icon: <FaIndustry />,
    title: "Manufacturing Solution",
    sub: "Production Management",
    className: "product-badge-7",
  },

];

export default function MergedHero() {
  const [current, setCurrent] = useState(0);

  const [counts, setCounts] = useState({
    projects: 535,
    clients: 600,
    years: 5,
  });

  const [orbitCurrent, setOrbitCurrent] = useState(0);
  const [isSliderPaused, setIsSliderPaused] = useState(false);

  /* =========================================================
     MAIN HERO SLIDER
     ========================================================= */

  useEffect(() => {
    if (isSliderPaused) return undefined;
    const timer = setInterval(() => {
      setCurrent((v) => (v + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isSliderPaused]);

  /* =========================================================
     4 IMAGE SMALL ORBIT
     Alternates automatically
     ========================================================= */

  useEffect(() => {
    if (isSliderPaused) return undefined;
    const timer = setInterval(() => {
      setOrbitCurrent((v) => (v + 1) % orbitImages.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [isSliderPaused]);

  /* =========================================================
     COUNTER ANIMATION
     ========================================================= */

  useEffect(() => {
    const targets = {
      projects: 535,
      clients: 600,
      years: 9,
    };

    let frame;

    const start = performance.now();
    const duration = 1800;

    const animate = (now) => {
      const progress = Math.min(
        (now - start) / duration,
        1
      );

      
      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  /* =========================================================
     MAIN SLIDER CONTROLS
     ========================================================= */

  const go = (dir) => {
    setCurrent(
      (v) => (v + dir + slides.length) % slides.length
    );
  };

  return (
    <section
      className="hero-section merged-light-hero"
      id="home-hero"
    >
      {/* Background shapes
      <div className="hero-bg-shape hero-shape-one" />
      <div className="hero-bg-shape hero-shape-two" /> */}

      <div className="merged-hero-container">

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div className="merged-hero-copy">

          <span className="hero-label">
            DIGITAL SOLUTIONS • INNOVATION • GROWTH
          </span>
          <h1>
            Why Trust <br /><span>Xlligent Softwares</span><br /> Pvt Ltd.?
          </h1>

          <p>
           We build reliable, AI-powered software solutions for real business needs. From cloud-based software and ERP systems to intelligent automation, Xlligent Softwares helps streamline operations, automate tasks, improve efficiency, and transform business data into actionable insights through scalable, business-focused solutions.
          </p>

          <div className="hero-buttons">
            <a
              href={`https://wa.me/916261900209?text=${encodeURIComponent(
                "Hello! I visited www.xlligent-softwares.com and I'm interested in your services. Could you please share more information about your software solutions?"
              )}`}

              className="btn hero-btn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact on WhatsApp"
            >
              Let's Talk <FaArrowUp />

            </a>



            <a
              href="#products"
              className="hero-link"
            >
              Explore Products <FaArrowRight />
            </a>

          </div>
<div className="hero-stats">
  <div>
    <strong>{counts.projects}+</strong>
    <span>Projects</span>
  </div>

  <div>
    <strong>{counts.clients}+</strong>
    <span>Clients</span>
  </div>

  <div>
    <strong>{counts.years}+</strong>
    <span>Years</span>
  </div>
</div>
        </div>

        {/* =====================================================
            RIGHT HERO VISUAL
        ===================================================== */}

        <div className="merged-hero-visual">

          <div
            className="hero-slider-wrapper"
            onMouseEnter={() => setIsSliderPaused(true)}
            onMouseLeave={() => setIsSliderPaused(false)}
            onTouchStart={() => setIsSliderPaused(true)}
            onTouchEnd={() => setIsSliderPaused(false)}
          >

            {/* =================================================
                MAIN HERO SLIDER
                DO NOT CHANGE
            ================================================= */}

            <div className="hero-orbit" />

            <div className="hero-circle-slider">

              {/* TOP CENTER TEXT */}
              <div className="hero-circle-title">
                CUSTOMIZED
              </div>

              {slides.map((src, i) => (
                <div
                  className={`hero-slide ${i === current ? "active" : ""
                    }`}
                  key={src}
                >
                  <img
                    src={src}
                    alt="Xlligent digital solution"
                  />
                </div>
              ))}

            </div>

            {/* =================================================
                NEW 4 IMAGE ORBIT
            ================================================= */}

            <div className="hero-four-image-orbit">

              {orbitImages.map((src, i) => {

                const position =
                  (i - orbitCurrent + orbitImages.length) %
                  orbitImages.length;

                return (
                  <div
                    key={src}
                    className={`hero-orbit-image orbit-position-${position}`}
                  >
                    <img
                      src={src}
                      alt="Xlligent solution"
                    />
                  </div>
                );
              })}

            </div>

            {/* =================================================
                8 PRODUCT BADGES
            ================================================= */}

            <div className="hero-product-badges">

              {productBadges.map((product) => (
                <HeroBadge
                  key={product.title}
                  className={product.className}
                  icon={product.icon}
                  title={product.title}
                  sub={product.sub}
                />
              ))}

            </div>

            {/* =================================================
                MAIN SLIDER CONTROLS
            ================================================= */}

            <div className="hero-slider-controls">

              <button
                className="hero-slider-btn"
                onClick={() => go(-1)}
                aria-label="Previous"
              >
                <FaChevronLeft />
              </button>

              <div className="hero-slider-dots">

                {slides.map((_, i) => (
                  <button
                    key={i}
                    className={`hero-dot ${i === current ? "active" : ""
                      }`}
                    onClick={() => setCurrent(i)}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}

              </div>

              <button
                className="hero-slider-btn"
                onClick={() => go(1)}
                aria-label="Next"
              >
                <FaChevronRight />
              </button>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}


/* =========================================================
   PRODUCT BADGE COMPONENT
========================================================= */

function HeroBadge({
  className,
  icon,
  title,
  sub,
}) {
  return (
    <div
      className={`hero-floating-badge ${className}`}
    >
      <span className="badge-icon">
        {icon}
      </span>

      <span>
        <strong>{title}</strong>
        <small>{sub}</small>
      </span>
    </div>
  );
}
