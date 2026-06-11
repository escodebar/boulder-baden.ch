<template>
  <h1>Neu Hier?</h1>

  <p>
    Ob du gerade erst den Mut fasst, die Matten zu betreten, oder ob du als
    erfahrener Boulderer auf der Suche nach dem nächsten Level bist: Bei uns
    bist du goldrichtig. Das BOUBA ist keine gewöhnliche Kletterwand. Wir sind
    eine Halle, in der die Weltspitze trainiert, während du deine ersten Routen
    meistert. Hier trifft Elite auf Leidenschaft, und das ohne Schnörkel. Egal,
    ob du schon Routen hangelst wie ein Profi oder gerade erst herausfindest,
    wie man sich sicher fallen lässt: Im BOUBA findest du deinen Platz.
  </p>

  <section>
    <h2>Was uns ausmacht</h2>

    <p>
      Die meisten Hallen sind klein, dunkel und überfüllt. Wir machen das
      anders.
    </p>

    <h3>Raum zum Atmen</h3>

    <p>
      Unsere Halle ist gross, hell und bietet so viel Fläche, dass du selten auf
      jemanden stösst. Kein Anstehen, kein Gedränge, einfach Bouldern.
    </p>

    <h3>Probleme für jedes Level</h3>

    <p>
      Unsere Schwierigkeitsverteilung ist breiter als bei fast allen anderen. Du
      findest hier spannende, technisch anspruchsvolle Züge. Egal, ob du gerade
      erst anfängst oder schon lange dabei bist. Anfänger machen hier grosse
      Fortschritte, Fortgeschrittene finden ihre Grenzen.
    </p>

    <h3>Mehr als nur Wände</h3>

    <p>
      Neben dem klassischen Bouldern haben wir eine topmoderne Spraywall, ein
      Kilter und ein Moonboard. Willst du dein Krafttraining erweitern? Wir
      haben Stangen für Calisthenics und einen Fitnessbereich direkt vor Ort.
    </p>
  </section>

  <section>
    <h2>Die BOUBA Community</h2>

    <p>Bei uns ist Bouldern nicht nur Sport, es ist eine Haltung.</p>

    <h3>Elite trifft Einsteiger</h3>
    <p>
      Hier trainiert das junge Regio-Kader wöchentlich. Aber keine Sorge: Wir
      sind keine geschlossene Elite-Gruppe. Bei unseren „Plausch-Wettkämpfen"
      mischen sich die Top-Athleten einfach mit dir. Ja, die Weltspitze kommt
      auch zu dir an die Wand.
    </p>

    <h3>Wettkämpfe & Events</h3>
    <p>
      Wir organisieren regelmässige Events, von regionalen Meisterschaften bis
      zu lockeren Cups. Wenn du mitfiebern oder selbst auf die Matte willst,
      bist du dabei.
    </p>

    <h3>Familie & Kinder</h3>
    <p>
      Wir sind kinderfreundlich, aber keine Babysitting-Station. Unsere
      Kinderwelt ist ein sicherer Bereich für Kids, aber die Eltern bleiben für
      die Aufsicht verantwortlich. Perfekt, um mit den Kleinen zusammen zu
      starten.
    </p>

    <NuxtLink class="button" :to="{ name: 'hallenregeln', hash: '#betreuung' }">
      Detaillierte Betreuungsregeln
    </NuxtLink>
  </section>

  <section>
    <h2>Alles was du wissen musst</h2>
    <p>Bevor du loslegst, hier die Fakten, damit du reibungslos startest.</p>

    <h3>Anreise</h3>
    <Standort />

    <h3>Öffnungszeiten</h3>
    <OeffnungszeitenRegulaer />
    <NuxtLink class="button" :to="{ name: 'oeffnungszeiten' }">
      Überblick der Öffnungszeiten
    </NuxtLink>

    <h3>Ausrüstung</h3>
    <p>
      Bring bequeme Sportkleidung mit. In der kalten Jahreszeit wird es bei uns
      frisch, warme Kleidung ist dann sinnvoll. Hast du keine eigenen
      Boulderschuhe? Kein Problem, wir haben Mietschuhe bereit. Bänder, Gewichte
      und anderes Trainingsmaterial stehen zur Verfügung
    </p>

    <h3>Verpflegung</h3>
    <p>
      Nach dem Training? Das Bistro lädt zum Verweilen ein. Warme Speisen, Eis,
      Kaffee und Getränke sind im Angebot (das Angebot variiert, der Kaffee ist
      exzellent).
    </p>
  </section>

  <section>
    <h2>Dein Start</h2>
    <p>Du bist neugierig? Dann lass uns nicht lange reden.</p>

    <h3>Keine Vorkenntnisse nötig</h3>
    <p>
      Wenn du noch nie gebouldert hast, mach dir keine Sorgen. Unser Personal
      gibt dir direkt vor Ort eine kurze, verständliche Einweisung in die
      Grundlagen (Sicheres Fallen, Greifpunkte). Du startest also nie allein.
    </p>

    <h3>Gratis-Schnupperkurs</h3>
    <p>
      Willst du erst mal reinschnuppern? Jeden Donnerstag und Sonntag bieten wir
      einen kostenlosen Schnupperkurs an. Perfekt, um die Wände, die Regeln und
      die Community zu testen.
    </p>

    <a
      class="button"
      href="https://gyms.vertical-life.info/boulder-baden/events/3584/list"
    >
      Zu den Schnupperkursen
    </a>
  </section>

  <section>
    <h2>Registrierung</h2>

    <p>
      Registriere dich hier vor deinem Besuch direkt online, um Zeit bei ersten
      Check-In zu sparen. Denk daran, deine Daten über das erhaltene E-Mail
      (Achtung: landet gerne im Spam!) nach der Registrierung noch zu
      bestätigen.
    </p>

    <a
      class="button"
      href="https://boulderado.app/register/registration?hash=437e7d2c50a14b5039370d6b8b9d45f70d8bab71"
    >
      Zur Registrierung
    </a>
  </section>

  <section>
    <h2>Regeln</h2>

    <p>
      Wie bei jedem Sport, gibt es auch beim Bouldern ein paar wichtige Regeln.
      Hier eine Übersicht dazu. Bei Fragen steht dir das BOUBA-Team vor Ort
      gerne zur Verfügung.
    </p>

    <NuxtLink class="button" :to="{ name: 'hallenregeln' }">
      Zu den Hallenregeln
    </NuxtLink>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  footer: true,
  navigation: true,
  order: 0,
  title: "Neu Hier?",
});
</script>

<style scoped>
h3 + p {
  text-align: left;
}
</style>
