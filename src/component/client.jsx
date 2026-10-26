import React from "react";
import "./client.css";

const clients = [
  {
    name: "Haridas Heart Hospital",
    logo: "/image/client/01_haridas_heart_hospital.png",
    website: "https://drharidas.com/",
  },
  {
    name: "Coolerherbals",
    logo: "/image/client/02_coolerherbals.png",
    website: "https://coolslimplan.com/",
  },
  {
    name: "Indian Public School",
    logo: "/image/client/03_indian_public_school.png",
    website: "https://indianpublicschooljhs.com/front",
  },
  {
    name: "Gyan Sthali Academy",
    logo: "/image/client/04_gyan_sthali.png",
    website: "https://gyansthali-academy.xlligent.in/",
  },
  {
    name: "Udaan Travels",
    logo: "/image/client/05_udaan_travels.png",
    website: "#",
  },
  {
    name: "Managudi",
    logo: "/image/client/06_managudi.png",
    website: "https://managudi.in/",
  },
  {
    name: "Devshree Hospital",
    logo: "/image/client/07_devshree_hospital.png",
    website: "https://devshreehospital.in/",
  },

  {
    name: "Shubh Hospital",
    logo: "/image/client/08_shubh_hospital.png",
    website: "#",
  },
  {
    name: "Strength & Courage Academy",
    logo: "/image/client/09_strength_courage_academy.png",
    website: "#",
  },
  {
    name: "Iconic Dreams Educational Academy",
    logo: "/image/client/10_iconic_dreams_academy.png",
    website: "#",
  },
  {
    name: "Pragati Shiksha Academy",
    logo: "/image/client/11_pragati_shiksha_academy.png",
    website: "#",
  },
  {
    name: "Mother's Lap International School",
    logo: "/image/client/12_mothers_lap_international_school.png",
    website: "https://motherslapinternational.in/",
  },
  {
    name: "Gold Book",
    logo: "/image/client/13_unknown_gold_book_logo.png",
    website: "#",
  },

  {
    name: "Ridhaan Hospital",
    logo: "/image/client/14_ridhaan_hospital.png",
    website: "#",
  },
  {
    name: "IDEA Educational Academy",
    logo: "/image/client/15_idea_education.png",
    website: "#",
  },
  {
    name: "Brainbridge",
    logo: "/image/client/16_brainbridge.png",
    website: "#",
  },
  {
    name: "Wisdom School",
    logo: "/image/client/17_wisdom_school.png",
    website: "#",
  },
  {
    name: "Dayanidhi Hospital",
    logo: "/image/client/18_dayanidhi_hospital.png",
    website: "#",
  },

  {
    name: "AJA Hospital",
    logo: "/image/client/19_aja_hospital.png",
    website: "#",
  },
  {
    name: "Picskart Weddings",
    logo: "/image/client/20_picskart_weddings.png",
    website: "https://picskartweddings.com/",
  },
  {
    name: "Medical Hospital",
    logo: "/image/client/21_medical_hospital.png",
    website: "#",
  },
  {
    name: "Shri Hospital",
    logo: "/image/client/22_shri_hospital.png",
    website: "#",
  },
];

const OurClients = () => {
  return (
    <section className="our-clients-section">
      <div className="our-clients-container">

        {/* ================= HEADING ================= */}

        <div className="our-clients-heading">
          <span className="clients-small-title">
            TRUSTED BY
          </span>

          <h2><span className="clients-heading-our">OUR</span> <span className="clients-heading-accent">CLIENTS</span></h2>
        </div>

        {/* ================= CLIENTS ================= */}

        <div className="clients-grid">
          {clients.map((client, index) => {
            const clickable =
              client.website && client.website !== "#";

            const clientContent = (
              <>
                <div className="client-logo-box">
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                  />
                </div>

                {/* Hidden by CSS */}
                <span className="client-name">
                  {client.name}
                </span>
              </>
            );

            if (clickable) {
              return (
                <a
                  key={index}
                  href={client.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="client-card"
                  aria-label={`Visit ${client.name} website`}
                  title={`Visit ${client.name}`}
                >
                  {clientContent}
                </a>
              );
            }

            return (
              <div
                key={index}
                className="client-card"
                title={client.name}
              >
                {clientContent}
              </div>
            );
          })}
        </div>

      <div className="client-impli">500+ Successful Implementations  </div>
      </div>
    </section>
  );
};

export default OurClients;
