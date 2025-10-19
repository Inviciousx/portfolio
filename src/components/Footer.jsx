export default function Footer() {
  return (
    <footer className="border-t border-gray-800/60 bg-black/40">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-slate-400">
        © {new Date().getFullYear()}  &gt; system.status: <span className="text-cyan-400">SECURE</span> | author: raziuddin.mohammed | stack: React_Tailwind
      </div>
    </footer>
  );
}
<p className="text-xs text-center text-slate-500 font-mono mt-8">
  &gt; system.status: <span className="text-cyan-400">SECURE</span> | author: raziuddin.mohammed | stack: React_Tailwind
</p>