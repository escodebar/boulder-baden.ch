<template>
  <h1 class="icon">BOUBA</h1>
</template>

<style scoped>
h1 {
  background-image: url("@/assets/logo-small.svg");
  border: none;
  display: block;
  margin: auto 0 auto 18px;
  height: 44px;
  width: 219px;
}

@media (max-width: 767px) {
  h1.hero {
    margin: 0 auto;
    background-image: url("@/assets/hero-narrow.png");
    height: calc(7 / 4 * 100vw);
    width: 100%;
  }
}

@media (min-width: 768px) {
  h1.hero {
    margin: 0 auto;
    background-image: url("@/assets/hero-wide.png");
    height: clamp(432px, calc(27 / 48 * 100vw), 1620px);
    width: 100%;
  }
}
</style>
