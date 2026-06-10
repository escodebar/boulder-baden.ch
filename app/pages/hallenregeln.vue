<template>
  <h1>Hallenregeln</h1>

  <p>
    Wir sind hier, um Spass zu haben und gemeinsam zu wachsen. Damit jeder hier
    glücklich bouldert, sicher fällt und gute Laune hat, gibt es ein paar
    einfache Regeln. Sie dienen nicht dazu, euch zu ärgern, sondern um
    sicherzustellen, dass die Matte für alle da ist und dass niemand auf dem
    Kopf landet.
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
    </ul>
  </section>

  <section id="sauberkeit">
    <h2>Rücksicht & Sauberkeit</h2>
    <ul>
      <li>Verteile nicht unnötig Magnesia in der Luft</li>
      <li>Reinige verschmutze Griffe mit der Bürste</li>
      <li>Nehmt immer Rücksicht aufeinander</li>
      <li>Klettere nicht Barfuss</li>
    </ul>
  </section>

  <section id="betreuung">
    <h2>Kinder & Aufsicht</h2>
    <ul>
      <li>
        Kinder bis und mit 13 Jahren dürfen nur unter Beaufsichtigung einer
        erwachsenen Person bouldern
      </li>
      <li>Eine erwachsene Person darf maximal drei Kinder beaufsichtigen</li>
      <li>
        Benützung des Stangenpark und Fitnessbereich ist erst ab 14 Jahren
        erlaubt
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
