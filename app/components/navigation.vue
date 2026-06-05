<template>
  <nav v-if="navItems.length">
    <ul>
      <li v-for="route in navItems" :key="route.name">
        <NuxtLink :to="{ name: route.name }" active-class="active">
          <span>
            {{ route.label }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const router = useRouter();

const navItems = router
  .getRoutes()
  .filter((item) => item.meta.navigation)
  .sort((a, b) => (a.meta.order ?? 0) - (b.meta.order ?? 0))
  .map(({ meta, name, path }) => ({
    label: meta.title,
    name,
    path,
  }));
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
    flex-direction: column;
    height: 360px;
    width: 100%;
    font-family: "ABCCamera";
    text-decoration: none;
    justify-content: center;
    align-items: center;
    font-size: clamp(
      var(--font-size-h4),
      calc(100vw / 24),
      var(--font-size-h2)
    );
  }

  nav ul li a::before {
    width: 90px;
    height: 90px;
    border: 1px solid #000;
    border-radius: 45px;
    display: block;
    font-size: var(--font-size-h1);
    line-height: 1;
  }

  nav ul li a span {
    display: block;
  }

  nav.header ul li a {
    flex-direction: row;
  }

  nav.header ul li a::before {
    display: none;
  }

  nav ul li a[href="/neu-hier"]::before {
    content: "N";
  }
  nav ul li a[href="/bouldern"]::before {
    content: "B";
  }
  nav ul li a[href="/trainieren"]::before {
    content: "T";
  }
  nav ul li a[href="/spielen"]::before {
    content: "S";
  }
  nav ul li a[href="/geniessen"]::before {
    content: "G";
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
    transform: translateY(0);
    transition: transform 0.3s ease background-color 0.3s ease;
    font-family: "Manrope";
    font-size: var(--font-size-p);
  }

  nav.header.hidden ul li a {
    transform: translateY(calc(-100% + 6px));
  }

  nav.header:hover ul li a {
    transform: translateY(0);
  }

  nav.header ul li a.active[href="/neu-hier"],
  nav.header ul li:hover a[href="/neu-hier"] {
    background-color: var(--color-neu-hier);
  }
  nav.header ul li a.active[href="/bouldern"],
  nav.header ul li:hover a[href="/bouldern"] {
    background-color: var(--color-bouldern);
  }
  nav.header ul li a.active[href="/trainieren"],
  nav.header ul li:hover a[href="/trainieren"] {
    background-color: var(--color-trainieren);
  }
  nav.header ul li a.active[href="/spielen"],
  nav.header ul li:hover a[href="/spielen"] {
    background-color: var(--color-spielen);
  }
  nav.header ul li a.active[href="/geniessen"],
  nav.header ul li:hover a[href="/geniessen"] {
    background-color: var(--color-geniessen);
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
