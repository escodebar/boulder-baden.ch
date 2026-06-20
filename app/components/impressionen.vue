<template>
  <section>
    <button
      v-show="hasPrevious()"
      @click="previous"
      aria-label="Previous image"
    >
      ←
    </button>

    <figure
      :style="{
        transform: `translateX(-${currentIndex * 100}%)`,
      }"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
    >
      <img
        v-for="image in items"
        :alt="image.id"
        :key="image.id"
        :src="image.src"
      />
    </figure>

    <button v-show="hasNext()" @click="next" aria-label="Next image">→</button>
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  images: string[];
}>();

const {
  items,
  currentIndex,
  next,
  previous,
  hasNext,
  hasPrevious,
  onTouchStart,
  onTouchEnd,
} = useImageGallery(props.images);
</script>

<style scoped>
@media (max-width: 767px) {
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

  figure {
    flex: 1;
    display: flex;
    margin: 0;
    transition: transform 300ms ease;
  }

  img {
    flex: 0 0 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

@media (min-width: 768px) {
  button {
    display: none;
  }

  section {
    overflow: hidden;
  }

  figure {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--font-size-h2);
  }

  img {
    width: 100%;
    height: auto;
    max-height: 50vw;
    display: block;
    object-fit: contain;
  }
}
</style>
