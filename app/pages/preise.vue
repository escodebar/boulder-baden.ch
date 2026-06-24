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

    <h4>Familienvergünstigung</h4>
    <p>
      Spare 10% Rabatt, wenn du zwei Abos ab 21 Jahren und ein Abo ab 5 Jahren
      kombinierst. Für alleinerziehende gilt der Rabatt bereits bei einem Abo ab
      21 Jahren und einem Abo ab 5 Jahren. Diese Vergünstigung gilt auf das
      Halbjahresabo, Jahresabo und Zweijahresabo.
    </p>
    <p>
      Sowohl Eltern mit als auch ohne Jahresabo profitieren von einer
      Vergünstigung auf die Tageseintritte: Der Rabatt gilt, wenn sie gemeinsam
      mit maximal einem eigenen Kind zwischen 1 und 10 Jahren bouldern.
    </p>

    <h4>SAC-Lägern-Vergünstigung</h4>
    <p>
      Profitiere als SAC-Lägern-Mitglied von einer Vergünstigung auf das
      Jahreabo.
    </p>

    <h4>Gruppenvergünstigung</h4>
    <p>
      Vorangemeldete Gruppen ab 10 Personen profitieren von einem Rabatt von 10%
      auf die Einzeleintrittspreise.
    </p>

    <h4>Firmenvergünstigung</h4>
    <p>
      Angemeldete firmen profitieren von 10% Rabatt auf die Eintrittspreise.
    </p>
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
