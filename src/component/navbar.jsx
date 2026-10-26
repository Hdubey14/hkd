import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../public/image/logo.png";
import ContactSidebar from "./contactsocial";
import "./navbar.css";

function Navbar() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [moreOpen, setMoreOpen] = useState(false);

    const navbarRef = useRef(null);

    const closeMenu = () => {
        setMoreOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            closeMenu();
        };

        const handleOutsideTap = (event) => {
            if (
                navbarRef.current &&
                !navbarRef.current.contains(event.target)
            ) {
                closeMenu();
            }
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        document.addEventListener("pointerdown", handleOutsideTap);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("pointerdown", handleOutsideTap);
        };
    }, []);

    return (
        <div>
            <nav
                ref={navbarRef}
                className={`navbar ${scrolled ? "scrolled" : ""}`}
            >
                {/* LOGO */}
                <NavLink
                    to="/"
                    className="navbar-logo"
                    onClick={closeMenu}
                >
                    <img
                        src={logo}
                        alt="Xlligent Softwares"
                        className="logo-image"
                    />
                </NavLink>

                {/* NAVIGATION LINKS */}
                <div className="navbar-links">
                    {/* HOME */}
                    <NavLink
                        to="/"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                        end
                    >
                        Home
                    </NavLink>

                    {/* ABOUT */}
                    <NavLink
                        to="/about"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                    >
                        About
                    </NavLink>

                    {/* SERVICES */}
                    <NavLink
                        to="/services"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                    >
                        Services
                    </NavLink>

                    {/* PRODUCTS */}
                    <NavLink
                        to="/products"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                    >
                        Products
                    </NavLink>

                    {/* CAREER */}
                    <NavLink
                        to="/career"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive ? "active-link" : ""
                        }
                    >
                        Careers
                    </NavLink>

                    {/* MORE DROPDOWN */}
                    <div className="more-dropdown">
                        <button
                            className={`more-dropdown-button ${
                                moreOpen ? "more-active" : ""
                            }`}
                            onClick={() => setMoreOpen(!moreOpen)}
                            aria-expanded={moreOpen}
                            type="button"
                        >
                            More
                            <span
                                className={`dropdown-arrow ${
                                    moreOpen ? "rotate" : ""
                                }`}
                            >
                                ▾
                            </span>
                        </button>

                        {/* DROPDOWN MENU */}
                        <div
                            className={`more-dropdown-menu ${
                                moreOpen ? "show" : ""
                            }`}
                        >
                            {/* <NavLink
                                to="/our-team"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    isActive ? "dropdown-active" : ""
                                }
                            >
                                Our Team
                            </NavLink> */}

                            <NavLink
                                to="/project"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    isActive ? "dropdown-active" : ""
                                }
                            >
                                Project
                            </NavLink>

                            <NavLink
                                to="/reviews"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    isActive ? "dropdown-active" : ""
                                }
                            >
                                Reviews
                            </NavLink>

                            <NavLink
                                to="/faq"
                                onClick={closeMenu}
                                className={({ isActive }) =>
                                    isActive ? "dropdown-active" : ""
                                }
                            >
                                FAQ
                            </NavLink>
                        </div>
                    </div>

                    {/* GET STARTED */}
                    <NavLink
                        to="/contact"
                        onClick={closeMenu}
                        className={({ isActive }) =>
                            isActive
                                ? "navbar-button active-button"
                                : "navbar-button"
                        }
                    >
                        Get Started
                    </NavLink>
                </div>

                {/* MOBILE / TABLET MENU + CONTACT SIDEBAR BUTTON */}
                <button
                    className="menu-button"
                    onClick={() => {
                        setMoreOpen(false);
                        setSidebarOpen(true);
                    }}
                    aria-label="Open menu and contact sidebar"
                    aria-expanded={sidebarOpen}
                    type="button"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* CONTACT SIDEBAR BUTTON */}
                <button
                    className="sidebar-menu-button"
                    onClick={() => setSidebarOpen(true)}
                    aria-label="Open contact sidebar"
                    type="button"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </nav>

            {/* CONTACT SIDEBAR */}
            <ContactSidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
            />
        </div>
    );
}

export default Navbar;
