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
        :class="[classes.img, image.size, ...image.position]"
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
    size: {
      small: string;
      medium: string;
      big: string;
    };
    position: {
      vertical: {
        top: string;
        middle: string;
        bottom: string;
      };
      horizontal: {
        left: string;
        center: string;
        right: string;
      };
    };
  };
}>();

const container = ref<HTMLElement | null>(null);

function randomProp(obj) {
  if (!obj) {
    return undefined;
  }

  const keys = Object.keys(obj);

  return keys.length
    ? obj[keys[Math.floor(Math.random() * keys.length)]]
    : undefined;
}

function size() {
  const s = randomProp(props.classes.size);

  return s ? s : "";
}

function position() {
  const vertical = props.classes.position?.vertical;
  const horizontal = props.classes.position?.horizontal;

  if (!vertical && !horizontal) {
    return [];
  }

  return [randomProp(vertical), randomProp(horizontal)].filter(Boolean);
}

const items = computed(() =>
  toValue(props.images).map((src, index) => ({
    id: index,
    src,
    position: position(),
    size: size(),
  })),
);

const { next, previous, canScrollNext, canScrollPrevious } = useImageGallery(
  props.images,
  container,
);
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
</style>
