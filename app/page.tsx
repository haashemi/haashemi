import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";

import { ContactCard } from "./_components/contact-card";
import { HomeSection } from "./_components/home-section";
import { ProjectCard } from "./_components/project-card";

export default function Home() {
  return (
    <main className="container mx-auto flex flex-col gap-12 p-3 py-16">
      <div className="flex min-h-[50vh] flex-col justify-center gap-10">
        <div className="flex flex-col">
          <h2 className="ml-6 text-2xl font-semibold opacity-70">Golang</h2>
          <h1 className="text-6xl font-semibold">Backend Developer</h1>
        </div>

        <p className="max-w-prose text-pretty">
          {
            "Hi! I'm Ali Hashemi. An experienced Golang back-end developer. Proficient in developing and maintaining high-performance, stable, and reliable web applications. Passionate in developing framework and libraries."
          }
        </p>
      </div>

      <HomeSection isGrid title="Projects" desc="Top 3 projects I'm maintaining">
        <ProjectCard
          title="TGO"
          desc="A powerful Telegram Bot framework with all features you need!"
          url="/#Projects"
          repoUrl="https://github.com/haashemi/tgo"
          bgClassName="bg-blue-600"
          textClassName="group-hover:text-blue-400"
        />
        <ProjectCard
          title="Writer"
          desc="A simple and easy to use Go library to write texts on images with the help of harfbuzz."
          url="/#Projects"
          repoUrl="https://github.com/haashemi/writer"
          bgClassName="bg-purple-600"
          textClassName="group-hover:text-purple-400"
        />
        <ProjectCard
          title="Painter"
          desc="A simple library to help you to draw on RGBA images more easily."
          url="/#Projects"
          repoUrl="https://github.com/haashemi/painter"
          bgClassName="bg-teal-600"
          textClassName="group-hover:text-teal-400"
        />
      </HomeSection>

      <HomeSection title="Contact" desc="Let's keep in touch!">
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          <ContactCard
            aria-label="Send an email"
            url="mailto:contact@haashemi.dev"
            name="contact@haashemi.dev"
            Icon={FaEnvelope}
          />
          <ContactCard
            aria-label="Open LinkedIn profile"
            url="https://www.linkedin.com/in/haashemi"
            name="haashemi"
            Icon={FaLinkedin}
          />
          <ContactCard
            aria-label="Open GitHub profile"
            url="https://github.com/haashemi"
            name="haashemi"
            Icon={FaGithub}
          />
          <ContactCard aria-label="Open Telegram chat" url="https://t.me/Byfron" name="Byfron" Icon={FaTelegram} />
        </div>
      </HomeSection>
    </main>
  );
}
