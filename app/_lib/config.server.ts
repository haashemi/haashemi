import { Config } from "@fullstacksjs/config";

const schema = new Config({
  appHost: Config.string().required(),
  urls: Config.object({
    telegramChannel: Config.string().required(),
  }),
});

export const config = schema.parse({
  appHost: process.env["WEB_APP_HOST"],
  urls: {
    telegramChannel: process.env["URL_TELEGRAM_CHANNEL"],
  },
});
