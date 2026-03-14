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
