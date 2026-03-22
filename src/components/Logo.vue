<template>
  <h1>BOUBA</h1>
</template>

<style scoped>
h1 {
  background-image: url("@/assets/logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
  display: block;
  height: var(--logo-height);
  width: var(--logo-width);
  text-indent: -9999px;
  overflow: hidden;
  white-space: nowrap;
}

@media (max-width: 767px) {
  h1.hero {
    background-image: url("@/assets/hero-narrow.png");
    height: calc(7 / 4 * 100vw);
    width: 100%;
  }
}

@media (min-width: 768px) {
  h1.hero {
    background-image: url("@/assets/hero-wide.png");
    height: clamp(432px, calc(27 / 48 * 100vw), 810px);
    width: 100%;
  }
}
</style>
