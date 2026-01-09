export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-4 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-[11px] text-slate-400 md:flex-row">
        <p>
          © {new Date().getFullYear()} Sanket Veer. All rights reserved.
        </p>
        <p className="text-[11px]">
          Systems that scale · Enterprise impact · Emerging technology leader.
        </p>
      </div>
    </footer>
  );
}
