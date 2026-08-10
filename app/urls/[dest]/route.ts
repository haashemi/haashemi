import type { NextRequest } from "next/server";

import { notFound } from "next/navigation";

import { site } from "@/config/site";

interface Route {
  params: Promise<{ dest: string }>;
}

export async function GET(_: NextRequest, { params }: Route) {
  const { dest } = await params;

  const targetUrl = site.urls[dest];

  if (!targetUrl) return notFound();

  return Response.redirect(targetUrl, 307);
}
