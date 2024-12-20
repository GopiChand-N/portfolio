import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Listen to navigation item clicks and scroll to top
  const handleNavigationClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Attach click listeners to navigation links
  useEffect(() => {
    const navLinks = document.querySelectorAll("a[href]");
    navLinks.forEach((link) =>
      link.addEventListener("click", handleNavigationClick)
    );

    return () => {
      navLinks.forEach((link) =>
        link.removeEventListener("click", handleNavigationClick)
      );
    };
  }, []);

  return null;
}

export default ScrollToTop;
