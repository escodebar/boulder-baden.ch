<template>
  <Logo class="hero" />
  <Navigation />

  <section id="oeffnungszeiten">
    <h2>Öffnungszeiten & Eintrittspreise</h2>
    <Oeffnungszeiten :items="openingTimes" :classes="$style" />

    <hr />

    <NuxtLink class="button" :to="{ name: 'oeffnungszeiten' }">
      Besondere Öffnungszeiten
    </NuxtLink>

    <NuxtLink class="button" :to="{ name: 'preise', hash: '#eintrittspreise' }">
      Eintrittspreise
    </NuxtLink>
  </section>

  <section id="standort">
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

  <section id="kontakt">
    <h2>Kontakt</h2>
    <address>
      Hast du eine spezielle Anfrage oder möchtest du sonst etwas wissen?
      Kontaktiere uns unkompliziert:<br />
      <br />
      <a href="mailto:info@boulder-baden.ch">info@boulder-baden.ch</a><br />
      <a href="tel:+41566101717">+41 (0)56 610 17 17</a><br />
      <br />
      Bleibe up to date, folge uns auf
      <a href="https://www.instagram.com/bouba_boulderbaden/">
        Insta
        <span class="icon instagram"></span>
      </a>
    </address>
  </section>

  <section>
    <h2>BOUBA</h2>
    <Bereich class="gesamt" />
  </section>

  <Impressionen :images="images" />

  <section>
    <h2>Unsere Partner</h2>
    <Partner />
  </section>
</template>

<script setup lang="ts">
const openingTimes = ref<OpeningTimeItem[]>([
  {
    name: "Montag bis Freitag",
    time: "von 11 bis 23",
  },
  {
    name: "Samstag & Sonntag",
    time: "von 10 bis 19",
  },
] as OpeningTimeItem[]);

const images = Object.values(
  import.meta.glob<{ default: string }>("@/assets/impressionen/home/*.webp", {
    eager: true,
    import: "default",
    query: "?url",
  }),
);
</script>

<style scoped>
#oeffnungszeiten {
  padding-bottom: 0;
}

#standort hr {
  margin-top: var(--font-size-h2);
  margin-bottom: var(--font-size-h2);
}

#kontakt {
  padding-bottom: 0;
}

#kontakt address {
  margin-bottom: var(--font-size-h2);
}

* {
  text-align: center;
}

.button {
  display: block;
}

.instagram {
  background-image: url("@/assets/instagram.svg");
  height: 21px;
  width: 21px;
}

address,
p {
  font-size: var(--font-size-h4);
  margin-top: var(--font-size-h4);
  margin-bottom: var(--font-size-h4);
}
</style>

<style module>
.dl {
  font-size: var(--font-size-h4);
  margin: var(--font-size-h2) auto;
  line-height: 3rem;
}
</style>
