<template>
  <header>
    <Logo class="hero" />
  </header>
  <Navigation />

  <section>
    <Oeffnungszeiten />
  </section>
  <section>
    <Standort />
  </section>
  <section>
    <Kontakt />
  </section>
  <!-- Impressionen -->
  <section>
    <Vision />
  </section>
  <section>
    <Partner />
  </section>
  <Navigation />
</template>

<script setup lang="ts">
import Kontakt from "@/components/Kontakt.vue";
import Logo from "@/components/Logo.vue";
import Navigation from "@/components/Navigation.vue";
import Oeffnungszeiten from "@/components/Oeffnungszeiten.vue";
import Partner from "@/components/Partner.vue";
import Standort from "@/components/Standort.vue";
import Vision from "@/components/Vision.vue";
</script>

<style>
dt,
dd,
p {
  font-size: var(--font-size-text-big);
}

@media (max-width: 767px) {
  h2 {
    font-size: clamp(
      var(--font-size-text-big),
      calc(500vw / 64),
      var(--font-size-h1-mobile)
    );
  }
  h3 {
    font-size: var(--font-size-h2-mobile);
  }
}

@media (min-width: 768px) {
  h2 {
    font-size: clamp(
      var(--font-size-h1-tablet),
      calc(100vw / 12),
      var(--font-size-h1-desktop)
    );
  }
  h3 {
    font-size: var(--font-size-h2-desktop);
  }
}
</style>
