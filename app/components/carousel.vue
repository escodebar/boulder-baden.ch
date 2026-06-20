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
  .figure {
    display: flex;
    gap: var(--font-size-h3);

    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
  }

  .img {
    flex: 0 0 45%;
    scroll-snap-align: start;

    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>
