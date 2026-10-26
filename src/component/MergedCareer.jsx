import { useEffect, useState } from "react";
import {
  FaArrowRight,
  FaBriefcase,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./MergedCareer.css";

const jobs = [
  [
    "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=85",
    "BUSINESS",
    "BUSINESS DEVELOPMENT",
    "Join our business development team and help build strong client relationships and identify new opportunities.",
    "03 Positions",
  ],
  [
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=85",
    "SALES",
    "SALES EXECUTIVE",
    "Work with clients, understand their requirements and help businesses discover the right software solutions.",
    "02 Positions",
  ],
  [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85",
    "DEVELOPMENT",
    "PHP DEVELOPER",
    "Build scalable web applications and business solutions.",
    "02 Positions",
  ],
];
export default function MergedCareer() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = jobs.length;

  /* -------------------------------------------------------
     NEXT
     Functional state update is important here.
     It prevents stale state inside setInterval().
  ------------------------------------------------------- */
  const next = () => {
    setIndex((current) => (current + 1) % total);
  };

  /* -------------------------------------------------------
     PREVIOUS
  ------------------------------------------------------- */
  const prev = () => {
    setIndex((current) => (current - 1 + total) % total);
  };

  /* -------------------------------------------------------
     AUTO SLIDER
  ------------------------------------------------------- */
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, 7000);

    return () => {
      clearInterval(timer);
    };
  }, [isPaused, total]);

  /* -------------------------------------------------------
     PAUSE ON HOVER / TOUCH
  ------------------------------------------------------- */
  const pauseSlider = () => {
    setIsPaused(true);
  };

  const resumeSlider = () => {
    setIsPaused(false);
  };

  /* -------------------------------------------------------
     PREVIOUS / ACTIVE / NEXT CARDS
  ------------------------------------------------------- */
  const visibleJobs = [-1, 0, 1].map((offset) => {
    const i = (index + offset + total) % total;

    return {
      job: jobs[i],
      i,
      offset,
    };
  });

  const activeJob = jobs[index];

  return (
    <section
      className="career-section merged-light-career"
      id="career"
    >
      <div className="career-inner">

        {/* ================= HEADER ================= */}

        <div className="career-header">

          <div className="career-heading">

            <span className="career-label">
              CAREERS
            </span>

            <h2>
              Build Your Future <span>With Us.</span>
            </h2>

            <p>
              Join a team of innovators, problem-solvers and creators
              building practical digital products for modern businesses.
            </p>

          </div>

          {/* <div className="career-counter">
            <span>
              {String(index + 1).padStart(2, "0")}
            </span>

            <i></i>

            <span>
              {String(total).padStart(2, "0")}
            </span>
          </div> */}

        </div>

        {/* ================= CAREER SLIDER ================= */}

        <div className="career-new-layout">

          <div
            className="career-visual-panel"
            onMouseEnter={pauseSlider}
            onMouseLeave={resumeSlider}
            onTouchStart={pauseSlider}
            onTouchEnd={resumeSlider}
          >

            {/* PREVIOUS BUTTON */}

            <button
              type="button"
              className="career-nav career-nav-prev"
              onClick={prev}
              aria-label="Previous career"
            >
              <FaChevronLeft />
            </button>

            {/* CARD STAGE */}

            <div className="career-card-stage">

              {visibleJobs.map(
                ({ job, i, offset }) => {

                  const [
                    image,
                    category,
                    title,
                    description,
                  ] = job;

                  return (
                    <article
                      key={`${title}-${i}`}
                      className={`
                        career-modern-card
                        ${
                          offset === 0
                            ? "is-active"
                            : "is-side"
                        }
                        ${
                          offset < 0
                            ? "is-prev"
                            : offset > 0
                            ? "is-next"
                            : ""
                        }
                      `}
                    >

                      <img
                      src={image}
                        alt={title}
                        draggable="false"
                      />

                      <div className="career-modern-overlay"></div>

                      <div className="career-modern-number">
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      <div className="career-modern-copy">

                        <span>{category}</span>

                        <h3>{title}</h3>

                        <p>{description}</p>

                        <div className="career-modern-meta">

                          <span>
                            <FaBriefcase />
                            0–3 Years
                          </span>

                          <span>
                            <FaMapMarkerAlt />
                            On Site
                          </span>

                        </div>

                      </div>

                    </article>
                  );
                }
              )}

            </div>

            {/* NEXT BUTTON */}

            <button
              type="button"
              className="career-nav career-nav-next"
              onClick={next}
              aria-label="Next career"
            >
              <FaChevronRight />
            </button>

            {/* PROGRESS */}

            <div className="career-progress">

            
            </div>

          </div>

          {/* ================= CAREER DETAILS ================= */}

          
{/* ================= CAREER DETAILS ================= */}

<div className="career-content">
  <h3>{activeJob[2]}</h3>

  <p>{activeJob[3]}</p>

  <div className="career-details">
    <div>
      <span>Experience</span>
      <strong>0 – 3 Years</strong>
    </div>

    <div>
      <span>Vacancies</span>
      <strong>{activeJob[4]}</strong>
    </div>
  </div>

  
</div>

        </div>

      </div>
    </section>
  );
}
