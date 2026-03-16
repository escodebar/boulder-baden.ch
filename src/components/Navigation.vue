<template>
  <nav v-if="routes.length">
    <ul>
      <template v-for="route in routes">
        <li v-if="route.name" :key="route.name">
          <RouterLink :to="{ name: route.name }">
            {{ route.name }}
          </RouterLink>
        </li>
      </template>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import type { RouteRecordRaw } from "vue-router";
import { RouterLink } from "vue-router";

defineProps<{
  routes: RouteRecordRaw[];
}>();
</script>

<style scoped>
@media (min-width: 768px) {
  nav ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 0;
    width: auto;
  }

  nav.header ul {
    flex-direction: row-reverse;
  }

  nav ul li {
    flex: auto;
    text-align: center;
  }

  nav.header ul li {
    width: 122px;
  }

  nav ul li a {
    display: block;
    width: 100%;
    text-decoration: none;
  }
}
</style>
