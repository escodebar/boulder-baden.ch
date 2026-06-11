<template>
  <BaseNavigation :items="navItems" :classes="$style" />
</template>

<script setup lang="ts">
const navItems = useNavigation("navigation");
</script>

<style module>
.a {
  color: var(--color-text);
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

@media (max-width: 767px) {
  .a {
    align-items: center;
    display: flex;
    height: 81px;
    justify-content: center;
    text-decoration: none;
  }

  button {
    margin: 0;
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
    flex: auto;
    text-align: center;
    width: 0;
    height: 360px;
    position: relative;
  }

  .a {
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
    transform-origin: center bottom;
    transition: all 0.2s ease;
    position: relative;
  }

  .a:hover {
    transform: translateY(-54px);
    height: 414px;
  }

  .a::before {
    width: 90px;
    height: 90px;
    border: 1px solid #000;
    border-radius: 45px;
    display: block;
    font-size: var(--font-size-h1);
    line-height: 1;
  }

  .span {
    display: block;
  }

  .a[href="/neu-hier"]::before {
    content: "N";
  }
  .a[href="/bouldern"]::before {
    content: "B";
  }
  .a[href="/trainieren"]::before {
    content: "T";
  }
  .a[href="/spielen"]::before {
    content: "S";
  }
  .a[href="/geniessen"]::before {
    content: "G";
  }
}
</style>
