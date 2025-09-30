import { site } from "@/config/site";

export function GET() {
  return Response.redirect(site.urls.telegram, 307);
}
