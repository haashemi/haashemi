<template>
  <div class="min-h-screen bg-black font-sans">
    <header class="sticky top-0 z-40 h-20 border-b border-zinc-900 bg-black/30 backdrop-blur-sm">
      <nav class="container mx-auto flex h-full items-center justify-between px-3">
        <a href="/" class="text-xl font-bold">HASHEMI</a>
        <ul class="flex flex-1 justify-end gap-3">
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>

    <slot />
  </div>
</template>
