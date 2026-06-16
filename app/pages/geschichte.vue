<template>
  <h1>Unsere Geschichte</h1>

  <ol>
    <li>
      <time datetime="2020-04">April 2020</time>

      <h2>Die Idee entsteht beim Bouldern</h2>

      <p>
        Die Idee für BOUBA entstand während dem ersten Lockdown. Beim Bouldern
        in einem umfunktionierten Dachstock in Unterlunkhofen sprachen wir
        darüber, dass es in Baden noch keine Möglichkeit zum Klettern gibt.
      </p>

      <p>
        Für uns war klar: es ist nur eine Frage der Zeit, bis in Baden eine
        Kletteranlage entsteht. Daraufhin erstellten wir ein grobes Konzept und
        hielten unsere Beweggründe für dieses Projekt schriftlich fest.
      </p>
    </li>
    <li>
      <time datetime="2020-08">August 2020</time>
      <h2>Erstes Gespräch mit Vermieterin Loacker</h2>

      <p>
        Nach einigen Monaten fanden wir mit dem ehemaligen Ferro-Areal eine
        traumhafte Location für BOUBA. Mit den Gleisen direkt neben der Halle,
        umgeben von viel Grünfläche bleiben kein Wünsche mehr offen.
      </p>

      <p>
        So nahm das Projekt Fahrt auf. Es galt, den Vermieter von unserer Idee
        zu überzeugen und wir begannen mit der Investorensuche. Somit erstellten
        wir nächtelang einen detaillierten Businessplan für das grosse Vorhaben.
      </p>
    </li>
    <li>
      <time datetime="2020-11">November 2020</time>
      <h2>Investoren und Bank machen Finanzierung realistisch</h2>

      <p>
        Mit all unserem Erspartem würde es gerade so für die Gründung der Firma
        reichen. Aus dem nahen Umfeld bekamen wir erste Darlehen zugesichert. Es
        dauerte wieder mehrere Monate, bis wir mit der Eglin Group einen ersten
        grösseren Darlehensgeber und Unterstützer ins Boot holen konnten. Im
        Dezember 2020 sicherte uns auch eine Bank ihre finanzielle Unterstützung
        zu. Da wurde uns bewusst, dass wir einen sehr straffen Zeitplan
        einhalten müssen. Das Areal wird per 1. Juli 2021 frei.
      </p>
    </li>
    <li>
      <time datetime="2021-03">März 2021</time>
      <h2>Gründung Bouba AG und Unterzeichnung Mietvertrag</h2>

      <p>
        Somit bereiteten wir die Gründung der Firma vor und trieben die
        Verhandlungen mit dem Vermieter voran. Im März 2021 haben wir die Bouba
        AG gegründet und den Mietvertrag unterschrieben. Von hier an wurde aus
        der wagen Idee im Boulderraum ein reales Projekt.
      </p>

      <p>
        Nun standen viele Dinge an, unter anderem das Baugesuch, Finden von
        Partnern für den Bau der Anlage und das Wichtigste, wir mussten anfangen
        BOUBA ein Gesicht zu geben.
      </p>
    </li>
    <li>
      <time datetime="2021-05">Juni 2021</time>
      <h2>Launch Website, Crowdfunding und Social Media</h2>

      <p>
        Wir freuen uns, dass wir ab jetzt für alle online ersichtlich sind. Auf
        der Webseite, Instagram und Facebook halten wir euch auf dem Laufenden.
      </p>
    </li>
    <li>
      <time datetime="">1. Juli 2021</time>
      <h2>Baustart</h2>

      <p>
        Der nächste Meilenstein ist der Einzug auf dem Ferro-Areal am 1. Juli
        2021. Von da an sind wir am Bauen. Als erstes bereiten wir das Gelände
        mit diversen Abriss- und Reinigungsarbeiten für den Bau vor.
      </p>

      <p>
        Im August beginnt der Bau des Bistrogebäudes und der Boulderwände in der
        Halle. Im September folgen die Matten. Im Oktober wird das Bistrogebäude
        fertiggestellt und wir können endlich die schönen Griffe an die neuen
        Wände schrauben.
      </p>
    </li>
    <li>
      <time datetime="2021-08">ab August 2021</time>
      <h2>Bau Bistrogebäude und Boulderwände</h2>

      <h2>Installation der Bouldermatten</h2>

      <h2>Fertigstellung der Bauten, Routenbau</h2>
    </li>
    <li>
      <time datetime="2021-11-20">20. November 2021</time>
      <h2>Eröffnung</h2>
    </li>
  </ol>
</template>

<script setup lang="ts">
definePageMeta({
  footer: true,
  order: 110,
  title: "Unsere Geschichte",
});
</script>

<style scoped>
li {
  border-bottom: 1px solid var(--color-text);
  margin-bottom: var(--font-size-h2);
}

li:last-child {
  border-bottom: none;
}

@media (max-width: 767px) {
  h1 {
    font-size: clamp(var(--font-size-h2), calc(18vw), var(--font-size-h1));
  }
  h2 {
    font-size: clamp(var(--font-size-h3), calc(10vw), var(--font-size-h2));
  }
}
</style>
