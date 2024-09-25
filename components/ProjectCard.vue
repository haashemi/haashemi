<script setup lang="ts">
import { cn } from "~/utils/cn";

defineProps<{
  title: string;
  desc: string;
  url: string;
  repoUrl: string;
  bgClass: string;
  textClass: string;
}>();
</script>

<template>
  <div class="group flex aspect-[5/4] size-full flex-col gap-3 overflow-hidden rounded-xl bg-zinc-900">
    <!-- Project name section -->
    <SiteLink
      :href="url"
      class="relative flex aspect-[19/9] w-full items-center justify-center overflow-hidden bg-zinc-950"
    >
      <div
        :class="
          cn(
            `absolute size-full -translate-y-1/2 rounded-full opacity-20 blur-3xl transition-all group-hover:translate-y-0`,
            bgClass,
          )
        "
      />

      <h2 :class="cn(`select-none text-5xl font-semibold text-zinc-100 transition-colors xl:text-6xl`, textClass)">
        {{ title }}
      </h2>
    </SiteLink>
    <!-- About project section -->
    <div class="flex flex-1 flex-col justify-between gap-3 px-5 pb-3">
      <p class="line-clamp-2 text-sm text-zinc-300 xl:text-base">{{ desc }}</p>

      <div class="flex items-center justify-between">
        <div class="flex gap-2">
          <a
            :href="repoUrl"
            :aria-label="`Open ${title} GitHub repository`"
            class="flex items-center justify-center rounded-xl border border-zinc-700 p-2 transition-colors hover:bg-zinc-700"
          >
            <Icon name="fa6-brands:github" class="size-5 xl:size-6" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
