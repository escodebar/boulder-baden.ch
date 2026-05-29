<template>
  <AppBar />
  <main>
    <RouterView />

    <Navigation />

    <Footer />
  </main>
</template>

<script setup lang="ts">
import AppBar from "@/components/AppBar.vue";
import Footer from "@/components/Footer.vue";
import Navigation from "@/components/Navigation.vue";
</script>
