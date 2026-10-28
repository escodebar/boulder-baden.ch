<template>
  <h1>BOUBA Bistro</h1>

  <p>
    Unser Bistro bietet ein gemütliches Ambiente zum Verweilen. Im Sommer ist
    der Aussenbereich ein Highlight. Hochbeete mit verschiedenen Pflanzen lassen
    dich nach einer Bouldersession herunterfahren. Wir verwöhnen dich gerne mit
    einem sorgfältig ausgewählten Angebot an Speisen und Getränken.
  </p>

  <section>
    <h2>Angebot</h2>

    <p>
      Hungrig nach dem Sport? Dann probiere unsere Pinsen von Paolo’s aus Brugg.
      Doch lieber etwas Süsses? Gönn dir einen hausgemachten, veganen
      Bananenbrotmuffin. Zu jeder guten Boulderhalle gehört ein guter Kaffee.
      Unsere Bohnen kommen von Vertical-Coffee: direkt und lokal aus
      Unterlunkhofen. Ebenso bieten wir eine vielfältige Auswahl an Bieren,
      Softdrinks und weitere Snacks oder saisonale und temporäre Köstlichkeiten
      zum Essen und Trinken. Natürlich steht unser Bistro allen ohne
      Halleneintritt offen. Wir freuen uns auf deinen Besuch.
    </p>

    <Bereich class="geniessen" />
  </section>

  <Impressionen :images="images" />
</template>

<script setup lang="ts">
definePageMeta({
  footer: true,
  navigation: true,
  order: 40,
  title: "Geniessen",
});

const images = Object.values(
  import.meta.glob<{ default: string }>(
    "@/assets/impressionen/geniessen/*.webp",
    {
      eager: true,
      import: "default",
      query: "?url",
    },
  ),
);
</script>
