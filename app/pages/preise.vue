<template>
  <h1>Preise</h1>

  <p>
    Hier findest du alle aktuellen Preise für Eintritte, Leihboulderschuhe sowie
    unsere Kurs- und Trainingsangebote. Willst du nur einen Tag schnuppern
    willst, an einem Gruppenkurs teilnehmen möchtest oder eine individuelle
    Privatlektion buchen? Die Übersicht gibt dir einen klaren Blick auf unsere
    Tarife. Details zu Rabatten oder speziellen Bedingungen findest du direkt in
    den Tabellen unten.
  </p>

  <section id="eintrittspreise">
    <h2>Eintrittspreise</h2>

    <Eintrittspreise />
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  footer: true,
  order: 120,
  title: "Preise",
});
</script>

<style scoped>
@media (max-width: 767px) {
  h1 {
    font-size: clamp(var(--font-size-h2), calc(128vw / 9), var(--font-size-h1));
  }
}
</style>
