export function useImageGallery(images: MaybeRefOrGetter<string[]>) {
  const items = computed(() =>
    toValue(images).map((src, index) => ({
      id: index,
      src,
    })),
  );

  const currentIndex = ref(0);

  function hasNext() {
    return currentIndex.value < images.length - 1;
  }

  function next() {
    if (hasNext()) {
      currentIndex.value++;
    }
  }

  function hasPrevious() {
    return currentIndex.value > 0;
  }

  function previous() {
    if (hasPrevious()) {
      currentIndex.value--;
    }
  }

  return {
    items,
    currentIndex,
    hasNext,
    next,
    hasPrevious,
    previous,
  };
}
