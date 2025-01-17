import type { APIRoute } from "astro";

const sitemapUrl = new URL("sitemap-index.xml", import.meta.env.SITE).href;

const robotsTxt = `
User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`.trim();

export const GET: APIRoute = () => new Response(robotsTxt);
