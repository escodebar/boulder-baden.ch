<template>
  <AppBar />
  <main>
    <NuxtPage />

    <Navigation class="bottom-nav" />

    <Footer />
  </main>
</template>

<style scoped>
@media (max-width: 767px) {
  .bottom-nav {
    display: none;
  }
}
</style>
