import { motion } from "framer-motion";
import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";

export default function Contact() {
  const links = [
    {
      icon: <SiLinkedin />,
      href: "https://www.linkedin.com/in/raziuddin-mohd/",
      label: "LinkedIn",
      color: "hover:text-cyan-400 hover:shadow-cyan-400/40",
    },
    {
      icon: <SiGithub />,
      href: "https://github.com/Inviciousx",
      label: "GitHub",
      color: "hover:text-cyan-400 hover:shadow-cyan-400/40",
    },
    {
      icon: <SiGmail />,
      href: "mailto:raziuddin.2199@gmail.com",
      label: "Email",
      color: "hover:text-cyan-400 hover:shadow-cyan-400/40",
    },
  ];

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-6xl px-4 py-16 text-center"
    >
      <h2 className="text-2xl font-semibold text-slate-200 mb-6">
        Get <span className="text-cyan-400">in Touch</span>
      </h2>

      <p className="text-slate-400 mb-8">
        I'm open to opportunities in IT Support and Cybersecurity (Defense &
        Monitoring). Feel free to connect or reach out directly.
      </p>

      <div className="flex justify-center gap-8">
        {links.map(({ href, icon, label, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
            className={`text-3xl text-slate-400 transition-transform duration-300 transform hover:scale-125 ${color}`}
            style={{
              textShadow:
                "0 0 10px rgba(34,211,238,0.5), 0 0 20px rgba(34,211,238,0.2)",
            }}
          >
            {icon}
          </a>
        ))}
      </div>
    </motion.section>
  );
}
