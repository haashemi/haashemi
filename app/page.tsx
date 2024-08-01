import { useTranslations } from "next-intl";
import { FaGithub, FaTelegram } from "react-icons/fa";

import Section from "@/app/_components/Section";

import { BlogPostCard, ProjectCard } from "./_components/Card";

const ProfilePage = () => {
  const t = useTranslations("Home");

  return (
    <div className="flex flex-col gap-12 p-3 py-16">
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
          bgClass="bg-blue-600"
          textClass="group-hover:text-blue-400"
          url="/projects/tgo"
          urls={[
            { icon: <FaGithub size={24} />, url: "https://github.com/haashemi/tgo" },
            { icon: <FaTelegram size={24} />, url: "https://t.me/HaashemiDev" },
          ]}
        />
        <ProjectCard
          title="Writer"
          desc="A simple and easy to use Go library to write texts on images with the help of harfbuzz."
          bgClass="bg-purple-600"
          textClass="group-hover:text-purple-400"
          url="/projects/writer"
          urls={[
            { icon: <FaGithub size={24} />, url: "https://github.com/haashemi/writer" },
            { icon: <FaTelegram size={24} />, url: "https://t.me/HaashemiDev" },
          ]}
        />
        <ProjectCard
          title="Painter"
          desc="A simple library to help you to draw on RGBA images more easily."
          bgClass="bg-teal-600"
          textClass="group-hover:text-teal-400"
          url="/projects/painter"
          urls={[
            { icon: <FaGithub size={24} />, url: "https://github.com/haashemi/painter" },
            { icon: <FaTelegram size={24} />, url: "https://t.me/HaashemiDev" },
          ]}
        />
      </Section>

      <Section isGrid title={t("blogPostsTitle")} desc={t("blogPostsDesc")}>
        <BlogPostCard id={3} title="The bug I found in Golang's stdlib for the first-time!" publishedAt="18/05/2024" />
        <BlogPostCard
          id={2}
          title="Introducing Writer. Easiest way to write text on images in Go!"
          publishedAt="23/03/2024"
        />
        <BlogPostCard id={1} title="Painter now supports all type of gradients!" publishedAt="01/11/2023" />
      </Section>

      <Section title={t("experiencesTitle")} desc={t("experiencesDesc")}>
        <div>TODO:</div>
      </Section>
    </div>
  );
};

export default ProfilePage;
