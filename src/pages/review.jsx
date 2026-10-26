import usePageMeta from "../hooks/usePageMeta";
import React from "react";
import { Link } from "react-router-dom";
import {
    FaStar,
    FaQuoteLeft,
    FaMapMarkerAlt,
    FaExternalLinkAlt,
    FaRobot,
    FaCheckCircle,
    FaArrowRight,
} from "react-icons/fa";
import "./review.css";
import CTA from "../component/CTA";


/* =========================================================
   GOOGLE REVIEWS
========================================================= */







const locations = [
    "Dewas",
    "Indore",
    "Bangalore",
    "Penang",
];


function Reviews() {
    usePageMeta(
        "Client Reviews | Xlligent Softwares",
        "Read client feedback and find Xlligent Softwares on the map to learn more about our software and digital services.",
        "Xlligent Softwares reviews, software company reviews, client feedback"
    );
    return (
        <div className="xreview-page">

            {/* =====================================================
                HERO
            ===================================================== */}

           
            {/* =====================================================
                GOOGLE REVIEWS
            ===================================================== */}

            <section
                className="xreview-google-section"
                id="xreview-google"
            >

                <div className="xreview-section-heading">

                    <span className="xreview-small-title">
                        GOOGLE REVIEWS
                    </span>

                    <h2>
                        What Our
                        <span> Customers Say</span>
                    </h2>

                    <p>
                        Real customer feedback covering school management,
                        ERP, hospital software, web development, WhatsApp
                        solutions, support and customized software.
                    </p>
                     <div className="elfsight-app-3818e28a-d645-4f8e-8db2-7e58c22d626c" data-elfsight-app-lazy />


                </div>


                {/* =================================================
                    RATING SUMMARY
                ================================================= */}

              

         
            </section >


            {/* =====================================================
                CTA
            ===================================================== */}

            < section className="xreview-cta" >

               <CTA/>

            </section >

        </div >
    );
}

export default Reviews;
