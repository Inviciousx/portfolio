import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// worker setup
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js`;

export default function Resume() {
  const [interactive, setInteractive] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const resumePath = `${import.meta.env.BASE_URL}Raziuddin_Mohammed_Resume.pdf`;

  const onLoadSuccess = ({ numPages }) => setNumPages(numPages);

  return (
    <section id="resume" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-2xl font-semibold text-slate-200 mb-6">
        Resume <span className="text-cyan-400">Preview</span>
      </h2>

      <div
        className="relative border border-slate-800 rounded-lg bg-slate-900/40 overflow-hidden flex justify-center"
        onClick={() => setInteractive(true)}
      >
        {!interactive && (
          <div
            className="absolute inset-0 z-10 bg-transparent cursor-pointer"
            title="Click to activate scrolling"
          />
        )}

        <div
          className={`overflow-y-auto transition-all duration-300 w-full max-h-[90vh] ${
            interactive ? "pointer-events-auto" : "pointer-events-none"
          }`}
        >
          <Document
            file={resumePath}
            onLoadSuccess={onLoadSuccess}
            loading={<div className="text-slate-400 p-4">Loading resume...</div>}
            className="flex flex-col items-center"
          >
            {Array.from(new Array(numPages), (_, i) => (
              <Page
                key={`page_${i + 1}`}
                pageNumber={i + 1}
                width={window.innerWidth < 768 ? 340 : 700}
                renderAnnotationLayer={false}
                renderTextLayer={false}
                className="my-2 shadow-md"
              />
            ))}
          </Document>
        </div>
      </div>

      <div className="flex justify-end mt-4">
        <a
          href={resumePath}
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
