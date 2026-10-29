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

function randomProp(obj) {
  if (!obj) {
    return undefined;
  }

  const keys = Object.keys(obj);

  return keys.length
    ? obj[keys[Math.floor(Math.random() * keys.length)]]
    : undefined;
}

function makeItems(images) {
  return images.map((src, index) => ({
    id: index,
    src,
    position: [
      randomProp(props.classes.position?.vertical),
      randomProp(props.classes.position?.horizontal),
    ].filter(Boolean),
    size: randomProp(props.classes.size) ?? "",
  }));
}

const container = ref<HTMLElement | null>(null);
const stateKey = `gallery-${useId()}`;
const items = useState(stateKey, () => makeItems(props.images));

onMounted(() => {
  items.value = makeItems(props.images);
});

const { next, previous, canScrollNext, canScrollPrevious } = useImageGallery(
  props.images,
  container,
);
</script>

<style scoped>
section {
  margin-top: var(--font-size-h2);
  position: relative;
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
</style>
