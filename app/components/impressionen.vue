<template>
  <section>
    <img
      v-for="image in items"
      :alt="image.id"
      :key="image.id"
      :src="image.src"
      :style="imageStyle(image)"
    />
  </section>
</template>

<script setup lang="ts">
const props = defineProps<{
  images: string[];
}>();

const items = computed(() =>
  props.images.map((src, index) => ({
    id: index,
    src,
    width: 180 + ((index * 73) % 120),
    offsetX: Math.sin(index * 1.7) * 150,
  })),
);

const scrollY = ref(0);

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const imageStyle = (item: (typeof items.value)[number]) => ({
  width: `${item.width}px`,
  transform: `
      translateX(${item.offsetX}px)
    `,
});
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  margin-top: 90px;
  margin-bottom: 90px;
  max-width: 100vw;
  overflow: hidden;
}

img {
  display: block;
  height: auto;
  will-change: transform;
}
</style>
