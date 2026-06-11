<template>
  <h1>Trunk und Speiss</h1>

  <p>
    Nach dem Bouldern, dem Training oder einem wilden Spielchen ist das
    BOUBA-Bistro der perfekte Ort, um durchzustarten. Wir glauben: Gutes Essen
    gehört zu einem guten Training. Deshalb bieten wir dir eine Karte, die nicht
    nur satt macht, sondern auch glücklich. Von schnellen Snacks bis zum
    gemütlichen Abendessen – hier wird gekocht, gelacht und genossen.
  </p>

  <section>
    <h2>Angebot</h2>

    <p>
      Unser Angebot ist bewusst klein gehalten, aber dafür umso feiner. Wir
      setzen auf Qualität statt Quantität. Klassiker und Lieblinge, die man
      sonst nirgends findet. Egal, ob du nach dem Training schnell etwas
      Sättigendes brauchst, einen süssen Snack zum Kaffee suchst oder einfach
      nur die Atmosphäre geniessen willst, hier ist für jeden Geschmack etwas
      dabei.
    </p>

    <Linklist :links="links" />
  </section>

  <section id="pizza-flammkuchen">
    <h2>Pizza & Flammkuchen – Klassiker mit Liebe</h2>
    <p>
      Wenn es schnell gehen muss, aber trotzdem schmecken soll: Unsere
      hausgemachten Pizzas und Flammkuchen sind der perfekte Treibstoff. Frische
      Zutaten, knuspriger Boden und jede Menge Geschmack. Bereit, um dich für
      die nächste Runde zu stärken.
    </p>
  </section>

  <section id="muffins">
    <h2>Hauseigene Bananenbrot-Muffins – Das BOUBA-Highlight</h2>
    <p>
      Ein absolutes Muss: Unsere <strong>eigenen Bananenbrot-Muffins</strong>.
      Mit viel Liebe gebacken. Sie sind der perfekte Begleiter zum Kaffee oder
      zum schnellen Aufwärmen. Probiere sie aus, sie sind ein BOUBA-Klassiker,
      den du anderswo nicht findest.
    </p>
  </section>

  <section id="pakoras">
    <h2>Pakoras – Leichte Kost</h2>
    <p>
      Wir haben Pakoras im Angebot. Knusprig, würzig und leicht, perfekt für den
      kleinen Hunger zwischendurch oder als gesunder Snack nach dem Training.
    </p>
  </section>

  <section id="eis">
    <h2>Eis von Gasparini – Süsser Ausklang</h2>
    <p>
      Kein Essen ohne Dessert. Unser Eis kommt von <strong>Gasparini</strong>,
      einem der besten Eiscreme-Hersteller der Schweiz. Ob am Stängel, im Cornet
      oder im Becher: Hier gibt es puren Genuss in jedem Bissen.
    </p>
  </section>

  <section id="sommergrillen">
    <h2>Sommer-Grillen an der Feuerschale – Das Highlight der warmen Monate</h2>
    <p>
      Wenn die Sonne scheint und die Feuerschale glüht, wird das BOUBA-Bistro
      zum Grillplatz der Community. Wir servieren dir frische Bratwürste,
      Cervelats und Haloumi, dazu immer einen knackigen Salat. Das ist mehr als
      nur Essen, das ist ein Event. Komm vorbei, wenn es Sommer ist, und erlebe
      die Atmosphäre, die man nur im BOUBA findet.
    </p>
  </section>

  <section id="events">
    <h2>Events & Plausch – Essen mit Herz</h2>
    <p>
      Bei uns gibt es immer etwas zu feiern. Ob der jährliche
      <strong>Spaghetti-Plausch</strong>, bei dem die ganze Halle zusammenrückt,
      oder die speziellen Menüs während unserer Wettkämpfe. Dann wird hier
      gemeinsam gegessen und gefeiert. Wir passen unser Angebot an die Stimmung
      an, damit du immer etwas Besonderes auf dem Teller hast.
    </p>
  </section>
</template>

<script setup lang="ts">
definePageMeta({
  footer: true,
  navigation: true,
  order: 40,
  title: "Geniessen",
});

const name = "geniessen";

const links = ref([
  { to: { name, hash: "#pizza-flammkuchen" }, name: "Pizza & Flammkuchen" },
  { to: { name, hash: "#muffins" }, name: "Hausgemachte Muffins" },
  { to: { name, hash: "#pakoras" }, name: "Pakoras" },
  { to: { name, hash: "#eis" }, name: "Eis von Gasparini" },
  { to: { name, hash: "#sommergrillen" }, name: "Sommer-Grillen" },
  { to: { name, hash: "#events" }, name: "Events & Plausch" },
]);
</script>
