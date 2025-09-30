interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex w-full items-center gap-2 bg-zinc-950 py-2">
        <h2 className="text-center text-xl font-light text-zinc-500">{title}</h2>
        <span className="h-[1px] flex-1 bg-zinc-700"></span>
      </div>

      {children}
    </div>
  );
}
