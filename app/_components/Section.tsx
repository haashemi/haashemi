interface SectionProps {
  title: string;
  desc: string;
  isGrid?: boolean;
  children: React.ReactNode;
}

const Section = ({ title, desc, isGrid, children }: SectionProps) => (
  <div id={title} className="flex flex-col gap-5">
    <div className="flex flex-col gap-3">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <p className="text-zinc-400">{desc}</p>
    </div>

    {isGrid ? <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{children}</div> : children}
  </div>
);

export default Section;
