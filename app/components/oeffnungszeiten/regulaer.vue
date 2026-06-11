<template>
  <BaseOeffnungszeiten :items="openingTimes" />
</template>

<script setup lang="ts">
const openingTimes = ref<OpeningTimeItem[]>([
  {
    name: "Montag bis Freitag",
    time: "11 bis 23",
  },
  {
    name: "Samstag & Sonntag",
    time: "10 bis 19",
  },
] as OpeningTimeItem[]);
</script>
