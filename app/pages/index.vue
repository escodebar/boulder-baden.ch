<template>
  <Logo class="hero" />
  <Navigation />

  <section>
    <h2>Standort</h2>
    <Standort />
    <Map />
  </section>

  <section>
    <h2>Öffnungszeiten & Eintrittspreise</h2>
    <OeffnungszeitenRegulaer />

    <NuxtLink class="button" :to="{ name: 'oeffnungszeiten' }">
      Spezielle Öffnungszeiten
    </NuxtLink>

    <NuxtLink class="button" :to="{ name: 'eintrittspreise' }">
      Eintrittspreise
    </NuxtLink>
  </section>

  <section>
    <h2>Kontakt</h2>
    <Kontakt />
  </section>

  <!-- Impressionen -->

  <section>
    <h2>Unsere Vision</h2>
    <Vision />
  </section>

  <section>
    <h2>Unsere Partner</h2>
    <Partner />
  </section>
</template>

<style scoped>
.button {
  display: block;
}
</style>
