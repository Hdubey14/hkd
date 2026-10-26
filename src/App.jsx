import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./pages/home";
import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Aboutpage from "./pages/Aboutpage";
import CareerPage from "./pages/CareerPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import Service from "./pages/ServicesPage";
import Scroll from "./component/scroll";
import AIAssistant from "./component/AIAssistant";
import ScrollToTopButton from "./component/scrollButton";
import ProductDetails from "./pages/productDetails";
import PageLoader from "./component/pageloader";

// PROJECT PAGES
import ProjectsPage from "./pages/project";
import ProjectDetails from "./pages/projectdetail";

// COMPANY PAGES
import OurTeam from "./pages/ourTeam";
import Reviews from "./pages/review";
import FAQ from "./pages/faq";
import "./styles/light-mode.css";

function App() {
  return (
    <BrowserRouter>

    <PageLoader />

      <Scroll />

      <Navbar />

      <Routes>

        {/* MAIN PAGES */}

        <Route path="/" element={<Home />} />

        <Route
          path="/about"
          element={<Aboutpage />}
        />

        <Route
          path="/career"
          element={<CareerPage />}
        />

        <Route
          path="/contact"
          element={<ContactPage />}
        />

       

        <Route
          path="/services"
          element={<Service />}
        />


        {/* PRODUCTS */}

        <Route
          path="/products"
          element={<PortfolioPage />}
        />

        {/* PRODUCT DETAILS */}

        <Route
          path="/products/:slug"
          element={<ProductDetails />}
        />


        {/* COMPANY PAGES */}

        <Route
          path="/our-team"
          element={<OurTeam />}
        />

        <Route
          path="/reviews"
          element={<Reviews />}
        />

        <Route
          path="/faq"
          element={<FAQ />}
        />


        {/* PROJECTS */}

        <Route
          path="/project"
          element={<ProjectsPage />}
        />

        <Route
          path="/projects/:slug"
          element={<ProjectDetails />}
        />

      </Routes>


      <Footer />

      <AIAssistant />

      <ScrollToTopButton />

    </BrowserRouter>
  );
}

export default App;
