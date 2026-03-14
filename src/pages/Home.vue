<template>
  <header></header>
  <Navigation :routes="router.options.routes" />

  <section>
    <h2>Öffnungszeiten & Preise</h2>
    <dl>
      <dt>Montag bis Freitag</dt>
      <dd>11 bi 23</dd>
      <dt>Samstag & Sonntag</dt>
      <dd>10 bis 19</dd>
    </dl>
  </section>
  <section>
    <h2>Standort</h2>
    <p>Knapp 10 min vom Bahnhof Baden und Stadtzentrum zu Fuss entfernt</p>
  </section>
  <section>
    <h2>Kontakt</h2>
    <p>
      Willst du etwas wissen? Oder hast du sonst eine Anfrage? Lass es uns
      wissen:
      <a href="mailto:info@boulder-baden.ch">info@boulder-baden.ch</a><br />
      <a href="tel:+41566101717">+41 (0)56 610 17 17</a>
    </p>
    <p>Bleibe up to date, folge uns auf Insta</p>
    <p>
      Bist du das erste mal im Bouba? Wir haben dir alles Wissenswerte
      zusammengetragen:
    </p>
  </section>
  <!-- Impressionen -->
  <section>
    <h2>Unsere Vision</h2>
    <p>
      Die Boulder-Community soll zur grössten Sport-Community in Baden werden.
      Bei BOUBA steht die Freude am Sport im Zentrum. Das Bouldern bildet dabei
      den Kern. Wir sehen noch viel Potenzial auf dem Ferro-Areal, wo wir mit
      Events und Pop-Ups einen Treffpunkt für urbane Sportarten schaffen wollen.
    </p>
  </section>
  <section>
    <h2>Unsere Partner</h2>
  </section>
  <Navigation :routes="router.options.routes" />
</template>

<script setup lang="ts">
import Navigation from "@/components/Navigation.vue";
import router from "@/router";
</script>
