import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#certs", label: "Certifications" },
  { href: "#projects", label: "Projects" },
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
        // Navigate home and scroll after load
        navigate("/", { state: { scrollTo: target } });
      } else {
        // ✅ Remove hash from URL so browser doesn’t remember #section
        if (window.history.replaceState) {
          window.history.replaceState(null, "", window.location.pathname);
        }

        // Smooth scroll to section
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
          Raziuddin<span className="text-slate-400">.portfolio</span>
        </a>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden rounded p-2 text-slate-300 hover:text-cyan-400"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          ☰
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

          {/* Social Icons */}
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

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-gray-800/60 bg-black/80">
          <ul className="px-4 py-3 grid gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href="/"
                  onClick={(e) => handleClick(e, l.href)}
                  className="block text-slate-300 hover:text-cyan-400"
                >
                  {l.label}
                </a>
              </li>
            ))}

            {/* Socials for Mobile */}
            <li className="flex items-center gap-4 pt-2">
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
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
