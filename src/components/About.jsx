import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-semibold text-slate-200 mb-6"
      >
        About <span className="text-cyan-400">Me</span>
      </motion.h2>

      {/* ===== ABOUT TEXT ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.8 }}
        className="space-y-4 text-slate-400 max-w-3xl"
      >
        <p>
          I’m <span className="text-slate-200 font-semibold">Raziuddin Mohammed</span>, an
          IT Support and Technical Analyst with{" "}
          <span className="text-slate-200">3+ years of combined experience</span> in
          technical support, network troubleshooting, and customer service. I blend
          problem-solving expertise with a growing passion for{" "}
          <span className="text-slate-200">cyber defense and monitoring</span>.
        </p>

        <p>
          I hold a Bachelor’s in Information Technology (Osmania University) and a
          Postgraduate Diploma in Computer Systems Technology – Networking (Centennial
          College). Certified in{" "}
          <span className="text-slate-200">CCNA</span>,{" "}
          <span className="text-slate-200">CompTIA Security+</span>, and{" "}
          <span className="text-slate-200">Microsoft Azure Fundamentals (AZ-900)</span>,
          I’m currently advancing toward{" "}
          <span className="text-slate-200">CompTIA CySA+</span> and{" "}
          <span className="text-slate-200">TryHackMe SOC Level 1</span>.
        </p>

        <p>
          My experience includes SaaS and network support at{" "}
          <span className="text-slate-200">Concentrix</span> (Intuit QuickBooks Online),
          IT operations improvement at{" "}
          <span className="text-slate-200">Sound Marketing Inc.</span>, and enterprise
          support at <span className="text-slate-200">KhudraSoft</span> and{" "}
          <span className="text-slate-200">Pantech E-Learning</span>, where I built strong
          foundations in system administration, device deployment, and automation with Python.
        </p>

        <p>
          I’m passionate about transitioning into{" "}
          <span className="text-slate-200">Cybersecurity</span> — combining my technical
          expertise, curiosity, and analytical mindset to secure systems, detect anomalies,
          and strengthen enterprise resilience.
        </p>
      </motion.div>

      {/* ===== SKILLS GRID ===== */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="mt-10 border-t border-slate-800 pt-8 grid gap-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {/* Core Technical Skills */}
        <div>
          <h3 className="font-semibold text-slate-200 mb-4">
            Core Technical Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Troubleshooting",
              "Root-Cause Analysis",
              "Windows Server / AD",
              "Azure AD",
              "TCP/IP, VLANs, DHCP, DNS",
              "OSPF, QoS",
              "Virtualization (VMware / Hyper-V)",
              "Cloud (Azure)",
              "Incident Response (SOC)",
              "Documentation & SOPs",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs md:text-sm rounded-full bg-slate-800/50 text-slate-300 border border-slate-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Cybersecurity Tools */}
        <div>
          <h3 className="font-semibold text-slate-200 mb-4">
            Cybersecurity Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Kali Linux",
              "Splunk",
              "ELK Stack",
              "Wazuh",
              "Snort",
              "Volatility",
              "Redline",
              "Autopsy",
              "pfSense",
              "Wireshark",
              "TCPDump",
            ].map((tool) => (
              <span
                key={tool}
                className="px-3 py-1 text-xs md:text-sm rounded-full bg-slate-800/50 text-cyan-300 border border-cyan-700/50"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Support Stack */}
        <div>
          <h3 className="font-semibold text-slate-200 mb-4">
            Support Stack & Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Jira",
              "ServiceNow",
              "Salesforce CRM",
              "SharePoint",
              "Confluence",
              "Notion",
              "PowerShell",
              "Bash",
              "Python",
              "Windows",
              "macOS",
              "Linux (Ubuntu, Kali)",
              "GlobalProtect VPN",
              "Intuit Diagnostic Suite",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1 text-xs md:text-sm rounded-full bg-slate-800/50 text-slate-300 border border-slate-700"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
