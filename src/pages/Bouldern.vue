<template>
  <h1>Bouldern</h1>

  <p>
    Bei uns findest du um die 200 Boulder auf 1000 m^2 Boulderfläche. Zusätzlich
    findest du im BOUBA ein Kilter- und Moonboard, eine moderne Spraywall und
    eine separate Kinderwand für den Nachwuchs.
  </p>

  <section>
    <h2>Schwierigkreitsgrade</h2>

    <p>
      Unsere Schwierigkeits-Skala besteht aus den Graden 1 bis 6. In der
      Übersicht unten ist die Übersetzung in die Fontainebleau-Skala
      ersichtlich. Der Schwierigkeitsgrad ist eine subjektive Wahrnehmung eines
      Boulders. Hast du den Eindruck, dass wir uns bei einem Boulder mit der
      Schwierigkeit völlig vertan haben? Dann gib uns ein Feedback dazu auf der
      <a href="https://www.8a.nu/gyms/boulder-baden/topos/bouldering">
        Vertical-Life App
      </a>
      . Je mehr Rückmeldungen wir erhalten, desto genauer können wir die Grade
      der Boulder anschreiben. Danke für deine Mithilfe.
    </p>
  </section>

  <section>
    <h2>Schraubzyklus</h2>

    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>
  </section>

  <section>
    <h2>Kurse</h2>

    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>

    <RouterLink class="button" :to="{ name: 'Kurse' }">
      Zu den Kursen
    </RouterLink>
  </section>

  <section>
    <h2>Firmenangebot</h2>

    <p>
      Sport, gutes Essen und schöne Momente zusammen. Das erwartet euch bei
      einem Firmenevent im BOUBA.
    </p>

    <RouterLink class="button" :to="{ name: 'Firmenangebot' }">
      Zum Firmenangebot
    </RouterLink>
  </section>

  <section>
    <h2>Boardtraining</h2>

    <p>
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
      voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
      clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
      nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
      diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
      sit amet.
    </p>

    <RouterLink class="button" :to="{ name: 'Trainieren' }">
      Zu den Trainingseinrichtungen
    </RouterLink>
  </section>
</template>

<script setup lang="ts">
import Eintrittspreise from "@/components/Eintrittspreise.vue";
</script>
