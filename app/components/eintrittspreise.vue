<template>
  <figure>
    <table>
      <template v-if="inverted">
        <thead>
          <tr>
            <th></th>
            <th v-for="abo in Abos" scope="col">
              {{ abo }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="stufe in Alterstufen">
            <th scope="row">{{ stufe }}</th>
            <td v-for="abo in Abos">{{ eintrittspreise[stufe]?.[abo] }}</td>
          </tr>
        </tbody>
      </template>
      <template v-else>
        <thead>
          <tr>
            <th></th>
            <th v-for="stufe in Alterstufen" scope="col">
              {{ stufe }}
            </th>
          </tr>
          <tr>
            <td></td>
            <td v-for="stufe in Alterstufen" scope="col">
              {{ erläuterung[stufe] }}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="abo in Abos">
            <th scope="row">{{ abo }}</th>
            <td v-for="stufe in Alterstufen">
              {{ eintrittspreise[stufe]?.[abo] }}
            </td>
          </tr>
        </tbody>
      </template>
    </table>
    <figcaption>
      Studierende bis 28 Jahre zahlen den Tarif der 18 bis 20-Jährigen.
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    inverted?: boolean;
    visibleAbos?: string[];
    visibleAlterstufen?: string[];
  }>(),
  {
    visibleAbos: () => [],
    visibleAlterstufen: () => [],
  },
);

const allAlterstufen = [
  "Erwachsen",
  "Ermässigt",
  "Jugend",
  "Kinder",
  "Mini",
  "Firmen",
];

const erläuterung = ref({
  Erwachsen: "Ab 21 Jahre",
  Ermässigt: "18 bis 20 Jahre",
  Jugend: "11 bis 17 Jahre",
  Kinder: "5 bis 10 Jahre",
  Mini: "1 bis 4 Jahre",
});

const allAbos = [
  "Einzeleintritt",
  "Familieneintritt",
  "12-er Abo",
  "Zweijahresabo",
  "Jahresabo",
  "Halbjahresabo",
  "3 Monate",
  "1 Monat",
];

const Alterstufen = computed(() =>
  props.visibleAlterstufen.length
    ? allAlterstufen.filter((a) => props.visibleAlterstufen.includes(a))
    : allAlterstufen,
);

const Abos = computed(() =>
  props.visibleAbos.length
    ? allAbos.filter((a) => props.visibleAbos.includes(a))
    : allAbos,
);

const eintrittspreise = ref({
  Erwachsen: {
    Einzeleintritt: "24",
    Familieneintritt: "20",
    "12-er Abo": "264",
    Zweijahresabo: "1720",
    Jahresabo: "940",
    Halbjahresabo: "710",
    "3 Monate": "370",
    "1 Monat": "185",
  },
  Ermässigt: {
    Einzeleintritt: "20",
    Familieneintritt: "",
    "12-er Abo": "220",
    Zweijahresabo: "1320",
    Jahresabo: "730",
    Halbjahresabo: "560",
    "3 Monate": "320",
    "1 Monat": "145",
  },
  Jugend: {
    Einzeleintritt: "20",
    Familieneintritt: "",
    "12-er Abo": "220",
    Zweijahresabo: "1200",
    Jahresabo: "630",
    Halbjahresabo: "470",
    "3 Monate": "260",
    "1 Monat": "125",
  },
  Kinder: {
    Einzeleintritt: "14",
    Familieneintritt: "10",
    "12-er Abo": "154",
    Zweijahresabo: "820",
    Jahresabo: "440",
    Halbjahresabo: "340",
    "3 Monate": "200",
    "1 Monat": "90",
  },
  Mini: {
    Einzeleintritt: "10",
    Familieneintritt: "5",
    "12-er Abo": "100",
    Zweijahresabo: "",
    Jahresabo: "",
    Halbjahresabo: "",
    "3 Monate": "",
    "1 Monat": "",
  },
  Firmen: {
    Einzeleintritt: "",
    "12-er Abo": "",
    Zweijahresabo: "",
    Jahresabo: "1900",
    Halbjahresabo: "",
    "3 Monate": "",
    "1 Monat": "",
  },
});
</script>

<style scoped>
figure {
  display: flex;
  flex-direction: column;
}

table {
  border-collapse: collapse;
}

thead th {
  text-align: right;
}

th,
td {
  padding: 0.25em 0.5em;
}

th {
  text-align: left;
}

td {
  text-align: right;
}

tbody th,
tbody td {
  border-bottom: 0.5px solid var(--color-text);
}

tbody tr:last-child th,
tbody tr:last-child td {
  border-bottom: 0;
}

@media (max-width: 767px) {
  table {
    border-collapse: collapse;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  thead th:first-child,
  thead td:first-child,
  tbody th {
    background: var(--color-base);
    padding-left: 0;
    position: sticky;
    left: 0;
    z-index: var(--layer-hover);
  }

  thead th:last-child,
  tbody td:last-child {
    padding-right: 0;
  }
}
</style>
