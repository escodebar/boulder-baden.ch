<template>
  <h1>Neu Hier?</h1>

  <p>
    Bouldern ist ein Sport für alle - Vorkenntnisse sind keine nötig. Die Regeln
    sind einfach und werden dir bei deinem ersten Besuch von uns erklärt.
    Tauchen Fragen auf, helfen wir dir gerne weiter. Bist du noch unsicher und
    möchtest lieber professionell in den Sport eingeführt werden? Dann sind die
    kostenlosen
    <a
      href="https://gyms.vertical-life.info/boulder-baden/events/3584/list"
      target="_blank"
      >Schnupperkurse</a
    >
    das Richtige für dich.
  </p>

  <section>
    <h2>Das musst du wissen</h2>

    <p>Hier sind ein paar nützliche Infos für deinen ersten Besuch:</p>
    <ol>
      <li>
        Lies
        <NuxtLink :to="{ name: 'hallenregeln' }">die Hallenregeln</NuxtLink>
        aufmerksam durch.
      </li>
      <li>
        <a
          href="https://boulderado.app/register/registration?hash=437e7d2c50a14b5039370d6b8b9d45f70d8bab71"
          target="_blank"
          >Registriere dich vorab online</a
        >, dann sparst du Zeit beim ersten Check-in.
      </li>
      <li>
        Nimm bequeme Kleidung mit. Im Winter herrschen in der Halle 10°C. Ein
        Pullover, Trainerhosen und eine Kappe sind ideal, um dich warm zu
        halten.
      </li>
    </ol>
  </section>

  <section>
    <h2>Q&A</h2>
  </section>

  <section>
    <h2>BOUBA</h2>
    <Bereich class="gesamt" />
  </section>

  <Impressionen :images="images" />
</template>

<script setup lang="ts">
definePageMeta({
  footer: true,
  navigation: true,
  order: 0,
  title: "Neu Hier?",
});

const images = Object.values(
  import.meta.glob<{ default: string }>(
    "@/assets/impressionen/neu_hier/*.webp",
    {
      eager: true,
      import: "default",
      query: "?url",
    },
  ),
);
</script>

<style scoped>
h3 + p {
  text-align: left;
}
</style>
