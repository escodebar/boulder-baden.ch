<template>
  <Logo class="hero" />
  <Navigation />

  <section>
    <h2>Öffnungszeiten & Eintrittspreise</h2>
    <OeffnungszeitenRegulaer />

    <hr />

    <NuxtLink
      class="button"
      :to="{ name: 'oeffnungszeiten', hash: '#besonders' }"
    >
      Spezielle Öffnungszeiten
    </NuxtLink>

    <NuxtLink class="button" :to="{ name: 'preise', hash: '#eintrittspreise' }">
      Eintrittspreise
    </NuxtLink>
  </section>

  <section>
    <h2>Standort</h2>

    <p>
      Nur 7 Minuten zu Fuss vom Bahnhof Baden, die Bushaltestelle der Linie zwei
      vor der Haustüre und einen grossen Parkplatz auf dem Vorplatz.
    </p>

    <address>
      Oberstadtstrasse 12<br />
      5400 Baden
    </address>

    <hr />
    <Map />
  </section>

  <section>
    <h2>Kontakt</h2>
    <Kontakt />
  </section>

  <section>
    <h2>BOUBA</h2>
    <Bereich class="gesamt" />
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
    <h2>Unsere Partner</h2>
    <Partner />
  </section>
</template>

<style scoped>
.button {
  display: block;
}

address,
p {
  font-size: var(--font-size-h4);
  margin-top: var(--font-size-h4);
  margin-bottom: calc(var(--font-size-h4) / 2);
}
</style>
