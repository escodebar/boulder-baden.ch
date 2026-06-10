<template>
  <h2>Öffnungszeiten & Preise</h2>

  <dl>
    <dt>Montag bis Freitag</dt>
    <dd>11 bis 23</dd>
    <dt>Samstag & Sonntag</dt>
    <dd>10 bis 19</dd>
  </dl>

  <NuxtLink class="button" :to="{ name: 'oeffnungszeiten' }">
    Spezielle Öffnungszeiten
  </NuxtLink>

  <NuxtLink class="button" :to="{ name: 'eintrittspreise' }">
    Eintrittspreise
  </NuxtLink>
</template>

<style scoped>
a {
  display: block;
  margin: 40px auto;
}

dl {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  width: fit-content;
  max-width: 100%;
  margin-inline: auto;
  gap: 0.25rem 1rem;
}

dt {
  margin: 0;
}

dd {
  margin: 0;
  text-align: right;
}

dt::after {
  content: ":";
}
</style>
