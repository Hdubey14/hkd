
import {
  FaCogs,
  FaShieldAlt,
  FaChartLine,
  FaHeadset,
  FaSlidersH,
  FaRobot,
  FaCheckCircle,
  FaDatabase,
  FaProjectDiagram,
  FaSyncAlt,
} from "react-icons/fa";
import { TbMessageChatbot } from "react-icons/tb";

import ServicesPageServices from "../component/ServicesPageServices";
import CTA from "../component/CTA";
import usePageMeta from "../hooks/usePageMeta";
import "./ServicesPage.css";

function ServicesPage() {
  usePageMeta(
    "Software Development Services | Xlligent Softwares",
    "Discover customised ERP solutions, web development, mobile app development, AI integration and business software services from Xlligent Softwares.",
    "software development services, custom ERP development, website development, mobile app development, AI integration"
  );

  const whyUs = [
    {
      title: "Connected Business Data",
      description:
        "Bring important records, transactions and daily activities into one organised workspace, helping teams find information and make informed decisions.",
      icon: <FaDatabase />,
    },
    {
      title: "Secure Role-Based Access",
      description:
        "Keep sensitive information better protected with permission-based access that reflects each user's role and responsibilities.",
      icon: <FaShieldAlt />,
    },
    {
      title: "Built To Scale",
      description:
        "Start with the features your business needs now and expand modules and capabilities as operations grow and requirements evolve.",
      icon: <FaChartLine />,
    },
    {
      title: "Smarter Daily Workflows",
      description:
        "Reduce repetitive entry and manual follow-ups with practical automation for recurring administrative and operational tasks.",
      icon: <TbMessageChatbot />,
    },
    {
      title: "Customised To Your Process",
      description:
        "Configure workflows, screens and modules around your organisation's real working methods instead of forcing teams into a rigid system.",
      icon: <FaSlidersH />,
    },
    {
      title: "Support That Continues",
      description:
        "Get assistance with implementation, troubleshooting and future improvements as your team uses the solution in day-to-day work.",
      icon: <FaHeadset />,
    },
    {
      title: "Clear Operational Insights",
      description:
        "Turn business activity into useful reports and summaries so teams can monitor progress, spot gaps and plan their next steps.",
      icon: <FaProjectDiagram />,
    },
    {
      title: "Practical AI Integration",
      description:
        "Introduce AI features where they add value, from information retrieval and summaries to workflow assistance based on project needs.",
      icon: <FaRobot />,
    },
  ];

  const highlights = [
    "Guided implementation",
    "Decision-ready reporting",
    "Room to scale",
    "Ongoing technical support",
  ];

  return (
    <main className="info-page services-page">
      <ServicesPageServices />

      <section className="info-section services-why-section">
        <div className="services-heading">
          <span className="section-tag">WHY XLLIGENT SOFTWARES</span>

          <h2>
            Technology That Works.
            <span> Support That Stays.</span>
          </h2>

          <p>
            From the first rollout to everyday use, we focus on dependable
            software, practical workflows and support that helps your team
            get lasting value from technology.
          </p>
        </div>

        <div className="services-grid">
          {whyUs.map((item) => (
            <article className="service-card" key={item.title}>
              <div className="service-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="about-highlights services-highlights">
          {highlights.map((item) => (
            <div className="about-highlight" key={item}>
              <FaCheckCircle aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </main>
  );
}

export default ServicesPage;
