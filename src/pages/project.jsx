import usePageMeta from "../hooks/usePageMeta";

import { Link } from "react-router-dom";
import "./project.css";

const projects = [
    {
        id: 1,
        title: "Devshree Hospital",
        slug: "devshree-hospital",
        category: "Hospital Management",
        image: "/image/team/dev.PNG",
    },
    {
        id: 2,
        title: "Progressive Global School",
        slug: "progressive-global-school",
        category: "Education",
        image: "/image/team/pgs.PNG",
    },
    {
        id: 3,
        title: "Direct Farms",
        slug: "direct-farms",
        category: "Digital Marketplace",
        image: "/image/team/df.PNG",
    },
    {
        id: 4,
        title: "Indian Public School",
        slug: "indian-public-school",
        category: "Education",
        image: "/image/team/ips.PNG",
    },
   
    {
        id: 6,
        title: "Our Community",
        slug: "our-community",
        category: "Community Website",
        image: "/image/team/our-community.PNG",
    },
    {
        id: 7,
        title: "SV Farms USA",
        slug: "sv-farms-usa",
        category: "Agriculture & Farming",
        image: "/image/team/sv-farm.PNG",
    },
    {
        id: 8,
        title: "Prominent Shiksha Academy",
        slug: "prominent-shiksha-academy",
        category: "Education",
        image: "/image/team/psa.PNG",
    },
    {
        id: 9,
        title: "Vidya Sanskar International School",
        slug: "vidya-sanskar-international-school",
        category: "Education",
        image: "/image/team/vsis.PNG",
    },
     {
        id: 5,
        title: "Mana Gudi",
        slug: "managudi",
        category: "Temple Services",
        image: "/image/team/mg.PNG",
    },
    {
        id: 10,
        title: "Shri Hospital",
        slug: "shri-hospital",
        category: "Healthcare",
        image: "/image/team/sh.PNG",
    },
    {
        id: 11,
        title: "Medicare Hospital Rander",
        slug: "medicare-hospital-rander",
        category: "Healthcare",
        image: "/image/team/mh.PNG",
    },
    {
        id: 12,
        title: "Crewzo",
        slug: "crewzo",
        category: "Real Estate Platform",
        image: "/image/team/crewzo.PNG",
    },


];

function ProjectsPage() {
    usePageMeta(
        "Our Projects | Xlligent Softwares",
        "Explore selected website and software projects across healthcare, education, agriculture, real estate and other industries.",
        "software projects, website portfolio, healthcare website, education website, Xlligent Softwares"
    );
    return (
        <main className="projects-page">
            <section className="projects-hero">
                <div className="projects-container">
                    <span className="projects-tag">
                        OUR PROJECTS
                    </span>

                    <h1>
                        Ideas We Turned
                        <span> Into Reality</span>
                    </h1>

                    <p>
                        Explore our collection of digital products,
                        websites and software solutions built for
                        different industries.
                    </p>
                </div>
            </section>

            <section className="projects-list">
                <div className="projects-container">
                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <article
                                className="project-card"
                                key={project.id}
                            >
                                <div className="project-card-image">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        loading="lazy"
                                    />

                                    <span className="project-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <div className="project-image-overlay">
                                        <Link
                                            to={`/projects/${project.slug}`}
                                        >
                                            View Project
                                            <span>→</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="project-card-content">
                                    <span className="project-category">
                                        {project.category}
                                    </span>

                                    <h2>{project.title}</h2>

                                    <Link
                                        to={`/projects/${project.slug}`}
                                        className="project-details-link"
                                    >
                                        View Details
                                        <span>↗</span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ProjectsPage;
