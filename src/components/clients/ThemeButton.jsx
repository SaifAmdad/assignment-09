"use client";

import { useEffect, useState } from "react";
import { IoIosMoon } from "react-icons/io";
import { IoSunny } from "react-icons/io5";

function ThemeButton() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState("light"); // static initial value

  useEffect(() => {
    setMounted(true);

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);

    const root = document.documentElement;
    root.setAttribute("data-theme", savedTheme);

    if (savedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme, mounted]);

  if (!mounted) return null; // ✅ prevents mismatch

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="cursor-pointer"
    >
      {theme === "light" ? (
        <IoIosMoon fill="#6366F1" size={22} />
      ) : (
        <IoSunny fill="#6366F1" size={22} />
      )}
    </button>
  );
}

export default ThemeButton;
