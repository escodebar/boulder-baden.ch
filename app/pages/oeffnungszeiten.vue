<template>
  <h1>Öffnungszeiten</h1>

  <p>
    Egal ob nach der Arbeit am späten Abend oder am Wochenende mit der Familie:
    Wir sind <strong>jeden Tag</strong> für dich da, wenn du Zeit zum Bouldern
    hast. Unsere Öffnungszeiten sind flexibel gestaltet, damit du dich entspannt
    auf die Matte begeben kannst, wann immer es dir passt.
  </p>

  <section>
    <h2>Reguläre Öffnungzeiten</h2>

    <OeffnungszeitenRegulaer />
  </section>

  <section id="besonders">
    <h2>Besondere Öffnungszeiten</h2>

    <OeffnungszeitenBesonders />
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  footer: true,
  order: 130,
  title: "Öffnungszeiten",
});
</script>

<style scoped>
@media (max-width: 767px) {
  h1 {
    font-size: clamp(var(--font-size-h2), calc(27vw / 2), var(--font-size-h1));
  }
}
</style>
