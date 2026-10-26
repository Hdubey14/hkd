
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaPhp,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaJava,
    FaPython,
    FaGitAlt,
    FaBootstrap,
    FaWordpress,
    FaLaravel,
} from "react-icons/fa";

import usePageMeta from "../hooks/usePageMeta";
import MergedCareer from "../component/MergedCareer";
import { Link } from "react-router-dom";
import "./CareerPage.css";
import CTA from "../component/CTA";

function CareerPage() {
    const technologies = [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "PHP", icon: <FaPhp /> },
        { name: "React", icon: <FaReact /> },
        { name: "MySQL", icon: <FaDatabase /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "WordPress", icon: <FaWordpress /> },
        { name: "Laravel", icon: <FaLaravel /> },
    ];

    usePageMeta(
        "Careers at Xlligent Softwares | Join Our Team",
        "Explore career opportunities at Xlligent Softwares and learn about our work in business software, web development and industry-focused digital products.",
        "Xlligent Softwares careers, software jobs, web development careers, technology jobs"
    );

   
    return (
        <main className="info-page">
            {/* HERO */}

            {/* CAREER SLIDER */}
            <div className="career-page-merged">
                <MergedCareer />
            </div>

            {/* TECHNOLOGIES */}
            <section className="info-section career-tech-section">
                <div className="services-heading">
                    <span className="section-tag">TECHNOLOGIES</span>

                    <h2>
                        Technologies We
                        <span> Work With</span>
                    </h2>

                    <p>
                        Explore the technologies and tools used across our
                        software development projects.
                    </p>
                </div>

                <div className="career-tech-marquee">
                    <div className="career-tech-track">
                        {technologies.map((tech) => (
                            <div
                                className="career-tech-card"
                                key={tech.name}
                            >
                                <div className="career-tech-icon">
                                    {tech.icon}
                                </div>

                                <span>{tech.name}</span>
                            </div>
                        ))}

                        {/* Duplicate row for seamless animation */}
                        {technologies.map((tech) => (
                            <div
                                className="career-tech-card"
                                key={`duplicate-${tech.name}`}
                                aria-hidden="true"
                            >
                                <div className="career-tech-icon">
                                    {tech.icon}
                                </div>

                                <span>{tech.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

                <CTA />
        </main>
    );
}

export default CareerPage;
