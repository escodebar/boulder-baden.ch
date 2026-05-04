<template>
  <h2>Unsere Partner</h2>
  <ul v-if="partners.length">
    <li v-for="partner in partners" :key="partner.id">
      <a
        :class="partner.id"
        :href="partner.link"
        :style="`background-image: url(partners/${partner.id}.svg)`"
      >
        {{ partner.name }}
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
import partnersData from "@/assets/partners.json";

interface Partner {
  id: string;
  name: string;
  link: string;
}

const partners = ref<Partner[]>(partnersData as Partner[]);
</script>

<style scoped>
ul {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 50px;
  justify-items: center;
  align-items: center;
  padding: 1em;
  list-style: none;
}

li {
  width: 100%;
  height: auto;
  position: relative;
}

a {
  display: block;
  height: 100%;
  width: 100%;
  aspect-ratio: 3/2;
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  text-indent: -9999px;
  overflow: hidden;
  white-space: nowrap;
}
</style>
