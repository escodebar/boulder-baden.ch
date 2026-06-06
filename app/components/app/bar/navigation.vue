<template>
  <BaseNavigation :items="navItems" :is-hidden="isHidden" :classes="$style" />
</template>

<script setup lang="ts">
const navItems = useNavigation("navigation");
defineProps<{
  isHidden: boolean;
}>();
</script>

<style module>
.a {
  color: var(--color-text);
}

@media (max-width: 767px) {
  .a {
    align-items: center;
    display: flex;
    height: 81px;
    justify-content: center;
    text-decoration: none;
  }
  .a[href="/neu-hier"] {
    background-color: var(--color-neu-hier);
  }
  .a[href="/bouldern"] {
    background-color: var(--color-bouldern);
  }
  .a[href="/trainieren"] {
    background-color: var(--color-trainieren);
  }
  .a[href="/spielen"] {
    background-color: var(--color-spielen);
  }
  .a[href="/geniessen"] {
    background-color: var(--color-geniessen);
  }
}

@media (min-width: 768px) {
  .ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 0;
    width: auto;
  }

  .li {
    align-items: center;
    display: flex;
    flex: auto;
    height: var(--appbar-height);
    justify-content: center;
    overflow: hidden;
    text-align: center;
    width: 122px;
  }

  .a {
    align-items: end;
    background-color: var(--color-base);
    display: flex;
    flex-direction: row;
    font-family: "Manrope";
    font-size: var(--font-size-p);
    height: 100%;
    justify-content: center;
    text-decoration: none;
    transform: translateY(0);
    transition: transform 0.3s ease background-color 0.3s ease;
    width: 100%;
  }

  .span {
    display: block;
  }

  .hidden .a {
    transform: translateY(calc(-100% + 6px));
  }

  .nav:hover .a {
    transform: translateY(0);
  }

  .active[href="/neu-hier"],
  .li:hover .a[href="/neu-hier"] {
    background-color: var(--color-neu-hier);
  }
  .active[href="/bouldern"],
  .li:hover .a[href="/bouldern"] {
    background-color: var(--color-bouldern);
  }
  .active[href="/trainieren"],
  .li:hover .a[href="/trainieren"] {
    background-color: var(--color-trainieren);
  }
  .active[href="/spielen"],
  .li:hover .a[href="/spielen"] {
    background-color: var(--color-spielen);
  }
  .active[href="/geniessen"],
  .li:hover .a[href="/geniessen"] {
    background-color: var(--color-geniessen);
  }

  .a[href="/neu-hier"] {
    border-bottom: 6px solid var(--color-neu-hier);
  }
  .a[href="/bouldern"] {
    border-bottom: 6px solid var(--color-bouldern);
  }
  .a[href="/trainieren"] {
    border-bottom: 6px solid var(--color-trainieren);
  }
  .a[href="/spielen"] {
    border-bottom: 6px solid var(--color-spielen);
  }
  .a[href="/geniessen"] {
    border-bottom: 6px solid var(--color-geniessen);
  }
}
</style>
