import { useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary-dark transition duration-300"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

export default DarkModeSwitch;
