<template>
  <h2>Öffnungszeiten</h2>

  <section>
    <h3>Reguläre Öffnungzeiten</h3>
    <dl>
      <dt>Montag bis Freitag</dt>
      <dd>11 bis 23</dd>
      <dt>Samstag & Sonntag</dt>
      <dd>10 bis 19</dd>
    </dl>
  </section>

  <section>
    <h3>Besondere Öffnungszeiten</h3>

    <dl>
      <template v-for="holiday in holidays">
        <dt>{{ holiday.localName }} ({{ formatDate(holiday.date) }})</dt>
        <dd v-if="holiday.localName === 'Heiligabend'">9 bis 16</dd>
        <dd
          v-else-if="['Neujahr', 'Berchtoldstag'].includes(holiday.localName)"
        >
          12 bis 20
        </dd>
        <dd v-else>10 bis 19</dd>
      </template>
    </dl>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

interface APIHoliday {
  date: string;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: string[] | null;
  launchYear: number | null;
  types: string[];
}

interface Holiday {
  date: string;
  localName: string;
}

const holidays = ref<Holiday[]>([]);
const loading = ref<boolean>(false);
const error = ref<string>("");

const year = new Date().getFullYear();
const apiUrl = `https://date.nager.at/api/v3/PublicHolidays/${year}/CH`;

async function fetchHolidays(): Promise<void> {
  loading.value = true;
  error.value = "";

  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Failed to fetch holidays");
    }

    const data: APIHoliday[] = await response.json();

    holidays.value = [
      ...data
        .filter((holiday) => {
          return (
            holiday.counties === null || holiday.counties.includes("CH-AG")
          );
        })
        .filter((holiday) => {
          return ![
            "Maria Himmelfahrt",
            "Allerheiligen",
            "Mariä Empfängnis",
          ].includes(holiday.localName);
        })
        .map(({ date, localName }) => ({ date, localName })),
      { date: `${year}-12-24`, localName: "Heiligabend" },
    ].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = err.message;
    } else {
      error.value = "Unknown error occurred";
    }
  } finally {
    loading.value = false;
  }
}

function formatDate(dateString: string): string {
  return new Intl.DateTimeFormat("de-CH", {
    dateStyle: "full",
  }).format(new Date(dateString));
}

onMounted(() => {
  fetchHolidays();
});

definePageMeta({
  footer: true,
  order: 130,
  title: "Öffnungszeiten",
});
</script>
