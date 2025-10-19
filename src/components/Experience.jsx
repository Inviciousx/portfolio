import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const jobs = [
  {
    company: "Concentrix (Intuit QuickBooks Online)",
    role: "Technical Support Analyst",
    location: "Belleville, ON",
    period: "Apr 2025 – Present",
    summary: [
      "Delivered SaaS and network support through structured case management and root-cause analysis.",
      "Maintained 90%+ CSAT and SLA compliance with strong technical troubleshooting and documentation.",
    ],
    details: [
      "Diagnosed account, API, and connectivity issues leveraging Salesforce CRM and SharePoint KB.",
      "Performed secure remote access via Palo Alto GlobalProtect VPN for diagnostic and configuration tasks.",
      "Authored troubleshooting documentation improving response efficiency and knowledge sharing.",
    ],
    keySkills: [
      "SaaS Platform Support",
      "Windows & Network Troubleshooting",
      "Root Cause Analysis",
      "VPN Access (Palo Alto GlobalProtect)",
      "Salesforce CRM",
    ],
    moreSkills: [
      "API Troubleshooting",
      "Case Management",
      "Quality Assurance",
      "SharePoint KB Maintenance",
      "Cloud SaaS Integration",
    ],
  },
  {
    company: "Sound Marketing Inc.",
    role: "Technical Support Analyst",
    location: "Pickering, ON",
    period: "Jan 2024 – Aug 2024",
    summary: [
      "Resolved hardware, software, and network incidents with a focus on uptime and service continuity.",
      "Achieved 85% first-contact resolution by prioritizing tickets and applying remote triage techniques.",
    ],
    details: [
      "Deployed and maintained 20+ Windows 10/11 endpoints using SCCM.",
      "Created Confluence knowledge base entries reducing average resolution time by 30%.",
      "Collaborated cross-functionally via Jira, Teams, and Slack for escalations and root cause tracking.",
    ],
    keySkills: [
      "Remote Troubleshooting",
      "Endpoint Deployment",
      "Jira (ITSM)",
      "SCCM Administration",
      "Windows 10/11",
    ],
    moreSkills: [
      "Process Improvement",
      "Confluence KB",
      "Team Collaboration",
      "Ticket Prioritization",
    ],
  },
  {
    company: "KhudraSoft",
    role: "IT Help Desk Support",
    location: "Hyderabad, India",
    period: "Jan 2022 – Dec 2022",
    summary: [
      "Handled first-line ticket triage and resolution, ensuring SLA adherence across high-volume requests.",
      "Configured and deployed systems, reducing recurring network incidents and downtime.",
    ],
    details: [
      "Troubleshot Windows, network, and peripheral issues while documenting fixes for team reuse.",
      "Enhanced overall response efficiency by improving documentation and process flow.",
    ],
    keySkills: [
      "SLA Management",
      "Network Troubleshooting",
      "Windows Administration",
      "ServiceNow (ITSM)",
    ],
    moreSkills: [
      "Documentation",
      "Workstation Imaging",
      "Escalation Procedures",
    ],
  },
  {
    company: "Pantech E-Learning",
    role: "Technical Support Intern",
    location: "Hyderabad, India",
    period: "Jun 2021 – Nov 2021",
    summary: [
      "Supported LMS operations and resolved technical issues for end-users and administrators.",
      "Automated tasks with Python scripts improving efficiency by 15%.",
    ],
    details: [
      "Performed software installation, network troubleshooting, and LMS configuration maintenance.",
      "Used Jira for issue tracking and reporting recurring incidents to developers.",
    ],
    keySkills: [
      "LMS Support",
      "Python Automation",
      "Troubleshooting",
      "Jira (Issue Tracking)",
    ],
    moreSkills: [
      "Process Optimization",
      "Network Diagnostics",
      "System Maintenance",
    ],
  },
];

export default function Experience() {
  const [expanded, setExpanded] = useState(null);
  const toggleExpand = (index) =>
    setExpanded(expanded === index ? null : index);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold text-slate-200 mb-6">
        Experience
      </h2>

      <div className="grid gap-6">
        {jobs.map((job, index) => (
          <motion.article
            key={index}
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`rounded-xl border ${
              expanded === index ? "border-cyan-600/50" : "border-slate-800"
            } bg-slate-900/40 p-5 md:p-6 transition-all duration-300`}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <h3 className="text-lg md:text-xl font-semibold text-slate-100">
                {job.role}{" "}
                <span className="text-slate-400">· {job.company}</span>
              </h3>
              <div className="text-sm text-slate-400">
                {job.period} • {job.location}
              </div>
            </div>

            {/* Summary */}
            <ul className="mt-4 text-slate-300 space-y-2 list-disc list-inside">
              {job.summary.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>

            {/* Key Skills */}
            <div className="mt-4 flex flex-wrap gap-2">
              {job.keySkills.map((skill, i) => (
                <span
                  key={i}
                  className="text-xs px-2 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Expand Button */}
            <div className="mt-4 flex justify-end">
              <button
                onClick={() => toggleExpand(index)}
                className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition text-sm hover:underline underline-offset-4 decoration-cyan-400/40"
              >
                {expanded === index ? (
                  <>
                    Show Less
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 15l7-7 7 7"
                      />
                    </svg>
                  </>
                ) : (
                  <>
                    View More
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>

            {/* Expanded Section */}
            <AnimatePresence initial={false}>
              {expanded === index && (
                <motion.div
                  key="details"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="mt-3"
                >
                  <ul className="text-slate-400 space-y-2 list-disc list-inside">
                    {job.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>

                  {/* Additional Skills */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.moreSkills.map((s, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-600/40 text-cyan-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
