<template>
  <BaseGallery :images="images" :classes="$style" />
</template>

<script setup lang="ts">
const props = defineProps<{
  images: string[];
}>();
</script>

<style module>
@media (max-width: 767px) {
  /* for styling, check the base class */
}

@media (min-width: 768px) {
  .button {
    display: none;
  }

  .section {
    overflow: hidden;
  }

  .figure {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--font-size-h2);
  }

  .img {
    width: 100%;
    height: auto;
    max-height: 50vw;
    display: block;
    object-fit: contain;
  }
}
</style>
