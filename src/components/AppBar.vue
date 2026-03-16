<template>
  <header>
    <h1>BOUBA</h1>
    <button command="show-modal" commandfor="nav-dialog">Navigation</button>
    <dialog id="nav-dialog" closedby="any">
      <Navigation :routes="router.options.routes" />
    </dialog>
  </header>
</template>

<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import router from "@/router";
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
