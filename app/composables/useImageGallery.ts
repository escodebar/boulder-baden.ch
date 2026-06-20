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

  const touchStartX = ref(0);
  const touchStartY = ref(0);

  function onTouchStart(event: TouchEvent) {
    touchStartX.value = event.touches[0].clientX;
    touchStartY.value = event.touches[0].clientY;
  }

  function onTouchEnd(event: TouchEvent) {
    const deltaX = touchStartX.value - event.changedTouches[0].clientX;

    const deltaY = touchStartY.value - event.changedTouches[0].clientY;

    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      return;
    }

    if (Math.abs(deltaX) < 50) {
      return;
    }

    deltaX > 0 ? next() : previous();
  }

  return {
    items,
    currentIndex,
    hasNext,
    next,
    hasPrevious,
    previous,
    onTouchStart,
    onTouchEnd,
  };
}
