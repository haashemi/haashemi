interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section = ({ title, children }: SectionProps) => (
  <div className="flex flex-col gap-5">
    <div className="sticky top-0 z-10 flex w-full items-center gap-2 bg-gradient-to-b from-zinc-950 via-zinc-950 to-transparent py-2">
      <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-zinc-700" />
      <h2 className="text-center text-xl font-light text-zinc-500">{title}</h2>
      <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-zinc-700" />
    </div>

    {children}
  </div>
);
