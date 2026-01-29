'use client'

import About from "@/components/about";
import { useState } from "react";
// import ComingSoon from "@/components/coming-soon";

type SectionId = "about" | "projects" | "experience";

function scrollToSection(id: SectionId) {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (!el) return;

  const navOffset = 96; // keep content clear of fixed nav
  const targetY = el.getBoundingClientRect().top + window.scrollY - navOffset;

  window.scrollTo({
    top: targetY,
    behavior: "smooth",
  });
}

export default function Home() {
  const [currentSection, setCurrentSection] = useState<SectionId>("about");

  const navClicked = (section: SectionId) => {
    setCurrentSection(section);
    scrollToSection(section);
  };

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-white flex flex-col items-center">
      <nav className="fixed top-6 left-1/2 z-30 -translate-x-1/2">
        <div className="flex gap-2 border border-gray-200/70 rounded-full px-3 py-2 shadow-md bg-white/80 backdrop-blur">
          <button
            type="button"
            onClick={() => navClicked("about")}
            className={`hover:bg-gray-200/70 px-4 py-2 rounded-full hover:cursor-pointer ${
              currentSection === "about" ? "bg-gray-200/70" : ""
            }`}
          >
            About
          </button>
          <button
            type="button"
            onClick={() => navClicked("projects")}
            className={`hover:bg-gray-200/70 px-4 py-2 rounded-full hover:cursor-pointer ${
              currentSection === "projects" ? "bg-gray-200/70" : ""
            }`}
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => navClicked("experience")}
            className={`hover:bg-gray-200/70 px-4 py-2 rounded-full hover:cursor-pointer ${
              currentSection === "experience" ? "bg-gray-200/70" : ""
            }`}
          >
            Experience
          </button>
        </div>
      </nav>

      <section id="about" className="z-10 mt-24">
        <About />
      </section>

      <section id="projects" className="z-10 mt-6">
        <About />
      </section>

      <section id="experience" className="z-10 mt-6">
        <About />
      </section>
    </div>
  );
}
