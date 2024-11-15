import { URL_TELEGRAM_CHANNEL } from "@/app/_lib/config.server";

export function GET(_: Request) {
  return Response.redirect(URL_TELEGRAM_CHANNEL, 301);
}
