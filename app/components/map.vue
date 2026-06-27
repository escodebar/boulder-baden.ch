<template>
  <address class="icon">Oberstadtstrasse 12 5400 Baden</address>
</template>

<style scoped>
address {
  display: block;
}

@media (max-width: 767px) {
  address {
    background-image: url("@/assets/standort-small.png");
    aspect-ratio: 944/745;
  }
}

@media (min-width: 768px) {
  address {
    background-image: url("@/assets/standort.png");
    aspect-ratio: 993/646;
  }
}
</style>
