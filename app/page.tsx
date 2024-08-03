import { useTranslations } from "next-intl";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

import Section from "@/app/_components/Section";

import { ContactCard, ProjectCard } from "./_components/Card";

const ProfilePage = () => {
  const t = useTranslations("Home");

  return (
    <main className="container mx-auto flex flex-col gap-12 p-3 py-16">
      <div className="flex min-h-[50vh] flex-col justify-center gap-10">
        <div className="flex flex-col">
          <h2 className="ml-6 text-2xl font-bold opacity-70">Golang</h2>
          <h1 className="text-6xl font-bold">{t("jobTitle")}</h1>
        </div>

        <p className="max-w-prose text-pretty">{t("about")}</p>
      </div>

      <Section isGrid title={t("projectsTitle")} desc={t("projectsDesc")}>
        <ProjectCard
          title="TGO"
          desc="A powerful Telegram Bot framework with all features you need!"
          url="/projects/tgo"
          repoUrl="https://github.com/haashemi/tgo"
          bgClass="bg-blue-600"
          textClass="group-hover:text-blue-400"
        />
        <ProjectCard
          title="Writer"
          bgClass="bg-purple-600"
          desc="A simple and easy to use Go library to write texts on images with the help of harfbuzz."
          repoUrl="https://github.com/haashemi/writer"
          textClass="group-hover:text-purple-400"
          url="/projects/writer"
        />
        <ProjectCard
          title="Painter"
          bgClass="bg-teal-600"
          desc="A simple library to help you to draw on RGBA images more easily."
          repoUrl="https://github.com/haashemi/painter"
          textClass="group-hover:text-teal-400"
          url="/projects/painter"
        />
      </Section>

      {/* TODO: */}
      {/* <Section isGrid title={t("blogPostsTitle")} desc={t("blogPostsDesc")}>
        <BlogPostCard id={3} title="The bug I found in Golang's stdlib for the first-time!" publishedAt="18/05/2024" />
        <BlogPostCard
          id={2}
          title="Introducing Writer. Easiest way to write text on images in Go!"
          publishedAt="23/03/2024"
        />
        <BlogPostCard id={1} title="Painter now supports all type of gradients!" publishedAt="01/11/2023" />
      </Section> */}

      {/* TODO: */}
      {/* <Section title={t("experiencesTitle")} desc={t("experiencesDesc")}>
        <div>TODO:</div>
      </Section> */}

      <Section title={t("contactTitle")} desc={t("contactDesc")}>
        <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          <ContactCard Icon={MdOutlineEmail} user="contact@haashemi.dev" url="mailto:contact@haashemi.dev" />
          <ContactCard Icon={FaLinkedin} user="haashemi" url="https://www.linkedin.com/in/haashemi" />
          <ContactCard Icon={FaTelegram} user="Byfron" url="https://t.me/Byfron" />
          <ContactCard Icon={FaGithub} user="haashemi" url="https://github.com/haashemi" />
          <ContactCard Icon={FaXTwitter} user="haashemi_dev" url="https://x.com/haashemi_dev" />
          <ContactCard Icon={FaInstagram} user="haashemi_dev" url="https://instagram.com/haashemi_dev" />
        </div>
      </Section>
    </main>
  );
};

export default ProfilePage;
