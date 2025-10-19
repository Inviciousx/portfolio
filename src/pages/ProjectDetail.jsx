import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import networkImage from "../assets/Network_Architecture.png";

const projects = [
  {
    id: "enterprise-network",
    title: "Enterprise Multi-Campus Network Infrastructure",
    desc: "Designed a scalable, fault-tolerant network spanning 3 campuses with OSPF, HSRP, and QoS.",
    image: networkImage,
    year: "2024",
  },
  {
    id: "future-soc-lab",
    title: "Security Operations Lab (SOC-Level 1 Simulation)",
    desc: "In progress — building a simulated SIEM environment using Wazuh, Sysmon, and Zeek logs.",
    image: networkImage,
    year: "2025",
    details: [
      "Configuring Wazuh SIEM with Windows & Linux endpoints.",
      "Integrating Sysmon & Zeek for event correlation.",
      "Analyzing logs using MITRE ATT&CK mapping.",
      "Building dashboards and alerting workflows.",
    ],
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  return (
    <motion.section
      className="mx-auto max-w-6xl px-4 pt-10 pb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{
        duration: 0.45,
        ease: [0.4, 0, 0.2, 1],
        type: "tween",
      }}
    >
      {/* Header / Navigation */}
      <div className="mb-10 flex justify-between items-center">
        <Link to="/" className="text-cyan-400 hover:underline">
          ← Back to Home
        </Link>
        <span className="text-slate-400 text-sm">Project Viewer</span>
      </div>

      {/* Project switcher */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {projects.map((p) => (
          <Link
            key={p.id}
            to={`/projects/${p.id}`}
            className={`rounded-xl border transition p-5 ${
              p.id === id
                ? "border-cyan-500/70 bg-slate-900/60"
                : "border-slate-800 bg-slate-900/40 hover:bg-slate-900/60"
            }`}
          >
            <h3 className="text-lg font-semibold text-cyan-300">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-300/90">{p.desc}</p>
            <p className="mt-3 text-xs text-slate-500">Year: {p.year}</p>
          </Link>
        ))}
      </div>

      {/* Project Details */}
      {project ? (
        <>
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-300">
            {project.title}
          </h1>
          <p className="text-sm text-slate-400 mt-1 italic">
            Detailed overview of project execution and results.
          </p>

          <img
            src={project.image}
            alt={project.title}
            className="mt-6 rounded-lg border border-slate-800"
          />

          {/* ===== ENTERPRISE NETWORK FULL DETAILS ===== */}
          {project.id === "enterprise-network" ? (
            <div className="mt-10 text-slate-300 leading-relaxed space-y-8">
              <div>
                <h2 className="text-xl text-cyan-400 font-semibold mb-2">
                  Project Scope
                </h2>
                <p>
                  Led the design and implementation of a fault-tolerant,
                  enterprise-grade network infrastructure spanning three
                  university campuses (Toronto, Mississauga, Hamilton),
                  supporting 2,000+ users with 99.9% uptime requirements.
                </p>
              </div>

              <div>
                <h2 className="text-xl text-cyan-400 font-semibold mb-2">
                  Technical Architecture
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Core Network Design:</strong> Hierarchical 3-tier
                    architecture (Core, Distribution, Access), dual-router
                    redundancy per campus, 24 access switches (Catalyst 2960),
                    and 6 multilayer switches (3560/9300) with OSPF multi-area
                    design.
                  </li>
                  <li>
                    <strong>High Availability Features:</strong> HSRP, LACP
                    EtherChannel (4Gbps), dual WAN OSPF load balancing, and STP
                    with PortFast & BPDU Guard.
                  </li>
                  <li>
                    <strong>Network Segmentation:</strong> 21 VLANs across 3
                    sites (students, faculty, guest, IoT, VoIP) with ACL-based
                    inter-VLAN routing and QoS.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl text-cyan-400 font-semibold mb-2">
                  Services & Applications Deployed
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    <strong>Centralized Identity & Infrastructure:</strong>{" "}
                    Active Directory Domain Services, DHCP, DNS, IIS Web Server,
                    Ubuntu Mail Server (Roundcube), and secure FTP.
                  </li>
                  <li>
                    <strong>Unified Communications:</strong> Cisco VoIP System
                    with dedicated VLAN, Call Manager, and QoS WAN policies.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl text-cyan-400 font-semibold mb-2">
                  Security Implementation
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>
                    VLAN-based segmentation by department and user role.
                  </li>
                  <li>ACLs, Port Security, BPDU Guard, DHCP Snooping.</li>
                  <li>
                    Windows Firewall, 802.1X (planned), and host-level
                    protection.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl text-cyan-400 font-semibold mb-2">
                  Network Management & Monitoring
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>OSPF adjacency and routing monitoring.</li>
                  <li>SNMP v3 for performance tracking.</li>
                  <li>Syslog centralized logging and analysis.</li>
                  <li>Configuration backups and documentation.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl text-cyan-400 font-semibold mb-2">
                  Testing & Validation
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>End-to-end connectivity and failover tests.</li>
                  <li>HSRP and OSPF validation and performance tuning.</li>
                  <li>
                    Verified DHCP leases, email, VoIP, and web access across
                    VLANs.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl text-cyan-400 font-semibold mb-2">
                  Project Management
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>8-week timeline (Feb–Apr 2024), delivered under $276K.</li>
                  <li>Coordinated 4-person team and documentation handoff.</li>
                  <li>
                    Provided SOPs, runbooks, and configuration archives for IT
                    staff.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl text-cyan-400 font-semibold mb-2">
                  Key Achievements
                </h2>
                <ul className="list-disc list-inside space-y-1">
                  <li>✅ Zero downtime during phased rollout.</li>
                  <li>✅ 99.9% availability through redundancy.</li>
                  <li>✅ 40% reduction in administrative overhead.</li>
                  <li>✅ Scalable design for future expansion.</li>
                  <li>
                    ✅ Comprehensive documentation ensured smooth transition.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl text-cyan-400 font-semibold mb-2">
                  Technologies & Protocols
                </h2>
                <p className="text-slate-400 text-sm">
                  Cisco IOS, OSPF, HSRP, LACP/EtherChannel, VLANs, 802.1Q,
                  Inter-VLAN Routing, DHCP Relay, AD DS, DNS/DHCP, Windows
                  Server 2019, Ubuntu Server, IIS, VoIP/QoS, STP, Port Security,
                  ACLs, SNMP, Syslog, Project Management.
                </p>
              </div>
            </div>
          ) : (
            /* Default short details for other projects */
            <div className="mt-8 text-slate-300 space-y-3">
              {project.details?.map((point, i) => (
                <li key={i} className="ml-4 list-disc text-sm leading-relaxed">
                  {point}
                </li>
              ))}
            </div>
          )}

          {/* Download Link */}
          <div className="mt-10">
            <a
              href="/Enterprise_Network_Project.pdf"
              target="_blank"
              className="inline-block rounded-lg border border-cyan-600/50 px-4 py-2 text-cyan-300 hover:bg-cyan-600/10 transition-colors"
            >
              View Full Project Report (PDF)
            </a>
          </div>
        </>
      ) : (
        <div className="text-center text-slate-400 mt-20">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
            Project not found
          </h2>
          <Link to="/" className="text-cyan-300 hover:underline">
            ← Back to Home
          </Link>
        </div>
      )}
    </motion.section>
  );
}
