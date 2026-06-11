<template>
  <dl>
    <dt>Montag bis Freitag</dt>
    <dd>11 bis 23</dd>
    <dt>Samstag & Sonntag</dt>
    <dd>10 bis 19</dd>
  </dl>
</template>

<style scoped>
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
</style>
