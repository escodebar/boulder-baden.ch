<template>
  <h2>Öffnungszeiten & Preise</h2>

  <hr />

  <dl>
    <dt>Montag bis Freitag</dt>
    <dd>11 bis 23</dd>
    <dt>Samstag & Sonntag</dt>
    <dd>10 bis 19</dd>
  </dl>

  <hr />

  <RouterLink class="button" :to="{ name: 'Öffnungszeiten' }">
    Spezielle Öffnungszeiten
  </RouterLink>

  <RouterLink class="button" :to="{ name: 'Eintrittspreise' }">
    Eintrittspreise
  </RouterLink>
</template>

<style scoped>
a {
  display: block;
  margin: 40px auto;
}
</style>
