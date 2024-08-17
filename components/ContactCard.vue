<script setup lang="ts">
defineProps<{
  user: string;
  url: string;
}>();
</script>

<template>
  <a
    :href="url"
    class="group flex aspect-video w-full flex-col items-center justify-center gap-5 rounded-xl border-2 border-zinc-900 bg-zinc-950 transition-all hover:border-zinc-950 hover:bg-zinc-900 focus:border-zinc-700 focus:bg-black sm:aspect-square"
  >
    <slot class="size-1/3 text-zinc-200 transition-colors group-hover:text-white" />
    <p class="text-zinc-100 transition-colors group-hover:text-white">{{ user }}</p>
  </a>
</template>
