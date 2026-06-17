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

  <Impressionen
    :images="[
      '/impressionen/home/1.png',
      '/impressionen/home/2.png',
      '/impressionen/home/3.png',
      '/impressionen/home/4.png',
      '/impressionen/home/5.png',
      '/impressionen/home/6.png',
      '/impressionen/home/7.png',
      '/impressionen/home/8.png',
    ]"
  />

  <section>
    <h2>Unsere Geschichte</h2>

    <p>
      Aus einer Idee in einem umfunktionierten Dachstock in Unterlunkhofen
      entstand eine der bedeutendsten Boulderhallen der Schweiz. Erfahre mehr
      über unsere Entstehungsgeschichte.
    </p>

    <NuxtLink class="button" :to="{ name: 'geschichte' }">
      Unsere Geschichte
    </NuxtLink>
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
