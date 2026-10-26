import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./scrollButton.css";

function ScrollToTopButton() {

    const [showButton, setShowButton] = useState(false);

    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 400) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }

        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, []);

    const scrollToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    };

    if (!showButton) {
        return null;
    }

    return (
        <button
            className="scroll-to-top"
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <FaArrowUp />
        </button>
    );
}

export default ScrollToTopButton;
