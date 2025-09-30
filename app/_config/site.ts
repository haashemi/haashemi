import { FaAt, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";

export const site = {
  url: "https://haashemi.dev",
  title: "Ali Hashemi",
  description: "Welcome to my website!",

  urls: {
    telegram: "https://t.me/HaashemiDev",
  },

  socials: [
    { Icon: FaAt, value: "contact@haashemi.dev", url: "mailto:contact@haashemi.dev" },
    { Icon: FaLinkedin, value: "in/haashemi", url: "https://www.linkedin.com/in/haashemi" },
    { Icon: FaGithub, value: "haashemi", url: "https://github.com/haashemi" },
    { Icon: FaTelegram, value: "Byfron", url: "https://t.me/Byfron" },
  ],
} as const;
