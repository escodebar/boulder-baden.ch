<template>
  <h1>Trainieren</h1>

  <p>
    Bouldern ist ein super Sport, um den ganzen Körper zu stärken. Aber auch für
    Boulderinnen und Boulderer bietet ein Krafttraining zur
    Verletzungsprävention und für den Kraftaufbau viele Vorteile. Deshalb haben
    wir einen Fitnessbereich, einen Calisthenics Park und mehrere
    Systemboulderwände in der Halle. So sind deinem Training keine Grenzen
    gesetzt.
  </p>

  <section>
    <h2>Angebot</h2>

    <p>
      Alles, was du brauchst, um dein Training auf das nächste Level zu heben,
      findest du hier gebündelt.
    </p>

    <Bereich class="trainieren" />

    <Linklist class="angebot" :links="links" />
  </section>

  <section id="kilterboard">
    <h2>Kilterboard</h2>

    <p>
      Das Kilter Board bietet Neigungen von 15° bis 60° wodurch es sich für
      Anfänger bis Profis etabliert hat.
    </p>

    <ul>
      <li>
        <a
          class="button"
          href="https://apps.apple.com/us/app/kilter-board-climbing-wall-app/id6755110303"
        >
          Kilter im Apple Store
        </a>
      </li>

      <li>
        <a
          class="button"
          href="https://play.google.com/store/apps/details?id=com.kiltergrips.kilter_board_app"
        >
          Kilter im Google Play Store
        </a>
      </li>
    </ul>
  </section>

  <Carousel
    :images="[
      '/impressionen/home/2.png',
      '/impressionen/home/3.png',
      '/impressionen/home/4.png',
      '/impressionen/home/6.png',
      '/impressionen/home/7.png',
      '/impressionen/home/8.png',
    ]"
  />

  <section id="moonboard">
    <h2>Moonboard</h2>

    <p>
      Das Moon board ist der Klassiker unter den Systemwänden. Bei 40° Neigung
      bietet es ideale Voraussetzungen für ambitionierte Boulderinnen und
      Boulderer.
    </p>

    <ul>
      <li>
        <a
          class="button"
          href="https://apps.apple.com/us/app/moon-board/id6446842142"
        >
          Mooboard im Apple Store
        </a>
      </li>

      <li>
        <a
          class="button"
          href="https://play.google.com/store/apps/details?id=com.trainingboard.moon"
        >
          Moonboard im Google Play Store
        </a>
      </li>
    </ul>
  </section>

  <section id="spraywall">
    <h2>Spraywall</h2>

    <p>
      An unserer Spraywall mit 42° Neigung sind deiner Kreativität keine Grenzen
      gesetzt. Boulderkreationen von anderen findest du in der Retro Flash App.
    </p>

    <ul>
      <li>
        <a
          class="button"
          href="https://apps.apple.com/de/app/retro-flash-climbing/id1519582483"
        >
          Retro Flash im Apple Store
        </a>
      </li>

      <li>
        <a
          class="button"
          href="https://play.google.com/store/apps/details?id=com.arcadebouldering.system_wall"
        >
          Retro Flash im Google Play Store
        </a>
      </li>
    </ul>
  </section>

  <section id="campus-hangboard">
    <h2>Campus & Hangboard</h2>

    <p>
      An unserem Campusboard und den Hangboards findest du alles, um deine
      Fingerkraft auf das nächste Level zu bringen.
    </p>
  </section>

  <section id="fitnessbereich">
    <h2>Fitnessbereich</h2>

    <p>
      In diesem Bereich findest du eine Rudermaschine, Zuggeräte und alles für
      ein ausgiebiges Lang- und Kurzhanteltraining.
    </p>
  </section>

  <section id="stangenpark">
    <h2>Stangenpark</h2>

    <p>
      Der Stangenpark bietet unzählige Möglichkeiten für Bodyweight-Übungen.
    </p>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  footer: true,
  navigation: true,
  order: 20,
  title: "Trainieren",
});

const name = "trainieren";

const links = ref([
  { to: { name, hash: "#kilterboard" }, name: "Kilterboard" },
  { to: { name, hash: "#moonboard" }, name: "Moonboard" },
  { to: { name, hash: "#spraywall" }, name: "Spraywall" },
  { to: { name, hash: "#campus-hangboard" }, name: "Campus & Hangboard" },
  { to: { name, hash: "#fitnessbereich" }, name: "Fitnessbereich" },
  { to: { name, hash: "#stangenpark" }, name: "Stangenpark" },
]);
</script>

<style scoped>
@media (max-width: 767px) {
  h1 {
    font-size: clamp(var(--font-size-h2), calc(21vw), var(--font-size-h1));
  }
}

@media (min-width: 768px) {
  ul {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr;
  }

  ul.angebot {
    grid-template-columns: 1fr 1fr 1fr;
  }

  a.button {
    width: clamp(300px, 40vw, 360px);
  }

  #kilterboard .button,
  #moonboard .button,
  #spraywall .button {
    display: none;
  }
}
</style>
