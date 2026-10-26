import { FaArrowUp } from "react-icons/fa";
import "./MergedAbout.css";

function MergedAbout() {
  const images = [
    "team-group.jpg",
    "app-developer.webp",
    "development.webp",
    "web-developer.webp",
    "Ui-ux.webp",
    "erp-software.png",
    "ai-solution.jpg",
    "testing.webp",
    "web_development.png",
    "app_development.jpg",
    "cloud-sol.jpeg",
    "design.webp",
  ];

  const imageAlt = [
    "Software development team workspace",
    "Business software planning",
    "Web application development",
    "Enterprise technology",
    "Software engineering workspace",
    "Digital product design",
    "Business analytics",
    "Team collaboration",
    "Software architecture",
    "Application development",
    "Technology planning",
    "Quality assurance testing",
  ];

  return (
    <section
      className="xlg-home-about-section"
      id="about"
    >
      <div className="xlg-home-about-glow xlg-home-about-glow-1"></div>
      <div className="xlg-home-about-glow xlg-home-about-glow-2"></div>

      <div className="xlg-home-about-container">
        <div className="xlg-home-about-orbit">
          {images.map((img, index) => (
            <div
              className={`xlg-home-about-orbit-img xlg-home-about-img-${index + 1}`}
              key={img}
            >
              <img
                src={`/second-images/${img}`}
                alt={imageAlt[index]}
              />
            </div>
          ))}

          <div className="xlg-home-about-center">
            <div className="xlg-home-about-badge">
              <i className="bi bi-patch-check-fill"></i>
              <span>ABOUT US</span>
            </div>

            <h3>
              Technology
              <span>That Moves Business Forward.</span>
            </h3>

            <p>
              Xlligent Softwares Pvt. Ltd. is an ISO-certified technology
              company, delivering modern web, mobile application and software
              solutions designed for business growth.
            </p>

            <div className="xlg-home-about-highlights">
              <div className="xlg-home-about-highlight">
                <i className="bi bi-shield-check"></i>
                <strong>ISO 9001:2015</strong>
              </div>

              <div className="xlg-home-about-highlight-divider"></div>

              <div className="xlg-home-about-highlight">
                <i className="bi bi-lock-fill"></i>
                <strong>ISO 27001:2018</strong>
              </div>
            </div>

            <div className="xlg-home-about-buttons">
              <a
                href="/about"
                className="xlg-home-about-btn"
              >
                <span>Explore More</span>
                <FaArrowUp />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MergedAbout;