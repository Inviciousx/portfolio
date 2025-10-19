import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certs", label: "Certifications" },
  { href: "#resume", label: "Resume" },
  { href: "#news", label: "News" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleClick = (e, href) => {
    e.preventDefault();
    setOpen(false);

    if (href.startsWith("#")) {
      const target = href.slice(1);

      if (window.location.pathname !== "/") {
        navigate("/", { state: { scrollTo: target } });
      } else {
        if (window.history.replaceState) {
          window.history.replaceState(null, "", window.location.pathname);
        }

        const section = document.getElementById(target);
        if (section) section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-gray-800/60 bg-black/50 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => handleClick(e, "#home")}
          className="font-semibold tracking-wide text-cyan-400"
        >
          Raziuddin Mohammed<span className="text-slate-400">.portfolio</span>
        </a>

        {/* Animated Hamburger */}
        <button
          className="relative w-6 h-5 flex flex-col justify-between items-center md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="block h-[2px] w-full bg-slate-300 rounded origin-center"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="block h-[2px] w-full bg-slate-300 rounded"
            transition={{ duration: 0.3 }}
          />
          <motion.span
            animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="block h-[2px] w-full bg-slate-300 rounded origin-center"
            transition={{ duration: 0.3 }}
          />
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href="/"
                onClick={(e) => handleClick(e, l.href)}
                className="text-slate-300 hover:text-cyan-400 cursor-pointer transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/raziuddin-mohd/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-cyan-400"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://github.com/Inviciousx"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-cyan-400"
            >
              <FaGithub size={18} />
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu with Transition */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden border-t border-gray-800/60 bg-black/80"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="px-4 py-3 grid gap-3">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href="/"
                    onClick={(e) => handleClick(e, l.href)}
                    className="block text-slate-300 hover:text-cyan-400"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                className="flex items-center gap-4 pt-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.05 }}
              >
                <a
                  href="https://www.linkedin.com/in/raziuddin-mohd/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://github.com/Inviciousx"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400"
                >
                  <FaGithub size={18} />
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
