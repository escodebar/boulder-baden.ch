<template>
  <header>
    <h1>BOUBA</h1>
    <button command="show-modal" commandfor="nav-dialog">Navigation</button>
    <dialog id="nav-dialog">
      <button commandfor="nav-dialog" command="close">Close Navigation</button>
      <Navigation :routes="router.options.routes" />
    </dialog>
  </header>
</template>

<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import router from "@/router";
</script>

<style scoped>
@media (min-width: 768px) {
  button[command="show-modal"] {
    display: none;
  }

  dialog#nav-dialog {
    display: block;
    position: static;
    border: none;
    padding: 0;
    margin: 0;
    background: transparent;
    overflow: visible;
  }

  dialog#nav-dialog nav ul {
    display: flex;
  }

  button[command="close"] {
    display: none;
  }
}
</style>
