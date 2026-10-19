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

    <nav class="navigation">
      <ul>
        <li v-for="route in footerItems" :key="route.name">
          <NuxtLink :to="{ name: route.name }">
            <span>
              {{ route.label }}
            </span>
          </NuxtLink>
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
        <NuxtLink :to="{ name: route.name }">
          <span> {{ route.label }} </span> <br />
        </NuxtLink>
      </template>
      <NuxtLink :to="{ name: 'impressum', hash: '#datenschutz' }">
        <span> Datenschutz </span>
      </NuxtLink>
    </p>
  </footer>
</template>

<script setup lang="ts">
const footerItems = useNavigation("footer");
const legalItems = useNavigation("legal");
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

footer a[href="/neu-hier"] {
  border-left: 5px solid var(--color-neu-hier);
  padding-left: 2px;
}
footer a[href="/bouldern"] {
  border-left: 5px solid var(--color-bouldern);
  padding-left: 2px;
}
footer a[href="/trainieren"] {
  border-left: 5px solid var(--color-trainieren);
  padding-left: 2px;
}
footer a[href="/spielen"] {
  border-left: 5px solid var(--color-spielen);
  padding-left: 2px;
}
footer a[href="/geniessen"] {
  border-left: 5px solid var(--color-geniessen);
  padding-left: 2px;
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
  list-style: none;
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
  footer {
    padding-top: 50px;
  }
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

  .navigation {
    border: 1px solid var(--color-text);
    border-style: none solid;
    padding: 0 30px;
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
