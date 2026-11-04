<template>
  <h1>Preise</h1>

  <p>
    Hier findest du alle aktuellen Preise für Eintritte, Leihboulderschuhe sowie
    Informationen zu Rabatten und Vergünstigungen.
  </p>

  <section id="eintrittspreise">
    <h2>Eintrittspreise</h2>

    <Eintrittspreise />

    <h4>Familienrabatt</h4>
    <p>
      Mindestens ein Elternteil und eigene Kinder bis und mit 17 Jahre erhalten
      beim gleichzeitigen gemeinsamen Kauf von Jahresabos 10% Rabatt.
    </p>

    <h4>Gruppenrabatt</h4>
    <p>
      10% Rabatt auf die Einzeleintrittspreise für vorangemeldete Gruppen ab 10
      Personen. Nicht kletternde Leiter sind kostenlos.
    </p>

    <h4>Mietpreise</h4>
    <p>Kletterschuhe können für CHF 6 am Empfang gemietet werden.</p>
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
