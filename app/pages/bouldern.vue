<template>
  <h1>Bouldern</h1>

  <p>
    BOUBA, das heisst BOUldern in BAden. Der Name ist bei uns Programm und der
    Spass am Bouldern steht im Mittelpunkt. Dazu findest du im BOUBA Wände von
    sehr steil bis schön plattig, mit Boulderproblemen von leicht bis schwer in
    unterschiedlichen Stilen. Von der technisch kniffligen Slab über
    koordinative Sprünge bis hin zu physisch fordernden Bouldern bieten wir dir
    alles an. Bei den ca. 200 Bouldern findet jede und jeder die passenden
    Herausforderungen.
  </p>

  <section id="boulderlandschaft">
    <h2>Boulderlandschaft im BOUBA</h2>

    <p>
      Auf über 1000 Quadratmetern Wandfläche gibt es von der Compwall über die
      Cave bis zum Slab of the week einiges zu entdecken.
    </p>

    <Bereich class="bouldern" />

    <h3>Schraubrhytmus</h3>
    <p>
      Wöchentlich schrauben wir für dich 15-25 neue Boulder. Unser Routenbauteam
      gibt alles und baut vielfältige Boulderrouten in verschiedenen
      Schwierigkeiten. So hast du jede Woche wieder neue Herausforderungen.
    </p>

    <h3>The Slab of the Week</h3>
    <p>
      Der Name ist Programm. Hier entsteht wöchentlich ein neuer
      Platten-Boulder. Durch die grosszügigen Platzverhältnisse kreiert unser
      Routenbauteam spannende Bewegungen und wagt auch mal ein Experiment. Lass
      dich wöchentlich aufs Neue überraschen.
    </p>

    <h3>Für den Nachwuchs</h3>
    <p>
      Für die ganz jungen Boulderinnen und Boulderer hat es eine separate
      <NuxtLink :to="{ name: 'spielen', hash: '#kinderwelt' }"
        >Kinderwelt</NuxtLink
      >
      auf dem Dach des Bistrogebäudes. Hier findet der Nachwuchs nicht nur
      Kids-Boulder mit extra kleinen Griffen, sondern auch weitere Aktivitäten
      zum Erforschen, Spielen und sich austoben. Für die Kleinsten hat es zudem
      eine gemütliche Spielecke.
    </p>
  </section>

  <section id="grade">
    <h2>Schwierigkreitsgrade</h2>

    <p>
      Die Schwierigkeits-Skala im BOUBA besteht aus den Graden 1 bis 6. In der
      Übersicht unten ist die Übersetzung in die Fontainebleau-Skala
      ersichtlich.
    </p>

    <h3>Was ist ein Schwierigkeitsgrad?</h3>

    <p>
      Der Schwierigkeitsgrad ist eine subjektive Wahrnehmung eines Boulders. Um
      diese zu bestimmen sind physische, technische, koordinative und mentale
      Anforderungen in Kombination ausschlaggebend. Je nach Vorlieben können
      sich Boulder im gleichen Grad unterschiedlich schwer anfühlen. Hast du den
      Eindruck, dass wir uns bei einem Boulder mit der Schwierigkeit völlig
      vertan haben? Gib uns ein Feedback dazu über die
      <a href="https://www.8a.nu/gyms/boulder-baden/topos/bouldering"
        >Vertical-Life App</a
      >.
    </p>

    <Schwierigkeitsgrade />
  </section>

  <section>
    <h2>Kurse und Firmenangebote</h2>

    <h3>Kurse</h3>
    <p>
      Wir bieten dir ein breites Kursangebot: Vom Einführungskurs für deine
      ersten Boulderversuche, über Kindergeburtstage bis hin zum
      aufschlussreichen Technikkurs, um in kniffligen Bouldern Fortschritte zu
      machen. Mehr Infos, Daten und die Anmeldung findest du auf unserer
      Kursseite.
    </p>

    <a
      href="https://gyms.vertical-life.info/boulder-baden/events/list"
      class="button"
      target="_blank"
    >
      Zu den Kursen
    </a>

    <h3>Firmenangebote</h3>
    <p>
      Planst du einen Firmenanlass oder möchtest du euren Mitarbeitenden ein
      sportliches Goodie zur Verfügung stellen? Wir haben das passende Angebot.
    </p>

    <NuxtLink class="button" :to="{ name: 'firmenangebot' }">
      Zum Firmenangebot
    </NuxtLink>
  </section>

  <Impressionen :images="images" />
</template>

<script setup lang="ts">
definePageMeta({
  footer: true,
  navigation: true,
  order: 10,
  title: "Bouldern",
});

const images = Object.values(
  import.meta.glob<{ default: string }>(
    "@/assets/impressionen/bouldern/*.webp",
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
  h1 {
    font-size: clamp(var(--font-size-h2), calc(45vw / 2), var(--font-size-h1));
  }

  #boulderlandschaft h2 {
    font-size: clamp(var(--font-size-h3), calc(19vw / 2), var(--font-size-h2));
  }

  #grade h2 {
    font-size: clamp(var(--font-size-h3), calc(19vw / 2), var(--font-size-h2));
  }
}
</style>
