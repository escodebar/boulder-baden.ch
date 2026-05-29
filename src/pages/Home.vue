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
