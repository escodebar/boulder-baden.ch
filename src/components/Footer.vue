<template>
  <footer>
    <address>
      BOUBA AG<br />
      Boulder Baden<br />
      Oberstadtstrasse 12<br />
      5400 Baden<br />
      <br />
      <a href="mailto:info@boulder-baden.ch">info@boulder-baden.ch</a><br />
      <a href="tel:+41566101717">+41 56 610 17 17</a>
    </address>
    <ul>
      <li><a href="">Neu hier?</a></li>
      <li><a href="">Bouldern</a></li>
      <li><a href="">Spielen</a></li>
      <li><a href="">Trainieren</a></li>
      <li><a href="">Geniessen</a></li>
      <li><a href="">Unsere Vision</a></li>
      <li><a href="">Unsere Geschichte</a></li>
    </ul>
    <div class="social">
      <span>Bleibe dran</span>
      <a href="">Instagram</a>
    </div>
    <p class="legal">
      © 2026 - All rights reserved.<br />
      Impressum<br />
      AGB<br />
      Datenschutz
    </p>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
footer {
  border-top: 5px solid var(--color-text);
}

footer * {
  font-size: 12px;
}

footer > * {
  border-bottom: 1px solid var(--color-text);
  padding-bottom: 20px;
  margin: 20px 70px;
}

address {
  text-align: left;
}

address a {
  color: var(--color-text);
  text-decoration: none;
}

ul {
  display: grid;
  grid-template-columns: auto auto;
  grid-auto-flow: column;
  grid-template-rows: repeat(5, auto);
  justify-content: space-between;
  column-gap: 2rem;
  list-style: none;
}

ul li {
  break-inside: avoid;
  text-align: left;
}

ul li a {
  text-decoration: none;
  color: var(--color-text);
}

.social {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

p.legal {
  border: none;
  margin-bottom: none;
}

@media (max-width: 767px) {
}

@media (min-width: 768px) {
  footer {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
  }

  footer > * {
    border: none;
  }

  .legal {
    margin-left: auto;
    text-align: right;
  }
}
</style>
