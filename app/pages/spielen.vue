<template>
  <h1>Spiel und Spass</h1>

  <p>
    Bouldern ist anstrengend? Dann ist es Zeit, die Beine hochzulegen oder den
    Kopf frei zu bekommen. Im BOUBA haben wir uns überlegt: Warum sollte der
    Spass aufhören, wenn die Matte leer ist? Egal, ob du mit den Kindern eine
    Auszeit brauchst, deine Freunde zum Billard einlädst oder einfach mal die
    Slackline testen willst. Hier gibt es genug Raum, um abzuschalten und
    trotzdem aktiv zu bleiben.
  </p>

  <section>
    <h2>Angebot</h2>

    <p>
      Wir haben für jeden Geschmack etwas: Von der Kinderwelt, in der die
      Kleinen sicher toben können, über die Slackline für eure Balance, bis hin
      zu klassischen Spielereien wie Basketball, Ping Pong, Billard und Darts.
      Egal, ob ihr ein Duell sucht oder einfach nur die Zeit vertreiben wollt,
      hier ist für jeden ein Platz.
    </p>

    <Bereich class="spielen" />

    <Linklist :links="links" />
  </section>

  <section id="betreuung">
    <h2>Betreuungsregeln</h2>

    <p>
      Wir wissen: Die Kinderwelt, die Slackline oder ein entspanntes
      Billardspiel laden dazu ein, die Zeit zu vergessen und einfach zu
      geniessen. Doch egal, wie viel Spass du hast – im BOUBA gilt immer eine
      Regel: <strong>Die Aufsichtspflicht liegt bei dir.</strong>
    </p>

    <p>
      Unsere Angebote sind sicher und kindgerecht gestaltet, aber wir können
      nicht jedes Kind im Auge behalten. Das gilt insbesondere für die
      <strong>Kinderwelt</strong>, aber auch bei anderen Aktivitäten gilt:
      <em>
        Eltern oder begleitende Personen sind für die Sicherheit und das
        Verhalten ihrer Kinder verantwortlich.
      </em>
    </p>

    <p>
      Damit alle einen sicheren Spass haben, haben wir detaillierte Regeln
      erstellt. Bitte lies sie dir durch, bevor du loslegst.
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

  <section id="slackline">
    <h2>Slackline</h2>
    <p>
      Willst du deine Koordination testen? Unsere Slacklines laden dich ein, das
      Gleichgewicht zu suchen. Egal, ob du gerade erst den ersten Schritt wagst
      oder schon akrobatische Tricks zeigst. Hier ist Platz für deinen Flow.
    </p>
  </section>

  <section id="basketball">
    <h2>Basketball</h2>
    <p>
      Zwischendurch mal ein paar Würfe? Unser Basketballkorb ist für schnelle
      Duelle oder entspannte Wurfsessions da. Perfekt, um die Arme zu dehnen und
      den Kopf frei zu bekommen.
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

  <section id="billiard">
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
  { to: { name, hash: "#slackline" }, name: "Slack Line" },
  { to: { name, hash: "#basketball" }, name: "Basketball" },
  { to: { name, hash: "#pingpong" }, name: "Ping Pong" },
  { to: { name, hash: "#billiard" }, name: "Billiard" },
  { to: { name, hash: "#darts" }, name: "Darts" },
]);
</script>

<style scoped>
@media (max-width: 767px) {
  #betreuung h2 {
    font-size: clamp(var(--font-size-h3), calc(23vw / 2), var(--font-size-h2));
  }
}
</style>
