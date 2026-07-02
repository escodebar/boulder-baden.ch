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
  figure {
    display: flex;
    overflow-x: auto;
    overscroll-behavior-x: contain;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    margin: var(--font-size-h2) 0 0;
    padding: 0;
    width: 100vw;
  }

  button {
    display: none;
  }

  img {
    flex: 0 0 90%;
    scroll-snap-align: start;

    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-right: var(--border-size-thick);
  }

  img:last-child {
    scroll-snap-align: end;
    margin-right: 0;
  }
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
