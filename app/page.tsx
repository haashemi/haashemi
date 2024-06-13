'use client';
import { SiGithub, SiMaildotru, SiTelegram } from 'react-icons/si';

import { AuroraBackground } from '@/components/ui/aurora-background';
import { cn } from '@/lib/utils';

const data = {
  skills: [
    {
      name: 'Golang',
      style: 'hover:shadow-[0_0_30px_3px_#00ADD8d9] hover:bg-[#00ADD8]',
    },
    {
      name: 'JS/TS',
      style:
        'hover:text-black hover:shadow-[0_0_30px_3px_#F7DF1Ed9] hover:bg-[#F7DF1E]',
    },
    {
      name: 'PostgreSQL',
      style: 'hover:shadow-[0_0_30px_3px_#4169E1d9] hover:bg-[#4169E1]',
    },
    {
      name: 'SQLite',
      style: 'hover:shadow-[0_0_30px_3px_#003B57d9] hover:bg-[#003B57]',
    },
    {
      name: 'Badger',
      style: 'hover:shadow-[0_0_30px_3px_#E50695d9] hover:bg-[#E50695]',
    },
    {
      name: 'Redis',
      style: 'hover:shadow-[0_0_30px_3px_#DC382Dd9] hover:bg-[#DC382D]',
    },
    {
      name: 'Gin',
      style: 'hover:shadow-[0_0_30px_3px_#00ADD8d9] hover:bg-[#00ADD8]',
    },
    {
      name: 'Iris',
      style: 'hover:shadow-[0_0_30px_3px_#00ADD8d9] hover:bg-[#00ADD8]',
    },
    {
      name: 'Next.JS',
      style: 'hover:shadow-[0_0_30px_3px_#000000d9] hover:bg-[#000000]',
    },
    {
      name: 'React',
      style:
        'hover:text-black hover:shadow-[0_0_30px_3px_#61DAFBd9] hover:bg-[#61DAFB]',
    },
    {
      name: 'Svelte',
      style: 'hover:shadow-[0_0_30px_3px_#FF3E00d9] hover:bg-[#FF3E00]',
    },
    {
      name: 'TailwindCSS',
      style: 'hover:shadow-[0_0_30px_3px_#06B6D4d9] hover:bg-[#06B6D4]',
    },
    {
      name: 'Git',
      style: 'hover:shadow-[0_0_30px_3px_#F05032d9] hover:bg-[#F05032]',
    },
    {
      name: 'Docker',
      style: 'hover:shadow-[0_0_30px_3px_#2496EDd9] hover:bg-[#2496ED]',
    },
    {
      name: 'OpenTelemetry',
      style: 'hover:shadow-[0_0_30px_3px_#000000d9] hover:bg-[#000000]',
    },
    {
      name: 'Nginx',
      style: 'hover:shadow-[0_0_30px_3px_#009639d9] hover:bg-[#009639]',
    },
  ],
};

const Section = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => (
  <div
    className={cn(
      'rounded-xl p-5 ring-1 ring-white/10 backdrop-blur-3xl',
      className,
    )}
  >
    {children}
  </div>
);

export default function Home() {
  return (
    <>
      <AuroraBackground />

      <div className="container relative mx-auto flex min-h-screen items-center justify-center p-3">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="grid grid-rows-2 gap-3">
            <Section>
              <p className="pl-2 indent-4">
                {"I'm Ali Hashemi."} A Junior back-end developer with{' '}
                <strong>3+ years</strong> of experience, including 1+ years of
                professional experience using Golang. Proficient in developing
                and maintaining high-performance, stable, and reliable web
                applications. Also interested in front-end development using
                modern web frameworks like Svelte and React.
              </p>
            </Section>

            <Section className="flex flex-wrap gap-3">
              {data.skills.map((skill) => (
                <p
                  key={skill.name}
                  className={`select-none rounded-full bg-white/20 px-3 py-1 font-medium transition-all hover:-translate-y-1 ${skill.style}`}
                >
                  {skill.name}
                </p>
              ))}
            </Section>
          </div>

          {/* <Section>Top Projects</Section> */}

          {/* <Section>Last Works</Section> */}

          <Section className="flex flex-col gap-5 ">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold italic">Get in touch!</h3>
            </div>

            <div className="flex grow flex-col justify-around gap-3">
              <a
                className="group relative z-10 overflow-hidden rounded-3xl border border-zinc-900 p-5"
                href="mailto:contact@haashemi.dev"
              >
                <div className="flex items-center gap-3 font-mono text-base md:text-xl">
                  <SiMaildotru color="white" size={28} />
                  <p className="whitespace-nowrap">contact@haashemi.dev</p>
                </div>
                <div
                  id="mail-background"
                  className="absolute right-0 h-full w-3/5 rounded-full bg-violet-500/40 blur-3xl transition-all duration-500 ease-in-out group-hover:right-1/2"
                />
              </a>

              <a
                className="group relative z-10 overflow-hidden rounded-3xl border border-zinc-900 p-5"
                href="https://t.me/Byfron"
              >
                <div className="flex items-center gap-3 font-mono text-base md:text-xl">
                  <SiTelegram color="white" size={28} />
                  <p className="whitespace-nowrap">@Byfron</p>
                </div>
                <div
                  id="telegram-background"
                  className="absolute left-0 h-full w-3/5 rounded-full bg-blue-500/40 blur-3xl transition-all duration-500 ease-in-out group-hover:left-[50%]"
                />
              </a>

              <a
                className="group relative z-10 overflow-hidden rounded-3xl border border-zinc-900 p-5"
                href="https://github.com/haashemi"
              >
                <div className="flex items-center gap-3 font-mono text-base md:text-xl">
                  <SiGithub color="white" size={28} />
                  <p className="whitespace-nowrap">@haashemi</p>
                </div>
                <div
                  id="github-background"
                  className="absolute right-0 h-full w-3/5 rounded-full bg-zinc-500/40 blur-3xl transition-all duration-500 ease-in-out group-hover:right-1/2"
                />
              </a>
            </div>
          </Section>
        </div>
      </div>
    </>
  );
}
