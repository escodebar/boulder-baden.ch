<template>
  <section :class="classes.section">
    <button
      v-show="canScrollPrevious"
      @click="previous"
      :class="classes.button"
      aria-label="Previous image"
    >
      ←
    </button>

    <figure ref="container" :class="classes.figure">
      <img
        v-for="image in items"
        :alt="image.id"
        :class="classes.img"
        :key="image.id"
        :src="image.src"
      />
    </figure>

    <button
      v-show="canScrollNext"
      @click="next"
      :class="classes.button"
      aria-label="Next image"
    >
      →
    </button>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  images: string[];
  classes: {
    section: string;
    button: string;
    figure: string;
    img: string;
  };
}>();

const container = ref<HTMLElement | null>(null);

const { items, next, previous, canScrollNext, canScrollPrevious } =
  useImageGallery(props.images, container);
</script>

<style scoped>
section {
  position: relative;
  overflow: hidden;
}

button {
  background: none;
  border: none;
  font-family: "ABCCamera", sans-serif;
  font-size: var(--font-size-h1);
  height: var(--font-size-h1);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 72px;
  z-index: var(--layer-hover);
}

button:first-child {
  left: 0;
}

button:last-child {
  right: 0;
}

@media (max-width: 767px) {
  figure {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;

    margin: 0;
    padding: 0;
  }

  img {
    flex: 0 0 100%;
    scroll-snap-align: start;

    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-right: var(--font-size-h3);
  }
}
</style>
