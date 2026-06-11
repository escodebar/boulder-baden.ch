<template>
  <BaseOeffnungszeiten :items="holidays" />
</template>

<script setup lang="ts">
import holidaysData from "@/assets/holidays.json";

const holidays = ref<OpeningTimeItem[]>(holidaysData as OpeningTimeItem[]);
</script>
