<script setup lang="ts">
defineProps<{
  title: string;
  desc: string;
  isGrid?: boolean;
}>();
</script>

<template>
  <div :id="title" class="flex flex-col gap-5">
    <div class="flex flex-col gap-3">
      <h2 class="text-4xl font-semibold">{{ title }}</h2>
      <p class="text-zinc-400">{{ desc }}</p>
    </div>

    <div v-if="isGrid" class="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"><slot /></div>
    <slot v-else />
  </div>
</template>
