<template>
  <h1>Bouldern</h1>

  <p>
    Hier geht es um das, wofür wir stehen: Spass, Herausforderung und Community.
    Egal, ob du zum ersten Mal die Matten betrittst oder schon seit Jahren die
    Wände eroberst, bei uns findest du deine Herausforderung.
  </p>

  <p>
    Wir bieten dir <strong>200 Boulder auf 1000 m² Fläche</strong>. Viel Raum,
    wenig Gedränge und genug Optionen, um dich auszutoben. Aber wir haben noch
    mehr im Gepäck als nur Wände.
  </p>

  <section>
    <h2>Die Wände & Die Vielfalt</h2>

    <p>
      Unsere Halle ist ein Abenteuerland für jeden Level – und sie bewegt sich
      ständig.
    </p>

    <h3>Nie langweilig</h3>
    <p>
      Wir schrauben wöchentlich diensttags 1 bis 2 Sektoren komplett neu um. Das
      sind <strong>8 bis 16 neue Boulder</strong> pro Woche, die auf dich
      warten. Die Halle ist also nie statisch, sondern ein lebendiges
      Trainingsfeld.
    </p>

    <h3>Wettkampf-Feeling</h3>
    <p>
      Bei unseren Events wird ein grosser Teil der Halle komplett neu
      geschraubt. Du hast die Chance, auf absolut frischen, oft extrem
      anspruchsvollen Routen zu bouldern, die so nur selten zu finden sind.
    </p>

    <h3>The Slab of the Week</h3>
    <p>
      Ein fester Begriff in unserer Community. Jeden Woche setzen wir im
      Mezzanin den "Slab of the Week". Der Schwierigkeitsgrad variiert immer:
      mal hart, mal technisch, mal verrückt. Jeder neue Slab will dir etwas
      Neues beibringen. Schau vorbei, probier aus, was er zu bieten hat.
    </p>

    <h3>Für den Nachwuchs</h3>
    <p>
      Die Kleinen sind nicht vergessen. Wir haben eine
      <NuxtLink :to="{ name: 'spielen', hash: '#kinderwelt' }">
        separate Kinderwelt </NuxtLink
      >, die speziell auf ihre Grösse und Fähigkeiten zugeschnitten ist. Hier
      können sie sicher starten, während die Grossen ihre Probleme lösen.
    </p>
  </section>

  <section>
    <h2>Schwierigkreitsgrade</h2>

    <p>
      Unsere Skala reicht von <strong>Grad 1 (Anfängerfreundlich)</strong> bis
      <strong>Grad 6 (Elite)</strong>. Damit du dich orientieren kannst, findest
      du unten eine Übersicht, wie unsere Grade in die bekannte
      Fontainebleau-Skala übersetzt werden.
    </p>

    <p>
      Bouldern ist subjektiv. Ein Boulder kann für dich leicht sein, für einen
      anderen unmöglich. Hast du den Eindruck, wir liegen bei einem Grad völlig
      daneben? Dann gib uns Feedback! Nutze dafür einfach die
      <a href="https://www.8a.nu/gyms/boulder-baden/topos/bouldering">
        Vertical-Life App </a
      >. Je mehr Rückmeldungen wir sammeln, desto genauer passen wir die Grade
      an. Danke für deine Mithilfe!
    </p>
  </section>

  <section>
    <h2>Training & Kurse: Vom Anfänger zum Profi</h2>
    <p>
      Du willst nicht nur bouldern, sondern dich verbessern? Wir bieten dir die
      passenden Wege.
    </p>

    <h3>Kurse</h3>
    <p>
      Egal ob du ganz neu bist (Schnupperkurse) oder deine Technik verfeinern
      willst – bei uns gibt es Kurse für Erwachsene und Kinder. (Details zu den
      Kurszeiten und Inhalten findest du auf der separaten Kurs-Seite).
    </p>

    <NuxtLink class="button" :to="{ name: 'kurse' }"> Zu den Kursen </NuxtLink>

    <h3>Boardtraining</h3>
    <p>
      Du willst dein Training auf das nächste Level heben? Wir bieten dir eine
      <strong>moderne Spraywall</strong>, ein <strong>Kilterboard</strong> und
      ein <strong>Moonboard</strong>. Hier kannst du an deiner Dynamik, deiner
      Kraft und deiner Präzision feilen. Auch kannst du gezielt am Hangboard,
      Campusboard oder an deinen Trainingseinheiten. Unser Bereich dafür ist für
      alle offen, die ihr Training selbst in die Hand nehmen wollen.
    </p>

    <NuxtLink class="button" :to="{ name: 'trainieren' }">
      Zu den Trainingseinrichtungen
    </NuxtLink>
  </section>

  <section>
    <h2>Firmenangebot</h2>

    <p>
      Bist du auf der Suche nach einem Event, das nicht nach „normalem Meeting"
      schmeckt? Sport, gutes Essen und schöne Momente, das erwartet dich bei
      einem Event im BOUBA. Wir bieten dir einen Rahmen, in dem dein Team
      zusammenwächst.
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
