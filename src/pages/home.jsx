import Slider from "../component/Slider";
import MergedHero from "../component/MergedHero";
import MergedAbout from "../component/MergedAbout";
import MergedServices from "../component/MergedServices";
import Client from "../component/client";
import GoogleReviewsWidget from "../component/GoogleReviewsWidget";
import MergedCareer from "../component/MergedCareer";
import FAQ from "../component/FAQ";
import MergedContact from "../component/MergedContact";
import usePageMeta from "../hooks/usePageMeta";
import "./home.css";

export default function Home() {
  usePageMeta(
    "Xlligent Softwares | Business Software, ERP & Web Development",
    "Explore business software, industry-focused ERP systems, school and hospital management software, website development and digital solutions from Xlligent Softwares.",
    "business software, ERP software, school management system, hospital management system, web development, software company"
  );

  return (
    <main className="merged-home">
      {/* 01 — ORIGINAL REACT SLIDER — KEEP DARK */}
      <Slider />

      {/* 02 — SECOND WEBSITE HERO — LIGHT */}
      <MergedHero />

      {/* 03 — SECOND WEBSITE ABOUT — DARK */}
      <MergedAbout />

      {/* 04 — SECOND WEBSITE SERVICES — LIGHT */}
      <MergedServices />

      {/* 05 — ORIGINAL REACT PRODUCTS — DARK */}
   

      {/* 06 — ORIGINAL REACT CLIENTS — LIGHT */}
      <section className="merged-original-clients">
        <Client />
      </section>

      {/* 07 — GOOGLE CUSTOMER REVIEWS — reuse the configured Reviews-page widget */}
      <GoogleReviewsWidget />

      {/* 08 — SECOND WEBSITE CAREERS — LIGHT */}
      <MergedCareer />

      {/* 09 — ORIGINAL REACT FAQ — DARK */}
      <section className="merged-original-faq">
        <FAQ />
      </section>

      {/* 10 — SECOND WEBSITE CONTACT — LIGHT */}
      <MergedContact />
    </main>
  );
}
