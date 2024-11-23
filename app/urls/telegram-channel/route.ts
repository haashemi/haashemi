import { config } from "@/app/_lib/config.server";

export function GET(_: Request) {
  return Response.redirect(config.get("urls.telegramChannel"), 301);
}
