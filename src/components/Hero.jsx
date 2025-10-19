import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-18 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold leading-tight"
          >
            Technical Support Analyst <span className="text-cyan-400">|</span>{" "}
            <span className="text-cyan-400">Cybersecurity Enthusiast</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="mt-4 text-slate-300/90 max-w-xl"
          >
            I keep systems running reliably while building toward a career in
            cyber defense and monitoring.
          </motion.p>

          <blockquote className="mt-8 text-lg md:text-xl font-medium italic text-cyan-300 border-l-4 border-cyan-500/60 pl-4 leading-relaxed tracking-wide">
            “My red team is curiosity. My blue team is discipline. Logs don't
            lie, attackers do—and I'm training myself to see through both.”
          </blockquote>


          <div className="mt-8 flex gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-500/20 px-4 py-2 text-cyan-300 hover:bg-cyan-500/30"
            >
              View Projects
            </a>
            <a
              href="#resume"
              className="rounded-lg border border-cyan-600/50 px-4 py-2 text-cyan-300 hover:bg-cyan-600/10"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Photo placeholder */}
        <div className="h-64 md:h-80 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-800 shadow-inner flex items-center justify-center">
          <span className="text-slate-500 text-sm">
            Your photo comes here (placeholder)
          </span>
        </div>
      </div>
    </section>
  );
}
