import { useEffect, useRef, useState } from "react";
import {
    FaChevronLeft,
    FaChevronRight,
    FaBolt,
    FaUsers,
    FaExternalLinkAlt,
} from "react-icons/fa";
import "./Slider.css";

/* =========================================================
                    SLIDER DATA
========================================================= */

const slides = [
    {
        // 🏠 REAL ESTATE
        image:
            "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?auto=format&fit=crop&w=2400&q=90",

        tag: "CUSTOMISED REAL ESTATE SOLUTIONS FOR YOUR BUSINESS",

        title:
            "Build a Smarter and More Efficient Real Estate Business.",

        subtitle:
            "Manage properties, leads, clients, listings, follow-ups, and daily operations through one powerful and connected digital solution.",

        clients: "Trusted By 500+ Clients",

        website: "https://crewzo.in/",

        showWebsite: true,
    },

    {
        // 💻 WEB & APP DEVELOPMENT
        image:
            "https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&w=2400&q=90",

        tag: "CUSTOMISED WEB & APP SOLUTIONS FOR YOUR BUSINESS",

        title:
            "Turn Your Ideas Into Powerful Digital Experiences.",

        subtitle:
            "Build modern websites and applications tailored to your brand, customers, business workflows, and long-term digital goals.",

        clients: "Trusted By 90+ Clients",

        showWebsite: false,
    },

    {
        // 💊 PHARMACY MANAGEMENT
        image:
            "https://plus.unsplash.com/premium_photo-1661769786626-8025c37907ae?auto=format&fit=crop&w=2400&q=90",

        tag: "CUSTOMISED PHARMACY MANAGEMENT SOLUTION FOR YOUR BUSINESS",

        title:
            "Simplify Your Pharmacy Management.",

        subtitle:
            "Manage medicines, inventory, purchases, sales, suppliers, billing, and everyday pharmacy operations from one integrated platform.",

        clients: "Trusted By 45+ Clients",

        showWebsite: false,
    },

    {
        // 🧾 BILLING MANAGEMENT
        image:
            "https://plus.unsplash.com/premium_photo-1678139620956-cbd87b6ba3d0?auto=format&fit=crop&w=2400&q=90",

        tag: "CUSTOMISED BILLING SOLUTION FOR YOUR BUSINESS",

        title:
            "Simplify Billing and Keep Your Business Moving.",

        subtitle:
            "Create invoices, track payments, manage transactions, monitor sales, and keep your billing operations organised with ease.",

        clients: "Trusted By 100+ Clients",

        showWebsite: false,
    },

    {
        // 🎓 COLLEGE MANAGEMENT
        // DIRECT IMAGE URL — WORKING <img src>
        image:
            "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2400&q=90",

        tag: "CUSTOMISED COLLEGE MANAGEMENT ERP SOLUTION",

        title:
            "Simplify Every Aspect of College Management.",

        subtitle:
            "Bring students, faculty, academics, attendance, fees, examinations, and administration together through one seamless college management ERP solution.",

        clients: "Trusted By 35+ Clients",

        showWebsite: false,
    },

    {
        // 🏢 ERP / BUSINESS MANAGEMENT
        image:
            "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=2400&q=90",

        tag: "CUSTOMISED ERP SOFTWARE SOLUTIONS FOR YOUR BUSINESS",

        title:
            "One Platform to Manage Every Business Process.",

        subtitle:
            "Connect departments, automate workflows, manage organisational data, and streamline your day-to-day operations through one integrated ERP solution.",

        clients: "Trusted By 30+ Clients",

        showWebsite: false,
    },

    {
        // 🏫 SCHOOL MANAGEMENT
        image:
            "https://plus.unsplash.com/premium_photo-1680807869780-e0876a6f3cd5?auto=format&fit=crop&w=2400&q=90",

        tag: "CUSTOMISED SCHOOL MANAGEMENT SOLUTION FOR YOUR INSTITUTION",

        title:
            "Manage Your School Smarter and More Efficiently.",

        subtitle:
            "Manage students, teachers, attendance, classes, examinations, fees, communication, and daily academic operations through one centralised platform.",

        clients: "Trusted By 120+ Clients",

        showWebsite: false,
    },

    {
        // 🏥 HOSPITAL MANAGEMENT
        image:
            "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=2400&q=90",

        tag: "CUSTOMISED HOSPITAL MANAGEMENT SOLUTION FOR YOUR ORGANISATION",

        title:
            "Simplify Healthcare Management from One Platform.",

        subtitle:
            "Connect patients, doctors, appointments, medical records, billing, staff, and hospital operations through one reliable management system.",

        clients: "Trusted By 100+ Clients",

        showWebsite: false,
    },

    {
        // 🏭 MANUFACTURING
        image:
            "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=2400&q=90",

        tag: "CUSTOMISED MANUFACTURING SOLUTION FOR YOUR BUSINESS",

        title:
            "Optimize Your Manufacturing Operations.",

        subtitle:
            "Streamline production, raw materials, inventory, suppliers, purchasing, sales, and daily operations through one integrated manufacturing solution.",

        clients: "Trusted By 35+ Clients",

        showWebsite: false,
    },
];


/* =========================================================
                    AUTOPLAY
========================================================= */

const AUTOPLAY_DELAY = 7000;


/* =========================================================
                    SLIDER COMPONENT
========================================================= */

function Slider() {

    const [current, setCurrent] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const touchStartX = useRef(0);
    const touchEndX = useRef(0);


    /* =====================================================
                        NEXT
    ===================================================== */

    const next = () => {

        setCurrent(
            (prev) =>
                (prev + 1) % slides.length
        );

    };


    /* =====================================================
                        PREVIOUS
    ===================================================== */

    const prev = () => {

        setCurrent(
            (prev) =>
                (prev - 1 + slides.length) %
                slides.length
        );

    };


    /* =====================================================
                        GO TO
    ===================================================== */

    const goTo = (index) => {

        setCurrent(index);

    };


    /* =====================================================
                        AUTOPLAY
    ===================================================== */

    useEffect(() => {

        if (isPaused) return undefined;

        const timer = setTimeout(() => {

            setCurrent(
                (prev) =>
                    (prev + 1) % slides.length
            );

        }, AUTOPLAY_DELAY);


        return () => {

            clearTimeout(timer);

        };

    }, [current, isPaused]);


    /* =====================================================
                    KEYBOARD
    ===================================================== */

    useEffect(() => {

        const handleKeyDown = (event) => {

            if (event.key === "ArrowRight") {

                next();

            }

            if (event.key === "ArrowLeft") {

                prev();

            }

        };


        window.addEventListener(
            "keydown",
            handleKeyDown
        );


        return () => {

            window.removeEventListener(
                "keydown",
                handleKeyDown
            );

        };

    }, []);


    /* =====================================================
                    TOUCH START
    ===================================================== */

    const handleTouchStart = (event) => {

        touchStartX.current =
            event.touches[0].clientX;

        touchEndX.current =
            event.touches[0].clientX;

    };


    /* =====================================================
                    TOUCH MOVE
    ===================================================== */

    const handleTouchMove = (event) => {

        touchEndX.current =
            event.touches[0].clientX;

    };


    /* =====================================================
                    TOUCH END
    ===================================================== */

    const handleTouchEnd = () => {

        const distance =
            touchStartX.current -
            touchEndX.current;


        if (Math.abs(distance) > 50) {

            if (distance > 0) {

                next();

            } else {

                prev();

            }

        }


        touchStartX.current = 0;
        touchEndX.current = 0;

    };


    /* =====================================================
                        JSX
    ===================================================== */

    return (

        <section className="pks-hero-slider">

            <div
                className="pks-slider-viewport"

                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={(event) => { setIsPaused(true); handleTouchStart(event); }}
                onTouchMove={handleTouchMove}
                onTouchEnd={(event) => { handleTouchEnd(event); setIsPaused(false); }}
            >

                {/* =================================================
                            SLIDER TRACK
                ================================================= */}

                <div
                    className="pks-slider-track"

                    style={{
                        transform:
                            `translateX(-${current * 100}%)`,
                    }}
                >

                    {slides.map(
                        (slide, index) => (

                            <article
                                className={
                                    `pks-slide ${
                                        index === current
                                            ? "is-active"
                                            : ""
                                    }`
                                }

                                key={slide.title}
                            >

                                {/* =================================================
                                    BACKGROUND IMAGE
                                ================================================= */}

                                <img
                                    className="pks-slide-image"

                                    src={slide.image}

                                    alt={slide.tag}

                                    draggable="false"

                                    loading={
                                        index === 0
                                            ? "eager"
                                            : "lazy"
                                    }
                                />


                                {/* =================================================
                                    LIGHT OVERLAY
                                ================================================= */}

                                <div
                                    className="pks-slide-overlay"
                                />


                                {/* =================================================
                                    VIGNETTE
                                ================================================= */}

                                <div
                                    className="pks-slide-vignette"
                                />


                                {/* =================================================
                                    CONTENT
                                ================================================= */}

                                <div
                                    className="pks-slide-content"
                                >

                                    {/* AI LABEL */}

                                    <div
                                        className="slider-ai-label"
                                    >

                                        <FaBolt />

                                        <span>
                                            AI INBUILT
                                        </span>

                                    </div>


                                    {/* CATEGORY */}

                                    <div
                                        className="pks-slide-eyebrow"
                                    >

                                        {slide.tag}

                                    </div>


                                    {/* TITLE */}

                                    <h2
                                        className="pks-slide-title"
                                    >

                                        {slide.title}

                                    </h2>


                                    {/* DESCRIPTION */}

                                    <p
                                        className="pks-slide-description"
                                    >

                                        {slide.subtitle}

                                    </p>


                                    {/* FOOTER */}

                                    <div
                                        className="pks-slide-footer"
                                    >

                                        <div
                                            className="slider-client-info"
                                        >

                                            <span
                                                className="slider-client-icon"
                                            >

                                                <FaUsers />

                                            </span>


                                            <span
                                                className="slider-client-text"
                                            >

                                                {slide.clients}

                                            </span>

                                        </div>


                                        {/* WEBSITE BUTTON */}

                                        {slide.showWebsite && (

                                            <a
                                                href={slide.website}

                                                target="_blank"

                                                rel="noopener noreferrer"

                                                className="slider-website-btn"
                                            >

                                                <span>
                                                    Visit Crewzo.in
                                                </span>

                                                <FaExternalLinkAlt />

                                            </a>

                                        )}

                                    </div>


                                    {/* COUNTER */}

                                    <div
                                        className="pks-slide-counter"
                                    >

                                        <span
                                            className="pks-current"
                                        >

                                            {String(
                                                index + 1
                                            ).padStart(2, "0")}

                                        </span>


                                        <span
                                            className="pks-counter-line"
                                        >

                                            <span
                                                style={{
                                                    width:
                                                        `${
                                                            (
                                                                (
                                                                    index + 1
                                                                ) /
                                                                slides.length
                                                            ) *
                                                            100
                                                        }%`,
                                                }}
                                            />

                                        </span>


                                        <span
                                            className="pks-total"
                                        >

                                            {String(
                                                slides.length
                                            ).padStart(2, "0")}

                                        </span>

                                    </div>

                                </div>

                            </article>

                        )
                    )}

                </div>


                {/* =================================================
                            PREVIOUS
                ================================================= */}

                <button
                    type="button"

                    className="
                        pks-slider-arrow
                        pks-slider-arrow-left
                    "

                    onClick={prev}

                    aria-label="Previous slide"
                >

                    <FaChevronLeft />

                </button>


                {/* =================================================
                            NEXT
                ================================================= */}

                <button
                    type="button"

                    className="
                        pks-slider-arrow
                        pks-slider-arrow-right
                    "

                    onClick={next}

                    aria-label="Next slide"
                >

                    <FaChevronRight />

                </button>


                {/* =================================================
                            DOTS
                ================================================= */}

                <div
                    className="pks-slider-dots"
                >

                    {slides.map(
                        (slide, index) => (

                            <button
                                type="button"

                                key={slide.title}

                                className={
                                    `pks-slider-dot ${
                                        index === current
                                            ? "active"
                                            : ""
                                    }`
                                }

                                onClick={() =>
                                    goTo(index)
                                }

                                aria-label={
                                    `Go to slide ${
                                        index + 1
                                    }`
                                }

                                aria-current={
                                    index === current
                                        ? "true"
                                        : undefined
                                }
                            />

                        )
                    )}

                </div>

            </div>

        </section>

    );

}


export default Slider;
