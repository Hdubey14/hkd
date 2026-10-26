
import {
  FaBoxes,
  FaCogs,
  FaGlobe,
  FaMobileAlt,
  FaRobot,
  FaLaptopCode,
  FaDatabase,
  FaPlug,
} from "react-icons/fa";
import "./servicepage.css";

const services = [
  {
    number: "01",
    title: "Business Software Products",
    description:
      "Purpose-built management products that organise everyday work, reduce scattered records and help teams manage operations through a consistent workflow.",
    icon: <FaBoxes />,
  },
    {
    number: "02",
    title: "Web Platforms",
    description:
      "Responsive business websites, customer portals and web applications designed to present your services clearly and make digital tasks easier to complete.",
    icon: <FaGlobe />,
  },
 
  {
    number: "03",
    title: "AI-Powered Solutions",
    description:
      "Useful AI capabilities such as information assistance, document summaries and task support, selected to suit your product and business requirements.",
    icon: <FaRobot />,
  },
  {
    number: "04",
    title: "Custom Software Development",
    description:
      "Software designed for specialised requirements when off-the-shelf tools cannot support your process, integrations or business rules effectively.",
    icon: <FaLaptopCode />,
  },
  {
    number: "05",
    title: "Data & Reporting Systems",
    description:
      "Structured dashboards and reporting workflows that help teams bring business information together and understand performance more clearly.",
    icon: <FaDatabase />,
  },
  {
    number: "06",
    title: "Software Consulting & Integration",
    description:
      "Practical guidance for selecting technologies, connecting existing systems and planning improvements without creating unnecessary complexity.",
    icon: <FaPlug />,
  },
];

function ServicesPageServices() {
  return (
    <section className="service-offerings-section">
      <div className="service-offerings-inner">
        <div className="services-heading">
          <span className="section-tag">OUR SERVICES</span>
          <h2>
            Software Built For <span>How You Work.</span>
          </h2>
          <p>
            Digital products and tailored engineering to simplify operations,
            connect information and support the next stage of your business.
          </p>
        </div>

        <div className="service-offerings-grid">
          {services.map((service) => (
            <article className="offering-card" key={service.number}>
              <div className="offering-card-top">
                <span className="offering-number">{service.number}</span>
                <span className="offering-icon">{service.icon}</span>
              </div>

              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesPageServices;
