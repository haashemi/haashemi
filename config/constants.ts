import { FaAt, FaGithub, FaLinkedin, FaTelegram } from "react-icons/fa6";

export const SITE = {
  URL: "https://www.haashemi.dev",
  TITLE: "Ali Hashemi",
  DESCRIPTION: "Welcome to my website!",
} as const;

export const TELEGRAM_CHANNEL = "https://t.me/HaashemiDev";

export const socials = [
  { Icon: FaAt, value: "contact@haashemi.dev", url: "mailto:contact@haashemi.dev" },
  { Icon: FaLinkedin, value: "in/haashemi", url: "https://www.linkedin.com/in/haashemi" },
  { Icon: FaGithub, value: "haashemi", url: "https://github.com/haashemi" },
  { Icon: FaTelegram, value: "Byfron", url: "https://t.me/Byfron" },
] as const;
