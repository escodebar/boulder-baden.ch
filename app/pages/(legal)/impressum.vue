<template>
  <h1>Impressum</h1>

  <section>
    <address>
      Bouba AG<br />
      Oberstadtstrasse 12<br />
      5400 Baden<br />
      <br />

      <a href="tel:+41566101717">+41 (0)56 610 17 17</a><br />
      <a href="mailto:info@boulder-baden.ch">info@boulder-baden.ch</a><br />
      <a href="https://boulder-baden.ch">https://boulder-baden.ch</a>
    </address>

    <h2>Vertretungsberechtigte Personen</h2>
    <ul>
      <li>Kevin Huser</li>
      <li>Dimitri Canonica</li>
    </ul>
  </section>

  <section>
    <h2>Urheberrecht</h2>
    <p>
      Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder
      anderen Dateien auf der Website gehören ausschliesslich der Firma Bouba AG
      oder den speziell genannten Rechtsinhabern. Für die Reproduktion jeglicher
      Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus
      einzuholen.
    </p>

    <h2>Bildquellen</h2>
    <dl>
      <dt>Logo-Design</dt>
      <dd>Yves Krähenbühl</dd>

      <dt>Portrait-Bilder</dt>
      <dd>Tinus Meier</dd>

      <dt>Bilder Gebäude</dt>
      <dd>Peter Huser, Nadja Pfister</dd>
    </dl>
  </section>

  <section>
    <h2>Haftungsausschluss</h2>
    <p>
      Die Inhalte dieser Website werden mit grösstmöglicher Sorgfalt erstellt.
      Dennoch übernimmt die Bouba AG keine Gewähr für die Richtigkeit,
      Vollständigkeit und Aktualität der bereitgestellten Informationen.
    </p>
    <p>
      Die Bouba AG behält sich ausdrücklich vor, Inhalte jederzeit ohne
      Ankündigung zu ändern, zu ergänzen oder zu entfernen.
    </p>
  </section>

  <section>
    <h2>Datenschutz</h2>
    <p>
      Informationen zur Bearbeitung personenbezogener Daten finden Sie in
      <NuxtLink :to="{ name: 'datenschutz' }">
        unserer Datenschutzerklärung.
      </NuxtLink>
    </p>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  legal: true,
  order: 210,
  title: "Impressum",
});
</script>

<style scoped>
* {
  text-align: left;
}

@media (max-width: 767px) {
  h1 {
    font-size: clamp(var(--font-size-h2), calc(18vw), var(--font-size-h1));
    hyphens: auto;
  }

  h2 {
    font-size: clamp(var(--font-size-h3), calc(9vw), var(--font-size-h2));
    hyphens: auto;
  }
}
</style>
