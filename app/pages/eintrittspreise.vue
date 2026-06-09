<template>
  <h1>Eintrittspreise</h1>

  <Eintrittspreise />
</template>

<script setup lang="ts">
definePageMeta({
  footer: true,
  order: 120,
  title: "Eintrittspreise",
});
</script>

<style scoped>
@media (max-width: 767px) {
  h1 {
    font-size: clamp(var(--font-size-h2), calc(128vw / 9), var(--font-size-h1));
  }
}
</style>
