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
nav ul li a {
  color: var(--color-text);
}
nav ul li a[href="/neu-hier"] {
  background-color: var(--color-neu-hier);
}
nav ul li a[href="/bouldern"] {
  background-color: var(--color-bouldern);
}
nav ul li a[href="/trainieren"] {
  background-color: var(--color-trainieren);
}
nav ul li a[href="/spielen"] {
  background-color: var(--color-spielen);
}
nav ul li a[href="/geniessen"] {
  background-color: var(--color-geniessen);
}

@media (max-width: 767px) {
  nav ul li a {
    align-items: center;
    display: flex;
    height: 81px;
    justify-content: center;
    text-decoration: none;
  }
}

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

  nav ul li {
    flex: auto;
    text-align: center;
    width: 0;
  }

  nav ul li a {
    display: flex;
    height: 360px;
    width: 100%;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    font-size: clamp(
      var(--font-size-text-big),
      calc(100vw / 24),
      var(--font-size-h2-desktop)
    );
  }

  nav.header ul {
    flex-direction: row;
  }

  nav.header ul li {
    display: flex;
    justify-content: center;
    align-items: center;

    height: var(--appbar-height);
    overflow: hidden;
    width: 122px;
  }

  nav.header ul li a {
    background-color: var(--color-base);
    display: flex;
    justify-content: center;
    align-items: end;
    height: 100%;
    transform: translateY(calc(-100% + 6px));
    transition: transform 0.3s ease;
    font-size: var(--font-size-text);
  }

  nav.header ul li:hover a {
    transform: translateY(0);
  }

  nav.header ul li a[href="/neu-hier"] {
    border-bottom: 6px solid var(--color-neu-hier);
  }
  nav.header ul li a[href="/bouldern"] {
    border-bottom: 6px solid var(--color-bouldern);
  }
  nav.header ul li a[href="/trainieren"] {
    border-bottom: 6px solid var(--color-trainieren);
  }
  nav.header ul li a[href="/spielen"] {
    border-bottom: 6px solid var(--color-spielen);
  }
  nav.header ul li a[href="/geniessen"] {
    border-bottom: 6px solid var(--color-geniessen);
  }
}
</style>
