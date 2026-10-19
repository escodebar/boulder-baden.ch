<template>
  <h1>Besondere Öffnungszeiten</h1>

  <section>
    <Oeffnungszeiten :items="holidays" :classes="$style" />
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  footer: true,
  order: 130,
  title: "Öffnungszeiten",
});

import holidaysData from "@/assets/holidays.json";

const holidays = ref<OpeningTimeItem[]>(holidaysData as OpeningTimeItem[]);
</script>

<style scoped>
section {
  border: none;
}

@media (max-width: 767px) {
  h1 {
    font-size: clamp(var(--font-size-h2), calc(27vw / 2), var(--font-size-h1));
  }
}
</style>

<style module>
.dt,
.dd {
  border-bottom: 0.5px solid var(--color-text);
}
.dt:last-of-type,
.dd:last-of-type {
  border-bottom: 0;
}
</style>
