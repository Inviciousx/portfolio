export default function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold text-slate-200 mb-6">
        Resume <span className="text-cyan-400">Preview</span>
      </h2>

      {/* Responsive container */}
      <div className="relative border border-slate-800 rounded-lg overflow-hidden bg-slate-900/40">
        <iframe
          src="/Raziuddin_Mohammed_Resume.pdf#view=FitH"
          title="Resume PDF"
          className="w-full h-[90vh]"  // 👈 taller + full width view
          style={{
            border: "none",
            overflow: "hidden",
          }}
        ></iframe>
      </div>

      {/* Download button */}
      <div className="flex justify-end mt-4">
        <a
          href="/Raziuddin_Mohammed_Resume.pdf"
          download
          className="inline-flex items-center gap-2 border border-cyan-600/50 text-cyan-300 px-4 py-2 rounded-md hover:bg-cyan-600/10 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.8"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-9 0V3m0 13.5l-3.75-3.75m3.75 3.75l3.75-3.75"
            />
          </svg>
          Download
        </a>
      </div>
    </section>
  );
}
