import type { ReactNode } from "react";

interface HomeSectionProps {
  title: string;
  desc: string;
  isGrid?: boolean;
  children: ReactNode;
}

export const HomeSection = ({ title, desc, isGrid, children }: HomeSectionProps) => (
  <div id={title} className="flex flex-col gap-5">
    <div className="flex flex-col gap-3">
      <h2 className="text-4xl font-semibold">{title}</h2>
      <p className="text-zinc-400">{desc}</p>
    </div>

    {isGrid ? <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{children}</div> : children}
  </div>
);
