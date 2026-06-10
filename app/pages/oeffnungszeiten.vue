<template>
  <h1>Öffnungszeiten</h1>

  <p>
    Egal ob nach der Arbeit am späten Abend oder am Wochenende mit der Familie:
    Wir sind für dich da, wenn du Zeit zum Bouldern hast. Unsere Öffnungszeiten
    sind flexibel gestaltet, damit du dich entspannt auf die Matte begeben
    kannst, wann immer es dir passt.
  </p>

  <section>
    <h2>Reguläre Öffnungzeiten</h2>

    <dl>
      <dt>Montag bis Freitag</dt>
      <dd>11 bis 23</dd>
      <dt>Samstag & Sonntag</dt>
      <dd>10 bis 19</dd>
    </dl>
  </section>

  <section>
    <h2>Besondere Öffnungszeiten</h2>

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

<style scoped>
dl {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  width: fit-content;
  max-width: 100%;
  margin-inline: auto;
  gap: 0.25rem 1rem;
}

dt {
  margin: 0;
}

dd {
  margin: 0;
  text-align: right;
}

dt::after {
  content: ":";
}

@media (max-width: 767px) {
  h1 {
    font-size: clamp(var(--font-size-h2), calc(27vw / 2), var(--font-size-h1));
  }
}
</style>
