<template>
  <ul>
    <li>
      <a class="button icon apple" :href="props.apple" target="_blank">
        zum Apple Store
      </a>
    </li>

    <li>
      <a class="button icon google" :href="props.android" target="_blank">
        zum Google Play Store
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  apple: string;
  android: string;
}>();
</script>

<style scoped>
ul,
ul > li {
  list-style: none;
}

.apple {
  background-image: url("@/assets/apple-store.svg");
}

.google {
  background-image: url("@/assets/google-store.svg");
}

.button.icon {
  text-indent: 62px;
  margin: 48px auto 0;
}

@media (min-width: 768px) {
  ul {
    display: none;
  }
}
</style>
