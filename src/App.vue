<template>
  <header>
    <h1>BOUBA</h1>
    <Navigation :routes="router.options.routes" />
  </header>
</template>

<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import router from "@/router";
</script>
