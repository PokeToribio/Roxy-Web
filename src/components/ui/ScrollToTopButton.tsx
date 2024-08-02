import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-4 right-4 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="p-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary-dark transition duration-300"
      >
        <ArrowUp className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;
