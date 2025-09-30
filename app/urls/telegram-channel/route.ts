import { TELEGRAM_CHANNEL } from "@/config/constants";

export function GET() {
  return Response.redirect(TELEGRAM_CHANNEL, 307);
}
