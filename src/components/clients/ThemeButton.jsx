"use client";

import { useEffect, useState } from "react";
import { IoIosMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";

function ThemeButton() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // If using Tailwind v4 alongside daisyUI, toggle the .dark class too
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);
  return (
    <button
      onClick={() => setTheme(`${theme == "light" ? "dark" : "light"}`)}
      className="cursor-pointer"
    >
      {theme == "light" ? (
        <IoIosMoon fill="#6366F1" size={22} />
      ) : (
        <IoSunny fill="#6366F1" size={22} />
      )}
    </button>
  );
}

export default ThemeButton;
