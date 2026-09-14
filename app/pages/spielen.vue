<template>
  <h1>Spiel und Spass</h1>

  <p>
    Brauchst du eine Pause? Möchtest du deine Freunde auf eine Runde Billard
    einladen? Oder mal die Slackline testen? Wir haben vorgesorgt. Auch für die
    Kleinsten: da gibt es eine Kinderwelt in der sie sich sicher austoben
    können. Denn warum soll der Spass beim Bouldern aufhören?
  </p>

  <section>
    <h2>Angebot</h2>

    <p>
      Eine separate Kinderwelt zum Austoben, Slackline für die Balance und
      Konzentration, einen Ping Pong Tisch, Billard, einen Basketballkorb und
      mehr: wir haben für alle etwas!
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
      geschaffen. Hier können Kids sicher toben, klettern und spielen, während
      die Eltern im Bistro verweilen oder selbst bouldern.
    </p>

    <p>
      <strong>Wichtig:</strong> Die Kinderwelt wird nicht betreut. Die
      Aufsichtspflicht liegt bei den Eltern oder Begleitpersonen. Aber keine
      Sorge: Der Bereich ist sicher, kindgerecht gestaltet und bietet genug
      Platz für wildes Toben.
    </p>
  </section>

  <section id="pingpong">
    <h2>Ping Pong</h2>
    <p>
      Schnelle Reflexe und taktisches Denken – das bringt Ping Pong mit. Wir
      bieten dir eine professionelle Tischtennisplatte, um dich mit Freunden zu
      messen oder einfach ein paar Bälle zu schlagen.
    </p>
  </section>

  <section id="weitere-spiele">
    <h2>Slackline</h2>
    <p>
      Willst du deine Koordination testen? Unsere Slacklines laden dich ein, das
      Gleichgewicht zu suchen. Egal, ob du gerade erst den ersten Schritt wagst
      oder schon akrobatische Tricks zeigst. Hier ist Platz für deinen Flow.
    </p>

    <h2>Basketball</h2>
    <p>
      Zwischendurch mal ein paar Würfe? Unser Basketballkorb ist für schnelle
      Duelle oder entspannte Wurfsessions da. Perfekt, um die Arme zu dehnen und
      den Kopf frei zu bekommen.
    </p>

    <h2>Billard</h2>
    <p>
      Der Klassiker zum Abschalten. Unser Billardtisch ist der perfekte Ort, um
      sich mit Freunden zu treffen, strategisch zu denken und die nächsten
      Boulderrouten zu besprechen.
    </p>
  </section>

  <section id="darts">
    <h2>Darts</h2>
    <p>
      Wer trifft das Zentrum? Darts ist die perfekte Mischung aus Konzentration
      und Entspannung. Probier deine Präzision an unseren Dartscheiben und sieh,
      wer der beste Schütze in der Gruppe ist.
    </p>
  </section>
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
</script>

<style scoped>
@media (max-width: 767px) {
  #betreuung h2 {
    font-size: clamp(var(--font-size-h3), calc(23vw / 2), var(--font-size-h2));
  }
}
</style>
