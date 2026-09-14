<template>
  <h1>Bouldern</h1>

  <p>
    BOUBA setzt sich aus den Worten Boulder und Baden zusammen. Der Name ist bei
    uns Programm und der Spass am Bouldern steht im Mittelpunkt. Dazu findest du
    im BOUBA Wände von sehr steil bis schön plattig mit Boulder-Problemen von
    einfach bis schwer in unterschiedlichen Stilen. Von der technisch kniffligen
    Slab über koordinative Sprünge bis hin zu physisch fordernden
    Boulder-Problemen findest du bei uns alles. Bei den ca. 200 Bouldern im
    BOUBA findet jede und jeder die passenden Herausforderungen.
  </p>

  <section>
    <h2>Boulderlandschaft im BOUBA</h2>

    <p>
      Unsere Halle ist ein Abenteuerland für jeden Level – und sie bewegt sich
      ständig.
    </p>

    <Bereich class="bouldern" />

    <h3>Schraubrhytmus</h3>
    <p>
      Wöchentlich schrauben wir für dich 15-25 neue spannende Boulder. Unser
      Reoutenbau-Team gibt alles und schraubt möglichst vielfältige
      Boulder-Routen in verschiedenen Schwierigkeiten mit spannenden Bewegungen.
    </p>

    <h3>The Slab of the Week</h3>
    <p>Hier erwartet dich wöchentlich eine neue Slab.</p>

    <h3>Für den Nachwuchs</h3>
    <p>
      Für die ganz jungen Boulderinnen und Boulderer hat es eine separate
      <NuxtLink :to="{ name: 'spielen', hash: '#kinderwelt' }"
        >Kinderwelt</NuxtLink
      >
      auf dem Dach des Bistrogebäudes. Hier findet der Nachwuchs Kids-Boulder
      mit extra kleinen Griffabständen, eine tolle Rutsche und einen Gang zum
      Erforschen und Spielen. Für die Kleinsten hat es zudem eine gemütliche
      Spielecke.
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
      Der Schwierigkeitsgrad ist eine subjektive Wahrnehmung eines Boulders. Für
      die Schwierigkeit eines Boulder sind physische, technische, koordinative
      und mentale Anforderungen in Kombination ausschlaggebend. Je nach
      Vorlieben, können siech gleich angeschriebene Boulder für sich selbst
      unterschiedlich schwer anfühlen. Hast du den Eindruck, dass wir uns bei
      einem Boulder mit der Schwierigkeit völlig vertan haben? – Dann gib uns
      ein Feedback dazu über die
      <a href="https://www.8a.nu/gyms/boulder-baden/topos/bouldering"
        >Vertical-Life App</a
      >. Vielen Dank für deine Mithilfe.
    </p>
  </section>

  <section>
    <h2>Kurse und Firmenangebote</h2>

    <h3>Kurse</h3>
    <p>
      Vom Einführungskurs für deine ersten Boulderversuche über
      Kindergeburtstage bis hin zum spannenden Technikkurs, um in kniffligen
      Bouldern Fortschritte zu machen, findest bei uns ein breites Angebot. Mehr
      Infos, Daten und die Anmeldung findest du auf unserer Kursseite.
    </p>

    <NuxtLink class="button" :to="{ name: 'kurse' }"> Zu den Kursen </NuxtLink>

    <h3>Firmenangebotde</h3>
    <p>
      Entdecke unsere Angebote für Firmen. Wir bieten Team-Ausflüge und
      spannende Angebote für Mitarbeiter-Goodies an. Klicke auf den Button für
      mehr Infos.
    </p>

    <NuxtLink class="button" :to="{ name: 'firmenangebot' }">
      Zum Firmenangebot
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  footer: true,
  navigation: true,
  order: 10,
  title: "Bouldern",
});
</script>

<style scoped>
@media (max-width: 767px) {
  h1 {
    font-size: clamp(var(--font-size-h2), calc(45vw / 2), var(--font-size-h1));
  }

  #grade h2 {
    font-size: clamp(var(--font-size-h3), calc(19vw / 2), var(--font-size-h2));
  }
}
</style>
