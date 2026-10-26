import usePageMeta from "../hooks/usePageMeta";
import React from "react";
import { Link } from "react-router-dom";

import {
    FaArrowRight,
    FaLinkedinIn,
    FaUsers,
    FaLightbulb,
    FaCode,
    FaLaptopCode,
    FaChartLine,
    FaHandshake,
} from "react-icons/fa";
import "./ourTeam.css";


// =========================================================
// TEAM MEMBERS
// =========================================================


const teamMembers = [
    {
        name: "Gaurav Shrivastava",
        role: "Creative Director & CEO",
        image: "/image/team/gourav.webp",
    },
    {
        name: "Bahrudin Ahamed Ali",
        role: "Head Of Operations, Malaysia",
        image: "/image/team/Bahrudin.webp",
    },
    {
        name: "Arbaz Khan",
        role: "Senior System Executive",
        image: "/image/team/Arbaz.webp",
    },
    // {
    //     name: "Safiya Khan",
    //     role: "Senior System Executive",
    //     image: "/image/team/sofiya.webp",
    // },
    {
        name: "Abhishek Shukla",
        role: "Software Engineer",
        image: "/image/team/abhishek.webp",
    },
    // {
    //     name: "Rohit Dubey",
    //     role: "Software Engineer",
    //     image: "/image/team/rohit.webp",
    // },
    {
        name: "Geeta Patidar",
        role: "Senior Sales Executive",
        image: "/image/team/geeta.webp",
    },
];


// =========================================================
// TEAM VALUES
// =========================================================

const teamValues = [
    {
        icon: <FaLightbulb />,
        title: "Creative Thinking",
        text:
            "We turn business requirements into practical and meaningful digital solutions.",
    },
    {
        icon: <FaLaptopCode />,
        title: "Technology",
        text:
            "Our team works with modern technologies to build reliable software products.",
    },
    {
        icon: <FaChartLine />,
        title: "Business Focus",
        text:
            "Every solution is designed around real business workflows and objectives.",
    },
    {
        icon: <FaHandshake />,
        title: "Collaboration",
        text:
            "We believe clear communication and teamwork are essential for successful projects.",
    },
];


// =========================================================
// OUR TEAM PAGE
// =========================================================

function OurTeam() {
    usePageMeta(
        "Our Team | Xlligent Softwares",
        "Meet the team behind Xlligent Softwares and learn about our work across software products, web development and digital solutions.",
        "Xlligent Softwares team, software development team, web development company"
    );
    return (
        // <main className="xteam-page">

        //     {/* =====================================================
        //         HERO
        //     ===================================================== */}

        //     <section className="xteam-hero">

        //         <div className="xteam-hero-content">

        //             <span className="xteam-tag">
        //                 OUR TEAM
        //             </span>

        //             <h1>
        //                 Meet The <span>Dream Team</span>
        //             </h1>

        //             <p>
        //                 The passionate innovators behind Xlligent Softwares.
        //                 Together, we bring expertise, creativity and technology
        //                 to build software solutions designed for real business
        //                 needs.
        //             </p>

        //             <div className="xteam-hero-buttons">

        //                 <a
        //                     href="#xteam-members"
        //                     className="xteam-primary-btn"
        //                 >
        //                     Meet Our Team
        //                     <FaArrowRight />
        //                 </a>

        //                 <Link
        //                     to="/contact"
        //                     className="xteam-secondary-btn"
        //                 >
        //                     Work With Us
        //                 </Link>

        //             </div>

        //         </div>

        //     </section>


        //     {/* =====================================================
        //         WHO WE ARE
        //     ===================================================== */}

        //     {/* <section className="xteam-intro">

        //         <div className="xteam-container">

        //             <div className="xteam-intro-grid">

        //                 <div className="xteam-intro-heading xteam-intro-content">

        //                     <span className="xteam-tag">
        //                         WHO WE ARE
        //                     </span>

        //                     <h2>
        //                         People, Ideas & <span>Technology</span>
        //                     </h2>

        //                                            <p>
        //                         At Xlligent, we excel in providing top-tier IT
        //                         solutions tailored to our clients needs.
        //                     </p>

        //                     <p>
        //                         Our team combines technical expertise, creative
        //                         thinking and business understanding to develop
        //                         software solutions that help businesses simplify
        //                         processes, manage information and improve
        //                         everyday operations.
        //                     </p>

        //                 </div>

        //             </div>

        //         </div>

        //     </section> */}

        //     {/* =====================================================
        //         TEAM MEMBERS
        //     ===================================================== */}

        //     <section
        //         className="xteam-members"
        //         id="xteam-members"
        //     >

        //         <div className="xteam-container">

        //             <div className="xteam-section-heading">

        //                 <span className="xteam-tag">
        //                     OUR PEOPLE
        //                 </span>

        //                 <h2>
        //                     Meet The People Behind{" "}
        //                     <span>Xlligent</span>
        //                 </h2>

        //                 <p>
        //                     A dedicated team working across technology,
        //                     operations, sales and software development.
        //                 </p>

        //             </div>


        //             <div className="xteam-grid">

        //                 {teamMembers.map((member, index) => (

        //                     <article
        //                         className="xteam-member-card"
        //                         key={member.name}
        //                     >

        //                         <div className="xteam-member-image">

        //                             <img
        //                                 src={member.image}
        //                                 alt={member.name}
        //                                 loading="lazy"
        //                             />

        //                             {/* <span className="xteam-member-number">
        //                                 {String(index + 1).padStart(2, "0")}
        //                             </span> */}

        //                             <div className="xteam-member-overlay">

        //                                 <a
        //                                     href="#"
        //                                     aria-label={`${member.name} LinkedIn`}
        //                                     onClick={(e) =>
        //                                         e.preventDefault()
        //                                     }
        //                                 >
        //                                     <FaLinkedinIn />
        //                                 </a>

        //                             </div>

        //                         </div>


        //                         <div className="xteam-member-content">

        //                             <h3>
        //                                 {member.name}
        //                             </h3>

        //                             <p>
        //                                 {member.role}
        //                             </p>

        //                         </div>

        //                     </article>

        //                 ))}

        //             </div>

        //         </div>

        //     </section>


        //     {/* =====================================================
        //         HOW WE WORK
        //     ===================================================== */}

        //     <section className="xteam-values">

        //         <div className="xteam-container">

        //             <div className="xteam-section-heading">

        //                 <span className="xteam-tag">
        //                     HOW WE WORK
        //                 </span>

        //                 <h2>
        //                     One Team. <span>One Vision.</span>
        //                 </h2>

        //                 <p>
        //                     Different skills come together to create complete
        //                     technology solutions for our clients.
        //                 </p>

        //             </div>


        //             <div className="xteam-values-grid">

        //                 {teamValues.map((item) => (

        //                     <article
        //                         className="xteam-value-card"
        //                         key={item.title}
        //                     >

        //                         <div className="xteam-value-icon">
        //                             {item.icon}
        //                         </div>

        //                         <h3>
        //                             {item.title}
        //                         </h3>

        //                         <p>
        //                             {item.text}
        //                         </p>

        //                     </article>

        //                 ))}

        //             </div>

        //         </div>

        //     </section>




        //     {/* =====================================================
        //         CTA
        //     ===================================================== */}

        //     <section className="xteam-cta">

        //         <div className="xteam-cta-content">

        //             <span className="xteam-tag">
        //                 WORK WITH US
        //             </span>

        //             <h2>
        //                 Great Software Starts With{" "}
        //                 <span>Great People.</span>
        //             </h2>

        //             <p>
        //                 Have a project idea or business requirement?
        //                 Let's discuss how our team can help turn it into
        //                 a practical digital solution.
        //             </p>

        //             <Link
        //                 to="/contact"
        //                 className="xteam-primary-btn"
        //             >
        //                 Start A Conversation
        //                 <FaArrowRight />
        //             </Link>

        //         </div>

        //     </section>

        // </main>
        <div>.</div>
    )
}

export default OurTeam;
