<template>
  <header>
    <Logo />
    <button
      @click="isOpen = !isOpen"
      aria-controls="nav-dialog"
      :aria-expanded="isOpen"
    >
      Navigation
    </button>
    <dialog
      id="nav-dialog"
      aria-label="Navigation"
      :open="isOpen"
      @close="isOpen = false"
      @click.self="isOpen = false"
    >
      <Navigation class="header" />
    </dialog>
  </header>
</template>

<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import Navigation from "@/components/Navigation.vue";
import { ref } from "vue";

const isOpen = ref(false);
</script>

<style scoped>
header {
  background: var(--color-base);
  justify-content: space-between;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  height: var(--appbar-height);
}

dialog {
  background: var(--color-base);
  border: none;
  inset: auto 0 var(--appbar-height);
  max-width: none;
  width: 100%;
}

dialog::backdrop {
  background: transparent;
}

@media (max-width: 767px) {
  header {
    bottom: 0;
  }
}

@media (min-width: 768px) {
  header {
    top: 0;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  button {
    display: none;
  }

  dialog {
    background: transparent;
    display: block;
    position: static;
    border: none;
    margin-left: auto;
    width: fit-content;
  }
}
</style>
