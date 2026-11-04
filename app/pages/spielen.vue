<template>
  <h1>Spiel und Spass</h1>

  <p>
    Möchtest du mit deinen Freunden eine Runde Ping-Pong spielen? Oder mal die
    Slackline testen? Wir haben vorgesorgt. Auch für die Kleinsten: da gibt es
    eine Kinderwelt in der sie sich austoben können. Denn warum soll der Spass
    beim Bouldern aufhören?
  </p>

  <section>
    <h2>Angebot</h2>

    <p>
      Eine separate Kinderwelt mit einer Rutschbahn und Kinder-Routen um die
      Kleinen zu Fordern, Slackline für die Balance und Konzentration, einen
      Ping Pong Tisch, Billard, einen Basketballkorb und mehr: wir haben für
      alle etwas!
    </p>

    <Bereich class="spielen" />

    <Linklist :links="links" />
  </section>

  <section id="betreuung">
    <h2>Betreuungsregeln</h2>

    <p>
      Wir wissen, wie schnell wir uns in einem Boulder oder einem Spiel
      verlieren können und alles drumherum ausblenden. Doch im BOUBA gilt immer
      die Regel: <strong>Die Aufsichtspflicht liegt bei dir</strong>.
    </p>

    <p>
      Unsere Angebote sind sicher und kindgerecht gestaltet und grösstenteils
      von anderen Aktivitäten getrennt. Zu beachten gilt jedoch, das nicht die
      ganze Halle ein Spielplatz ist. Das gilt insbesondere für die
      Boulderbereiche, aber auch bei anderen Aktivitäten gilt: Eltern oder
      begleitende Personen sind für die Sicherheit und das Verhalten ihrer
      Kinder verantwortlich.
    </p>

    <p>
      Dafür haben wir detaillierte Regeln erstellt. Bitte lies sie dir durch,
      bevor du loslegst und hilf uns so sicherzustellen, dass alle eine sicheren
      Aufenthalt geniessen können.
    </p>

    <NuxtLink class="button" :to="{ name: 'hallenregeln', hash: '#betreuung' }">
      Zu den Betreuungsregeln
    </NuxtLink>
  </section>

  <section id="kinderwelt">
    <h2>Kinderwelt</h2>
    <p>
      Für die kleinen Boulderer haben wir ein eigenes „Spielparadies"
      geschaffen. Hier können Kids sicher spielen, klettern und neue Bewegungen
      meistern, während die Eltern entspannt zuschauen. Nehmt gerne ein Kaffee
      aus dem Bistro mit.
    </p>

    <p>
      <strong>Wichtig:</strong> Die Kinderwelt wird nicht betreut. Die
      Aufsichtspflicht liegt bei den Eltern oder Begleitpersonen. Aber keine
      Sorge: Der Bereich ist sicher, kindgerecht gestaltet und bietet genug
      Platz für Spielereien.
    </p>
  </section>

  <section id="pingpong">
    <h2>Ping Pong</h2>
    <p>
      Schnelle Reflexe und taktisches Denken – das bringt Ping Pong mit. Wir
      bieten dir eine Tischtennisplatte, um dich mit Freunden zu messen oder
      einfach ein paar Bälle zu schlagen.
    </p>
  </section>

  <section id="weitere-spiele">
    <h2>Slackline</h2>
    <p>
      Willst du deine Koordination testen? Unsere Slacklines laden dich ein, das
      Gleichgewicht zu suchen. Egal, ob du gerade erst den ersten Schritt wagst
      oder schon akrobatische Tricks zeigst. Du findest sie im Garten hinter der
      Halle.
    </p>

    <h2>Basketball</h2>
    <p>
      Zwischendurch mal ein paar Würfe? Unser Basketballkorb ist für schnelle
      Duelle oder entspannte Wurfsessions da. Bälle erhälst du beim
      Bistropersonal.
    </p>

    <h2>Billard</h2>
    <p>
      Bei unserem Billiardtisch kannst du dich mit deinen Freunden treffen.
      Spiele eine Runde Billiard um dich nach deiner Session noch in Feinmotorik
      zu üben.
    </p>

    <h2>Darts</h2>
    <p>
      Wer trifft das Zentrum? Darts ist eine gute Mischung aus Konzentration und
      Entspannung. Probier unsere Dartscheibe und sieh, wer der beste Schütze in
      der Gruppe ist.
    </p>
  </section>

  <Impressionen :images="images" />
</template>

<script setup lang="ts">
definePageMeta({
  footer: true,
  navigation: true,
  order: 30,
  title: "Spielen",
});

const name = "spielen";

const links = ref([
  { to: { name, hash: "#kinderwelt" }, name: "Kinderwelt" },
  { to: { name, hash: "#pingpong" }, name: "Ping Pong" },
  { to: { name, hash: "#weitere-spiele" }, name: "Weitere Spiele" },
]);

const images = Object.values(
  import.meta.glob<{ default: string }>(
    "@/assets/impressionen/spielen/*.webp",
    {
      eager: true,
      import: "default",
      query: "?url",
    },
  ),
);
</script>

<style scoped>
@media (max-width: 767px) {
  #betreuung h2 {
    font-size: clamp(var(--font-size-h3), calc(23vw / 2), var(--font-size-h2));
  }
}
</style>
