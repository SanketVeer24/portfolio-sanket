type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <header className="mb-8 space-y-2">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold text-slate-50">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-xl text-sm text-slate-400">
          {subtitle}
        </p>
      )}
    </header>
  );
}
