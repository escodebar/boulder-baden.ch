<template>
  <ul>
    <li v-for="link in links">
      <NuxtLink class="internal" :to="link.to">
        {{ link.name }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
definePageMeta({
  footer: true,
  navigation: true,
  order: 20,
  title: "Trainieren",
});

interface LinkItem {
  name: string;
  to: {
    name: string;
    hash: string;
  };
}

defineProps<{
  links: LinkItem[];
}>();
</script>

<style scoped>
@media (min-width: 768px) {
  ul {
    display: grid;
    gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
  }

  ul li a {
    width: clamp(200px, calc((90vw - 40px) / 3), calc((900px - 40px) / 3));
  }
}
</style>
