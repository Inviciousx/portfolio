import { Link } from "react-router-dom";

export default function Projects() {
  const projects = [
    {
      id: "enterprise-network",
      title: "Enterprise Multi-Campus Network Infrastructure",
      desc: "Designed a scalable, fault-tolerant network spanning 3 campuses with OSPF, HSRP, and QoS.",
      year: "2024",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Projects <span className="text-cyan-400">& Case Studies</span>
        </h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Link
              key={p.id}
              to={`/projects/${p.id}`}
              className="rounded-xl border border-slate-800 bg-slate-900/40 hover:bg-slate-900/60 transition p-6 block"
            >
              <h3 className="text-xl font-semibold text-cyan-300">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300/90">{p.desc}</p>
              <p className="mt-3 text-xs text-slate-500">Year: {p.year}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
