const urls: Record<string, string> = {
  telegram: "https://t.me/HaashemiDev",
};

export const site = {
  url: "https://haashemi.dev",
  title: "Ali Hashemi",
  description: "Welcome to my website!",

  team: {
    name: "Rabits Labs",
    url: "https://rabits.dev",
  },

  urls,

  socials: [
    { icon: "github", value: "haashemi", url: "https://github.com/haashemi" },
    { icon: "telegram", value: "Byfron", url: "https://t.me/Byfron" },
  ],

  techStack: [
    { title: "Go", icon: "go" },
    { title: "TypeScript", icon: "typescript" },
  ],

  clients: [
    {
      title: "Bazitory",
      url: { title: "bazitory.com", href: "https://bazitory.com" },
    },
    {
      title: "Epic-Center",
      url: { title: "epic-center.ir", href: "https://epic-center.ir" },
    },
    {
      title: "Revine",
      url: { title: "revine.ir", href: "https://revine.ir" },
    },
  ],

  projects: [
    {
      state: "on-hold",
      title: "HXLab",
      url: { title: "hxlab.ir", href: "https://hxlab.ir" },
    },
    {
      state: "active",
      title: "GirlyEvents",
      url: { title: "girlyevents.ir", href: "https://girlyevents.ir" },
    },
    {
      state: "active",
      title: "ClownCounter",
      url: { title: "tg:@clowncounterbot", href: "https://t.me/ClownCounterBot" },
    },
    {
      state: "on-hold",
      title: "Markdown Editor",
      url: { title: "mde.haashemi.dev", href: "https://mde.haashemi.dev" },
    },
    {
      state: "on-hold",
      title: "TGO",
      url: { title: "gh:haashemi/tgo", href: "https://github.com/haashemi/tgo" },
    },
    {
      state: "on-hold",
      title: "mypac",
      url: { title: "gh:haashemi/mypac", href: "https://github.com/haashemi/mypac" },
    },
    {
      state: "stopped",
      title: "Writer",
      url: { title: "gh:haashemi/writer", href: "https://github.com/haashemi/writer" },
    },
    {
      state: "stopped",
      title: "Painter",
      url: { title: "gh:haashemi/painter", href: "https://github.com/haashemi/painter" },
    },
  ],
} as const;
