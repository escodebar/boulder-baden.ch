<template>
  <dl>
    <template v-for="holiday in holidays">
      <dt>
        <strong>{{ holiday.date }}</strong>
        <span>{{ holiday.name }}</span>
      </dt>
      <dd>{{ holiday.time }}</dd>
    </template>
  </dl>
</template>

<script setup lang="ts">
import { ref } from "vue";
import holidaysData from "@/assets/holidays.json";

interface Holiday {
  date: string;
  name: string;
  time: string;
}

const holidays = ref<Holiday[]>(holidaysData as Holiday[]);
</script>

<style scoped>
dl {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  width: fit-content;
  max-width: 100%;
  margin-inline: auto;
  gap: 0.25rem 0;
}

dt {
  margin: 0;
  display: flex;
  justify-content: space-between;
}

dd {
  margin: 0;
  text-align: right;
  padding-left: 1rem;
}

dt,
dd {
  border-bottom: 0.5px solid var(--color-text);
}
dt:last-of-type,
dd:last-of-type {
  border-bottom: 0;
}

strong {
  margin-right: 1em;
}
</style>
