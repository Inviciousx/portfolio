export default function Certifications() {
  const active = [
    {
      name: "Cisco Certified Network Associate (CCNA)",
      details: "Issued July 2024 – Expires July 2027",
    },
    {
      name: "CompTIA Security+",
      details: "Issued January 2025 – Expires January 2028",
    },
    {
      name: "Microsoft Azure Fundamentals (AZ-900)",
      details: "Issued December 2024 – Does not expire",
    },
  ];

  const inProgress = [
    {
      name: "CompTIA CySA+ (Cybersecurity Analyst)",
      details: "In progress – Expected completion: November 2025",
    },
    {
      name: "TryHackMe SOC Level 1",
      details: "In progress – Defensive monitoring labs ongoing",
    },
  ];

  return (
    <section id="certs" className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Certifications <span className="text-cyan-400">& Training</span>
        </h2>

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
            <h3 className="text-cyan-300 font-medium text-lg">Active</h3>
            <ul className="mt-3 space-y-3 text-slate-300/90">
              {active.map((c) => (
                <li key={c.name} className="flex flex-col">
                  <span className="font-medium">{c.name}</span>
                  <span className="text-xs text-slate-400">{c.details}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
            <h3 className="text-cyan-300 font-medium text-lg">In Progress</h3>
            <ul className="mt-3 space-y-3 text-slate-300/90">
              {inProgress.map((c) => (
                <li key={c.name} className="flex flex-col">
                  <span className="font-medium">{c.name}</span>
                  <span className="text-xs text-slate-400">{c.details}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-5 text-xs text-slate-500">
          * All certifications verified through respective credential IDs and issuers.
        </p>
      </div>
    </section>
  );
}
