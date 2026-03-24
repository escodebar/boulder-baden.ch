<template>
  <header>
    <Logo />
    <button
      @click="isOpen = !isOpen"
      aria-controls="nav-dialog"
      :aria-expanded="isOpen"
      ref="dialogRef"
    >
      Navigation
    </button>
    <dialog id="nav-dialog" aria-label="Navigation" :open="isOpen">
      <Navigation class="header" />
    </dialog>
  </header>
</template>

<script setup lang="ts">
import Logo from "@/components/Logo.vue";
import Navigation from "@/components/Navigation.vue";
import { ref, onMounted, onUnmounted } from "vue";

const isOpen = ref(false);
const dialogRef = ref<HTMLDialogElement | null>(null);

const handleGlobalClick = (event: MouseEvent) => {
  if (!isOpen.value) return;
  if (dialogRef.value && dialogRef.value.contains(event.target as Node)) {
    return;
  }
  isOpen.value = false;
};

onMounted(() => {
  document.addEventListener("click", handleGlobalClick);
});

onUnmounted(() => {
  document.removeEventListener("click", handleGlobalClick);
});
</script>

<style scoped>
header {
  justify-content: space-between;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  height: var(--appbar-height);
}

dialog {
  border: none;
  inset: auto 0 var(--appbar-height);
  max-width: none;
  width: 100%;
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
