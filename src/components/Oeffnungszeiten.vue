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

  <a class="button" href=""> Spezielle Öffnungszeiten </a>

  <a class="button" href=""> Preise </a>
</template>

<style scoped>
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

a {
  display: block;
  margin: 40px auto;
}
</style>
