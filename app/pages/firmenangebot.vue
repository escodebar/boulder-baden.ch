<template>
  <h1>Firmenagebot</h1>

  <p>
    Ob einmaliges Event für das ganze Team oder flexibler Zugang für die
    Mitarbeiter: Im BOUBA gestalten wir Firmenkunden den Alltag und die Events
    so einfach wie möglich. Wir bieten
    <strong>professionelle Team-Events</strong> mit Bouldern und Catering, ein
    <strong>Firmen-Jahresabonnement</strong> für den täglichen Eintritt oder
    eine <strong>monatliche Abrechnung</strong> mit 10% Rabatt. Kein
    Schnickschnack, nur faire Preise, gute Atmosphäre und klare Verträge.
  </p>

  <section>
    <h2>Firmenevents im BOUBA</h2>
    <p>
      Willst du dein Team aus dem Meetingraum holen? Dann komm ins BOUBA. Hier
      gibt es keine PowerPoint-Präsentationen, sondern echte Herausforderungen.
      Wir bieten dir ein Event, das verbindet:
      <strong>Bouldern, Essen und ein Vibe, der bleibt.</strong>
      Egal, ob ihr 10 oder 30 seid, wir machen daraus ein Erlebnis, das ihr
      nicht so schnell wieder vergesst.
    </p>

    <h3>Bouldern statt Besprechungen</h3>
    <p>
      Wir starten direkt an der Wand. Unsere Trainer sind keine langweiligen
      Dozenten, sondern erfahrene Boulderer, die wissen, wie man ein Team
      zusammenhält. Sie zeigen euch nicht nur, wie man fällt, sondern wie man
      sich gegenseitig hilft, Strategien entwickelt und Probleme löst,
      <em>so wie im echten Leben</em>.
    </p>

    <h3>Kein Bouldern für alle?</h3>
    <p>
      Kein Drama. Wer nicht klettern will, kann sich am
      <strong>Ping-Pong-Tisch</strong>, am <strong>Billard</strong> oder mit
      <strong>Darts</strong> messen. Jeder findet seinen Platz, und alle sind
      trotzdem Teil der Gruppe.
    </p>

    <h3>Essen & Relax</h3>
    <p>
      Nach der Action geht’s hoch. Wir reservieren euch exklusiv unsere
      <strong>Indoor-Terrasse</strong> oder, bei gutem Wetter, unseren
      <strong>Garten</strong>. Hier könnt ihr die Beine hochlegen, über die
      „harten" Boulder lachen und gut essen.
    </p>
    <p>
      Wir machen euch ein Apéro oder ein ganzes Catering auf Bestellung, so dass
      ihr den Fokus auf <em>Gemeinschaft</em> legen könnt.
    </p>
  </section>

  <section>
    <h2>Firmen-Jahresabonnement</h2>
    <p>
      Der Allrounder für euer Team. Das Firmen-Jahresabo berechtigt zu einem
      <strong>Eintritt pro Tag</strong> für jeden Mitarbeiter über ein ganzes
      Jahr.
    </p>

    <h3>365 Tage am Stück</h3>
    <p>
      Das Abo ist ab Ausstellungsdatum 365 Tage am Stück gültig. Es kann nicht
      unterbrochen werden und läuft automatisch durch, egal wie oft ihr es
      nutzt.
    </p>

    <h3>Zahlung & Bedingungen</h3>
    <p>
      Die Bezahlung erfolgt bequem per Rechnung oder, auf Wunsch, direkt vor
      Ort. Bitte beachtet: Das Abo ist nicht zurückerstattbar, auch keine
      Teilrückzahlung ist ausgeschlossen. Das gilt unabhängig davon, wie viele
      Tage das Abo tatsächlich genutzt wird.
    </p>

    <p>
      Ideal, wenn ihr euren Mitarbeitern einen festen, täglichen Zugang bieten
      wollt, ohne monatliche Abrechnungen.
    </p>
  </section>

  <section>
    <h2>Eintritte mit monatlicher Abrechnung</h2>
    <p>
      Flexibel und transparent. Firmen melden sich per E-Mail an
      <strong>info@boulder-baden.ch</strong> an und profitieren sofort von
      <strong>10% Rabatt</strong> auf die Eintrittspreise.
    </p>

    <h3>Zentrale Abrechnung</h3>
    <p>
      Ihr erhaltet eine zentrale Rechnung für alle Eintritte eurer Mitarbeiter.
      Keine Einzelbelege, keine Verwirrung, einfach eine Übersicht für die
      Buchhaltung.
    </p>

    <h3>Flexibilität & Transparenz</h3>
    <p>
      Ihr bestimmt selbst, welche Einschränkungen gelten (z.B. nur Montag bis
      Freitag). Zur Kontrolle erhaltet ihr zusätzlich zur Rechnung eine Liste
      mit allen Besuchen inkl. Name, Datum und Uhrzeit. So seid ihr immer
      sicher, was ihr bezahlt.
    </p>

    <p>
      Diese Lösung ist perfekt, wenn eure Mitarbeiter gerne als Gruppe
      gleichzeitig bouldern gehen oder ihr ein flexibles Modell ohne
      Jahresbindung sucht.
    </p>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Firmenangebot",
});
</script>

<style scoped>
@media (max-width: 767px) {
  h1 {
    font-size: clamp(var(--font-size-h2), calc(64vw / 5), var(--font-size-h1));
  }
}
</style>
