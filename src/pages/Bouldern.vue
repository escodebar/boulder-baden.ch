<template>
  <h1>On the wall</h1>

  <section>
    <p>
      Bei uns findest du um die 200 Boulder auf 1000 m^2 Boulderfläche.
      Zusätzlich findest du im BOUBA ein Kilter- und Moonboard, eine moderne
      Spraywall und eine separate Kinderwand für den Nachwuchs.
    </p>
  </section>

  <section>
    <h2>Kurse</h2>

    <hr />

    <RouterLink class="button" :to="{ name: 'Kurse' }">
      Zu den Kursen
    </RouterLink>
  </section>

  <section>
    <h2>Schwierigkreitsgrade</h2>

    <hr />

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
</template>
