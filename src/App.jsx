import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import SectionDivider from "./components/SectionDivider";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import NewsWidget from "./components/NewsWidget";

// Pages
import ProjectList from "./pages/ProjectList";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  const location = useLocation();

  /* 🔹 Scroll to section after navigating home */
  useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const id = location.state.scrollTo;
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 250);
      }
    }
  }, [location]);

  /* 🔹 Always scroll to top on route change */
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  /* 🔹 Shared animation settings (no bounce) */
  const fadeConfig = {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -24 },
    transition: {
      duration: 0.45,
      ease: [0.4, 0, 0.2, 1],
      type: "tween", // disables bounce/spring
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-[#0b1020] to-black text-slate-200 overflow-x-hidden">
      <Navbar />
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* ---------------- HOME PAGE ---------------- */}
            <Route
              path="/"
              element={
                <motion.div {...fadeConfig}>
                  <Hero />
                  <SectionDivider />
                  <About />
                  <SectionDivider />
                  <Experience />
                  <SectionDivider />
                  <Certifications />
                  <SectionDivider />
                  <Projects />
                  <SectionDivider />
                  <Resume />
                  <SectionDivider />
                  <NewsWidget />
                  <SectionDivider />
                  <Contact />
                  <SectionDivider />
                </motion.div>
              }
            />

            {/* ---------------- PROJECT LIST ---------------- */}
            <Route
              path="/projects"
              element={
                <motion.div {...fadeConfig}>
                  <ProjectList />
                </motion.div>
              }
            />

            {/* ---------------- PROJECT DETAIL ---------------- */}
            <Route
              path="/projects/:id"
              element={
                <motion.div {...fadeConfig}>
                  <ProjectDetail />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
