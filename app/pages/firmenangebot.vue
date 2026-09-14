<template>
  <h1>Firmenagebot</h1>

  <section>
    <h2>Team-Ausflug</h2>
    <p>
      Nimm dein Team mit auf einen unvergesslichen Ausflug ins BOUBA. Ihr werdet
      professionell ins Bouldern eingeführt von unseren Kursleitern. Nach der
      Einführung begleitet euch der Kursleiter für total eine Stunde. Im
      Anschluss bouldert ihr so lange ihr möchtet selbständig weiter. Je nach
      eurem Wunsch, organisieren wir gerne ein Catering für nach dem Bouldern
      oder wir verwöhnen euch in unserem Bistro mit Pinsas und einer breiten
      Auswahl an Getränken. Sende uns eine Anfrage via Kontaktformular, wir
      melden uns in Kürze bei dir.
    </p>

    <form method="post" action="" accept-charset="UTF-8">
      <label for="company">Name Firma</label>
      <input type="text" id="company" name="company" required />

      <label for="spokesperson">Ansprechperson</label>
      <input type="text" id="last-name" name="last-name" required />

      <label for="email">E-Mail</label>
      <input type="email" id="email" name="email" required />

      <label for="catering">
        <span>mit Essen: ja/nein?</span>
        <input
          type="checkbox"
          id="catering"
          name="catering"
          value="Ja"
          checked
        />
      </label>

      <input type="submit" value="Submit" />
    </form>
  </section>

  <section>
    <h2>Firmen-Jahresabo</h2>
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
