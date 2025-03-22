import { TELEGRAM_CHANNEL } from "@hx/lib/constants";

export function GET() {
  return Response.redirect(TELEGRAM_CHANNEL, 307);
}
