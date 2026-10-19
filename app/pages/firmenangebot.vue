<template>
  <h1>Firmenagebot</h1>

  <section>
    <h2>Team-Ausflug</h2>
    <p>
      Nimm dein Team mit auf einen unvergesslichen Ausflug ins BOUBA. Ihr werdet
      von unseren Kursleitern professionell ins Bouldern eingeführt. Nach der
      Einführung begleitet euch der Kursleiter für eine Stunde beim freien
      Bouldern und kann euch individuell Tipps geben. Im Anschluss bouldert ihr
      so lange ihr möchtet selbständig weiter. Je nach Wunsch organisieren wir
      ein Catering oder wir verwöhnen euch in unserem Bistro mit Pinsen,
      Flammkuchen, Snacks und einer breiten Auswahl an Getränken. Sende uns eine
      Anfrage via Kontaktformular, damit wir deinen Anlass individuell planen
      können.
    </p>

    <form method="post" action="" accept-charset="UTF-8">
      <label for="company">Name Firma</label>
      <input type="text" id="company" name="company" required />

      <label for="spokesperson">Ansprechperson</label>
      <input type="text" id="last-name" name="last-name" required />

      <label for="email">E-Mail</label>
      <input type="email" id="email" name="email" required />

      <label for="catering">mit Essen</label>
      <div class="radio-group">
        <label class="button">
          <input type="radio" name="catering" value="ja" checked />
          Ja
        </label>
        <label class="button">
          <input type="radio" name="catering" value="nein" />
          Nein
        </label>
      </div>

      <button type="submit">Absenden</button>
    </form>
  </section>

  <section>
    <h2>Zwei Eintrittsmodelle für Firmen</h2>
    <p>
      Wir bieten ein Firmen-Jahresabo oder ein monatliches Rabattmodell für
      Einzeleintritte. Je nach Situation passt das eine oder andere Modell
      besser zu euren Bedürfnissen
    </p>

    <hr />

    <h3>365 Tage am Stück</h3>
    <p>
      Das Abo ist ab Ausstellungsdatum 365 Tage am Stück gültig. Es kann nicht
      unterbrochen werden und läuft automatisch durch, egal wie oft ihr es
      nutzt.
    </p>

    <h4>Zahlung & Bedingungen</h4>
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

    <hr />

    <h3>Eintritte mit monatlicher Abrechnung</h3>
    <p>
      Flexibel und transparent. Firmen melden sich per E-Mail an
      <strong>info@boulder-baden.ch</strong> an und profitieren sofort von
      <strong>10% Rabatt</strong> auf die Eintrittspreise.
    </p>

    <h4>Monatliche Abrechnung</h4>
    <p>
      Ihr erhaltet eine zentrale, kumulierte Rechnung über alle Eintritte eurer
      Mitarbeitenden. Keine Einzelbelege, kein Durcheinander für die
      Buchhaltung.
    </p>

    <h4>Flexibel und transparent</h4>
    <p>
      Ihr bestimmt selbst, wann eure Eintritte gelten (z.B. nur Montag-Freitag
      zwischen 11 und 15 Uhr). Zur Kontrolle erhaltet ihr mit der Rechnung die
      Liste mit den Personen (Name, Datum und Uhrzeit), für die ihr die
      Eintritte bezahlt.
    </p>

    <p>
      Ideal, wenn eure Mitarbeitenden als Gruppe gleichzeitig bouldern gehen
      oder ihr ein flexibles Modell ohne Jahresbindung sucht.
    </p>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  title: "Firmenangebot",
});
</script>

<style scoped>
h1 {
  margin-bottom: 0;
}

hr {
  margin: var(--font-size-h2) auto;
}

form {
  display: grid;
  grid-template-columns: 1fr 360px 1fr;
  font-size: var(--font-size-h4);
  gap: 1rem;
  align-items: center;
}

form > * {
  line-height: 3rem;
}

form label {
  grid-column: 1;
  border-bottom: 1px solid var(--color-text);
  text-align: left;
}

form input {
  border: 1px solid var(--color-text);
  border-radius: 0;
  font-size: var(--font-size-h4);
}

form button {
  grid-column: 2;
  font-size: var(--font-size-p);
  font-weight: 300;
  margin: 0;
}

form button::after {
  content: "→";
}

form .radio-group {
  display: flex;
  gap: 1em;
  vertical-align: center;
}

form .radio-group label {
  flex: 1;
}

form .radio-group .button:hover {
  line-height: 42px;
}

form .radio-group input[type="radio"] {
  appearance: none;
  border: 1px solid var(--color-text);
  width: 18px;
  height: 18px;
  margin: auto 0.5em;
}

form .radio-group input[type="radio"]:checked {
  appearance: none;
  background: var(--color-text);
}

@media (max-width: 767px) {
  h1 {
    font-size: clamp(var(--font-size-h2), calc(64vw / 5), var(--font-size-h1));
  }
}
</style>
