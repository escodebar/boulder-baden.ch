<template>
  <h2>Öffnungszeiten</h2>

  <section>
    <h3>Reguläre Öffnungzeiten</h3>
    <dl>
      <dt>Montag bis Freitag</dt>
      <dd>11 bis 23</dd>
      <dt>Samstag & Sonntag</dt>
      <dd>10 bis 19</dd>
    </dl>
  </section>

  <section>
    <h3>Besondere Öffnungszeiten</h3>

    <dl>
      <template v-for="holiday in holidays">
        <dt>{{ holiday.name }} ({{ holiday.date }})</dt>
        <dd>{{ holiday.time }}</dd>
      </template>
    </dl>
  </section>
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

definePageMeta({
  footer: true,
  order: 130,
  title: "Öffnungszeiten",
});
</script>
