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

  function onScroll() {
    const el = container.value;
    if (!el) return;

    const children = Array.from(el.children);

    const index = children.findIndex((child) => {
      const rect = child.getBoundingClientRect();
      const parentRect = el.getBoundingClientRect();

      return rect.left >= parentRect.left - 10;
    });

    if (index !== -1) {
      currentIndex.value = index;
    }
  }

  onMounted(() => {
    const el = container.value;
    if (!el) return;

    el.addEventListener("scroll", onScroll, { passive: true });
  });

  onBeforeUnmount(() => {
    const el = container.value;
    if (!el) return;

    el.removeEventListener("scroll", onScroll);
  });

  return {
    items,
    hasNext,
    next,
    hasPrevious,
    previous,
  };
}
