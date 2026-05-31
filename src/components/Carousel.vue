<template>
  <figure>
    <button
      v-if="currentIndex !== 0"
      @click="previous"
      aria-label="Previous image"
    >
      ←
    </button>

    <ul>
      <li v-if="currentImage">
        <img :src="currentImage.url" :alt="currentImage.alt" />
        <figcaption>
          {{ currentImage.title }}
        </figcaption>
      </li>
    </ul>

    <button
      @click="next"
      aria-label="Next image"
      v-if="currentIndex !== props.images.length - 1"
    >
      →
    </button>
  </figure>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ref } from "vue";

interface ImageItem {
  title: string;
  alt: string;
  url: string;
}

const props = defineProps<{
  images: ImageItem[];
}>();

const currentIndex = ref(0);

const currentImage = computed(() => {
  if (props.images.length === 0) {
    throw new Error("ImageCarousel requires at least one image");
  }
  return props.images[currentIndex.value];
});

function next(): void {
  if (currentIndex.value === props.images.length - 1) {
    return;
  }
  currentIndex.value = currentIndex.value + 1;
}

function previous(): void {
  if (currentIndex.value === 0) {
    return;
  }
  currentIndex.value = currentIndex.value - 1;
}
</script>

<style scoped>
figure {
  position: relative;
  margin: 0;
  display: inline-block;
}

button {
  background: none;
  border: none;
  font-family: "ABCCamera", sans-serif;
  font-size: var(--font-size-h1);
  height: var(--font-size-h1);
  width: 72px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
}

button:first-child {
  left: 0;
}

button:last-child {
  right: 0;
}

ul {
  display: flex;
  flex-direction: column;
  align-items: center;
}

img {
  display: block;
  aspect-ratio: 16 / 9;
  width: 100vw;
}
</style>
