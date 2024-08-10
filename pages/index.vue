<script setup lang="ts">
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram, FaTwitter, MdEmailOutlined } from "oh-vue-icons/icons";
</script>

<template>
  <main class="container mx-auto flex flex-col gap-12 p-3 py-16">
    <div class="flex min-h-[50vh] flex-col justify-center gap-10">
      <div class="flex flex-col">
        <h2 class="ml-6 text-2xl font-bold opacity-70">Golang</h2>
        <h1 class="text-6xl font-bold">Backend Developer</h1>
      </div>

      <p class="max-w-prose text-pretty">
        Hi! I'm Ali Hashemi. An experienced Golang back-end developer. Proficient in developing and maintaining
        high-performance, stable, and reliable web applications. Passionate in developing framework and libraries.
      </p>
    </div>

    <HomeSection is-grid title="Projects" desc="Top 3 projects I'm maintaining">
      <ProjectCard
        title="TGO"
        desc="A powerful Telegram Bot framework with all features you need!"
        url="/projects/tgo"
        repo-url="https://github.com/haashemi/tgo"
        bg-class="bg-blue-600"
        text-class="group-hover:text-blue-400"
      />
      <ProjectCard
        title="Writer"
        bg-class="bg-purple-600"
        desc="A simple and easy to use Go library to write texts on images with the help of harfbuzz."
        repo-url="https://github.com/haashemi/writer"
        text-class="group-hover:text-purple-400"
        url="/projects/writer"
      />
      <ProjectCard
        title="Painter"
        bg-class="bg-teal-600"
        desc="A simple library to help you to draw on RGBA images more easily."
        repo-url="https://github.com/haashemi/painter"
        text-class="group-hover:text-teal-400"
        url="/projects/painter"
      />
    </HomeSection>

    <HomeSection title="Contact" desc="Let's keep in touch!">
      <div
        class="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
      >
        <ContactCard
          :icon="MdEmailOutlined"
          aria-label="Send an email"
          user="contact@haashemi.dev"
          url="mailto:contact@haashemi.dev"
        />
        <ContactCard
          :icon="FaLinkedin"
          aria-label="Open LinkedIn profile"
          user="haashemi"
          url="https://www.linkedin.com/in/haashemi"
        />
        <ContactCard :icon="FaTelegram" aria-label="Open Telegram chat" user="Byfron" url="https://t.me/Byfron" />
        <ContactCard
          :icon="FaGithub"
          aria-label="Open GitHub profile"
          user="haashemi"
          url="https://github.com/haashemi"
        />
        <ContactCard
          :icon="FaTwitter"
          aria-label="Open X (formerly Twitter) profile"
          user="haashemi_dev"
          url="https://x.com/haashemi_dev"
        />
        <ContactCard
          :icon="FaInstagram"
          aria-label="Open Instagram profile"
          user="haashemi_dev"
          url="https://instagram.com/haashemi_dev"
        />
      </div>
    </HomeSection>
  </main>
</template>
