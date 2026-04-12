<template>
  <h2>Unsere Partner</h2>
  <ul v-if="partners.length">
    <li v-for="partner in partners" :key="partner.name">
      <a :href="partner.link">
        {{ partner.name }}
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import partnersData from "@/assets/partners.json";

interface Partner {
  name: string;
  link: string;
}

const partners = ref<Partner[]>(partnersData as Partner[]);
</script>
