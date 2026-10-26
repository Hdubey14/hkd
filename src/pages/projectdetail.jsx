import usePageMeta from "../hooks/usePageMeta";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import "./projectdetail.css";

const projects = [
    {
        id: 1,
        title: "Devshree Hospital",
        slug: "devshree-hospital",
        category: "Hospital Management",
        image:
            "/image/team/dev.PNG",
        shortDescription:
            "A multi-specialist hospital providing essential medical services and patient-focused healthcare.",
        description:
            "Devshree Hospital is a healthcare project focused on presenting hospital information and medical services through a dedicated online platform.",
        website: "https://devshreehospital.in/",
    },
    {
        id: 2,
        title: "Progressive Global School",
        slug: "progressive-global-school",
        category: "Education",
        image:
            "/image/team/pgs.PNG",
        shortDescription:
            "A school combining modern education with Indian values and holistic student development.",
        description:
            "Progressive Global School is an education website project designed to present school information, academics and educational opportunities for students and parents.",
        website: "https://www.progressiveglobalschool.com/",
    },
    {
        id: 3,
        title: "Direct Farms",
        slug: "direct-farms",
        category: "Digital Marketplace",
        image:
            "/image/team/df.PNG",
        shortDescription:
            "A digital marketplace concept connecting farmers and consumers.",
        description:
            "Direct Farms is an agriculture-focused digital marketplace project intended to connect farmers with consumers and support access to farm products.",
        website: "https://direct-farms.com/",
    },
    {
        id: 4,
        title: "Indian Public School",
        slug: "indian-public-school",
        category: "Education",
        image: "/image/team/ips.PNG",
        shortDescription:
            "An educational institution website showcasing school information, academics and student development.",
        description:
            "Indian Public School's website presents information about the school, its educational activities and facilities for students and parents.",
        website: "https://indianpublicschooljhs.com/front",
    },
    {
        id: 5,
        title: "Mana Gudi",
        slug: "managudi",
        category: "Temple Services",
        image:
            "/image/team/mg.PNG",
        shortDescription:
            "A digital platform for temple-related information and services.",
        description:
            "Mana Gudi is a temple-related digital project that provides an online presence for visitors seeking information about its services.",
        website: "https://managudi.in/",
    },
    {
        id: 6,
        title: "Our Community",
        slug: "our-community",
        category: "Community Website",
        image: "/image/team/our-community.PNG",
        shortDescription:
            "A website project associated with the Our Community platform.",
        description:
            "Our Community is included as a website project. Its specific services and features should be confirmed from the live website before adding more detailed claims.",
        website: "https://ourcommunity.in/",
    },
    {
        id: 7,
        title: "SV Farms USA",
        slug: "sv-farms-usa",
        category: "Agriculture & Farming",
        image: "/image/team/sv-farm.PNG",
        shortDescription:
            "A North Carolina farm showcasing seasonal produce and farm-grown crops.",
        description:
            "SV Farms USA presents farm-grown produce, including seasonal fruits and vegetables as well as sweet potatoes, ginger, turmeric and garlic. The website also shares information about farm visits and produce pickup.",
        website: "https://svfarmsusa.com/",
    },
    {
        id: 8,
        title: "Prominent Shiksha Academy",
        slug: "prominent-shiksha-academy",
        category: "Education",
        image: "/image/team/psa.PNG",
        shortDescription:
            "A Dewas-based school focused on academics and students' overall development.",
        description:
            "Prominent Shiksha Academy's website presents its academic programmes, admission information and educational facilities, including a library, computer lab, science labs and sports facilities.",
        website: "https://psadewas.in/",
    },
    {
        id: 9,
        title: "Vidya Sanskar International School",
        slug: "vidya-sanskar-international-school",
        category: "Education",
        image: "/image/team/vsis.PNG",
        shortDescription:
            "A school website showcasing educational activities and learning facilities.",
        description:
            "Vidya Sanskar International School's website presents school-related information and activities, including playground time, arts and crafts, music and dance, transportation and educational tours.",
        website: "https://vidyasanskar.in/",
    },
    {
        id: 10,
        title: "Shri Hospital",
        slug: "shri-hospital",
        category: "Healthcare",
        image: "/image/team/sh.PNG",
        shortDescription:
            "A hospital website presenting medical services and patient-care facilities in Katni.",
        description:
            "Shri Hospital's website presents its emergency services, medical and surgical departments, and facilities such as diagnostic services, ICU, pharmacy and patient accommodation.",
        website: "https://shri-hospital.com/",
    },
    {
        id: 11,
        title: "Medicare Hospital Rander",
        slug: "medicare-hospital-rander",
        category: "Healthcare",
        image: "/image/team/mh.PNG",
        shortDescription:
            "A healthcare website presenting specialist consultations and hospital services in Rander, Surat.",
        description:
            "Medicare Hospital Rander's website provides information about services including cardiology, neurology, diabetes care, respiratory consultations, laboratory facilities, pharmacy and health checkups.",
        website: "https://medicarehospitalrander.in/",
    },
    {
        id: 12,
        title: "Crewzo",
        slug: "crewzo",
        category: "Real Estate Platform",
        image: "/image/team/crewzo.PNG",
        shortDescription:
            "A property platform connecting people with property listings and owners.",
        description:
            "Crewzo is a real estate platform project. Visit the live website for its current property listings and features.",
        website: "https://crewzo.in/",
    },
];

function ProjectDetails() {
    const { slug } = useParams();
    const project = projects.find((item) => item.slug === slug);
    usePageMeta(
        project ? `${project.title} Project | Xlligent Softwares` : "Project Not Found | Xlligent Softwares",
        project?.shortDescription || "Explore website and software projects delivered by Xlligent Softwares.",
        project ? `${project.title}, ${project.category}, website development project, Xlligent Softwares` : "software projects, website portfolio, Xlligent Softwares"
    );
    const [imageError, setImageError] = useState(false);

    if (!project) {
        return (
            <section className="project-not-found">
                <h1>Project Not Found</h1>
                <p>
                    The project you are looking for does not exist or the URL is
                    incorrect.
                </p>
                <Link to="/project">← Back To Projects</Link>
            </section>
        );
    }

    return (
        <main className="project-details-page">
            <section className="project-details-hero">
                <div className="project-details-container">
                    <Link to="/project" className="project-back-top">
                        ← Back to All Products
                    </Link>

                    <span className="project-details-tag">
                        {project.category}
                    </span>

                    <h1>{project.title}</h1>
                    <p>{project.shortDescription}</p>
                </div>
            </section>

            <section className="project-details-content">
                <div className="project-details-container">
                    <div className="project-details-grid">
                        <div className="project-details-image">
                            {!imageError ? (
                                <img
                                    src={project.image}
                                    alt={`${project.title} project`}
                                    onError={() => setImageError(true)}
                                />
                            ) : (
                                <div className="project-image-fallback">
                                    <span>{project.title}</span>
                                    <p>Project preview unavailable</p>
                                </div>
                            )}
                        </div>

                        <div className="project-details-info">
                            <span className="project-details-label">
                                ABOUT PROJECT
                            </span>

                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                    </div>

                    <div className="project-details-bottom">
                        <div className="project-type-box">
                            <span>PROJECT TYPE</span>
                            <strong>{project.category}</strong>
                        </div>

                        <div className="project-details-actions">
                            {project.website && (
                                <a
                                    href={project.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="visit-project-btn"
                                >
                                    Visit Website ↗
                                </a>
                            )}

                            <Link
                                to="/project"
                                className="back-project-btn"
                            >
                                ← All Projects
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default ProjectDetails;
