import type { APIRoute } from "astro";

import { TELEGRAM_CHANNEL } from "@hx/consts";

export const GET: APIRoute = ({ redirect }) => {
  return redirect(TELEGRAM_CHANNEL, 307);
};
