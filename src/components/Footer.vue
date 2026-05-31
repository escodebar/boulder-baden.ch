<template>
  <footer>
    <address>
      BOUBA AG<br />
      Boulder Baden<br />
      Oberstadtstrasse 12<br />
      5400 Baden<br />
      <br />
      <a href="mailto:info@boulder-baden.ch">info@boulder-baden.ch</a><br />
      <a href="tel:+41566101717">+41 56 610 17 17</a>
    </address>

    <nav>
      <ul>
        <li v-for="route in navItems" :key="route.name">
          <RouterLink :to="{ name: route.name }">
            <span>
              {{ route.name }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </nav>

    <div class="social">
      <span>Bleibe dran</span>
      <a
        class="instagram icon"
        href="https://www.instagram.com/bouba_boulderbaden/"
      >
        Instagram
      </a>
    </div>
    <p class="legal">
      © 2026 - All rights reserved.<br />
      <template v-for="route in legalItems" :key="route.name">
        <RouterLink :to="{ name: route.name }">
          <span> {{ route.name }} </span> <br />
        </RouterLink>
      </template>
    </p>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink, useRouter } from "vue-router";

const router = useRouter();

const navItems = router
  .getRoutes()
  .filter((item) => item.meta.footer)
  .map(({ name, path }) => ({
    name,
    path,
  }));

const legalItems = router
  .getRoutes()
  .filter((item) => item.meta.legal)
  .map(({ name, path }) => ({
    name,
    path,
  }));
</script>

<style scoped>
footer {
  border-top: var(--border-size-thick) solid var(--color-text);
}

footer * {
  font-size: 12px;
}

footer > * {
  border-bottom: 1px solid var(--color-text);
  padding-bottom: 20px;
  margin: 20px 70px;
}

address {
  text-align: left;
}

address a {
  color: var(--color-text);
  text-decoration: none;
}

ul {
  display: grid;
  grid-template-columns: auto auto;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, auto);
  justify-content: space-between;
  column-gap: 2rem;
  list-style: none;
}

ul li {
  break-inside: avoid;
  text-align: left;
}

ul li a {
  text-decoration: none;
  color: var(--color-text);
}

.social {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.instagram {
  background-image: url("@/assets/instagram.svg");
  height: 21px;
  width: 21px;
}

.legal {
  border: none;
  margin-bottom: none;
}

.legal a {
  text-decoration: none;
  color: var(--color-text);
}

@media (max-width: 767px) {
}

@media (min-width: 768px) {
  footer {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  footer > * {
    border: none;
    margin: 20px 20px;
  }

  .social {
    min-width: 100px;
  }

  .legal {
    margin-left: auto;
    text-align: right;
  }
}
</style>
