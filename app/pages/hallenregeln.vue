<template>
  <h1>Hallenregeln</h1>

  <p>
    Wir sind hier, um Spass zu haben und gemeinsam zu wachsen. Damit alle
    ungehindert bouldern und eine gute Zeit haben können, gibt es ein paar
    einfache Regeln. Sie stellen sicher, dass die Matte ein sicherer Sturzraum
    ist und dir niemand auf den Kopf fällt.
  </p>

  <section id="sicherheit">
    <h2>Sicherheit</h2>

    <p>
      Hier bouldern wir hart, aber sicher. Damit niemand verletzt wird und wir
      alle lange Spass haben, gelten ein paar einfache Grundsätze. Es geht nicht
      darum, euch einzuschränken, sondern darum, dass die Halle immer ein
      sicherer Ort bleibt, für euch und alle anderen.
    </p>

    <ul>
      <li>Wer bereits an der Wand bouldert, hat Vorrang</li>
      <li>Wärme dich vor dem Bouldern gut auf</li>
      <li>Renne nicht auf den Matten</li>
      <li>Top-Out ist nicht erlaubt</li>
      <li>Lasse nichts auf der Matte liegen</li>
      <li>Nehmt immer Rücksicht aufeinander</li>
    </ul>
  </section>

  <section id="sauberkeit">
    <h2>Sauberkeit</h2>
    <ul>
      <li>Kein unnötiges Verteilen von Magnesia in der Luft</li>
      <li>Verschmutze Griffe mit der Bürste reinigen</li>
      <li>Nicht Barfuss klettern</li>
    </ul>
  </section>

  <section id="betreuung">
    <h2>Kinder & Aufsicht</h2>
    <ul>
      <li>
        Eine erwachsene Person darf maximal drei Kinder und Jugendliche unter 14
        Jahren beaufsichtigen
      </li>
      <li>
        Die Begleitperson ist verpflichtet, die Kinder permanent zu
        beaufsichtigen.
      </li>
      <li>
        Benützung des Stangenparks und Fitnessbereichs ist erst ab 14 Jahren
        erlaubt
      </li>
      <li>
        Der Boulderbereich ist kein Spielbereich, dafür haben wir die
        Kinderwelt.
      </li>
      <li>
        Herumrennen ist im Boulderbereich verboten. Wiederholte Verstösse können
        einen Hallenverweis zur Folge haben.
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  footer: true,
  order: 130,
  title: "Hallenregeln",
});
</script>

<style scoped>
li {
  text-align: left;
}

@media (max-width: 767px) {
  h1 {
    font-size: clamp(var(--font-size-h2), calc(65vw / 4), var(--font-size-h1));
  }
}
</style>
