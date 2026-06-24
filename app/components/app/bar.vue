<template>
  <header ref="header" :data-ref="currentRoute">
    <a class="logo" href="/">
      <Logo />
    </a>

    <button
      @click="isOpen = !isOpen"
      class="icon"
      aria-controls="nav-dialog"
      :aria-expanded="isOpen"
      ref="dialogRef"
    >
      Navigation
    </button>
    <dialog id="nav-dialog" aria-label="Navigation" :open="isOpen">
      <AppBarNavigation :is-hidden="isHidden" />
    </dialog>
  </header>
</template>

<script setup lang="ts">
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

const route = useRoute();

const currentRoute = computed(() => route.fullPath);

const header = ref(null);
const isHidden = ref(false);

onMounted(() => {
  document.addEventListener("click", handleGlobalClick);

  const handleScroll = () => {
    const threshold = header.value?.offsetHeight ?? 0;
    isHidden.value = window.scrollY > threshold;
  };

  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  document.removeEventListener("click", handleGlobalClick);
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.logo {
  display: flex;
}

header {
  justify-content: space-between;
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  height: var(--appbar-height);
  background: var(--color-base);
  z-index: var(--layer-top);
}

dialog {
  border: none;
  inset: auto 0 var(--appbar-height);
  max-width: none;
  width: 100%;
}

dialog:open {
  border-top: var(--border-size-thick) solid var(--color-text);
}

button {
  border: none;
  background-image: url("@/assets/nav-button.svg");
  height: var(--appbar-height);
  width: 72px;
}

button[aria-expanded="true"] {
  background-image: url("@/assets/nav-button-close.svg");
}

@media (max-width: 767px) {
  header {
    bottom: 0;
  }
  header[data-ref="/neu-hier"] {
    background-color: var(--color-neu-hier);
  }
  header[data-ref="/bouldern"] {
    background-color: var(--color-bouldern);
  }
  header[data-ref="/trainieren"] {
    background-color: var(--color-trainieren);
  }
  header[data-ref="/spielen"] {
    background-color: var(--color-spielen);
  }
  header[data-ref="/geniessen"] {
    background-color: var(--color-geniessen);
  }
}

@media (min-width: 768px) {
  header {
    top: 0;
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
