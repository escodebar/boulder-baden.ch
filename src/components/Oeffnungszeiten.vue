<template>
  <h2>Öffnungszeiten & Preise</h2>

  <hr />

  <dl>
    <dt>Montag bis Freitag</dt>
    <dd>11 bis 23</dd>
    <dt>Samstag & Sonntag</dt>
    <dd>10 bis 19</dd>
  </dl>
</template>

<style scoped>
hr {
  margin: 0 auto;
  width: 900px;
}

dl {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  margin: 2em auto;
}

dt {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: right;
}

dd {
  text-align: left;
}
</style>
