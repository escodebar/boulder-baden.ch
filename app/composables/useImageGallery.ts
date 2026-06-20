export function useImageGallery(
  images: MaybeRefOrGetter<string[]>,
  container: Ref<HTMLElement | null>,
) {
  const items = computed(() =>
    toValue(images).map((src, index) => ({
      id: index,
      src,
    })),
  );

  const currentIndex = ref(0);

  function scrollToIndex(index: number) {
    const el = container.value;
    if (!el) return;

    const child = el.children[index] as HTMLElement;
    if (!child) return;

    child.scrollIntoView({
      behavior: "smooth",
      inline: "start",
      block: "nearest",
    });

    currentIndex.value = index;
  }

  function hasNext() {
    return currentIndex.value < images.length - 1;
  }

  function next() {
    if (hasNext()) {
      scrollToIndex(currentIndex.value + 1);
    }
  }

  function hasPrevious() {
    return currentIndex.value > 0;
  }

  function previous() {
    if (hasPrevious()) {
      scrollToIndex(currentIndex.value - 1);
    }
  }

  return {
    items,
    hasNext,
    next,
    hasPrevious,
    previous,
  };
}
