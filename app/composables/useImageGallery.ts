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

  const canScrollNext = ref(false);

  function next() {
    if (canScrollNext.value) {
      scrollToIndex(currentIndex.value + 1);
    }
  }

  const canScrollPrevious = ref(false);

  function previous() {
    if (canScrollPrevious.value) {
      scrollToIndex(currentIndex.value - 1);
    }
  }

  function updateScrollState() {
    const el = container.value;
    if (!el) return;

    canScrollPrevious.value = el.scrollLeft > 0;

    canScrollNext.value = el.scrollLeft < el.scrollWidth - el.clientWidth - 1;
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

    updateScrollState();
  }

  onMounted(() => {
    const el = container.value;
    if (!el) return;

    updateScrollState();

    el.addEventListener("scroll", onScroll, { passive: true });
  });

  onBeforeUnmount(() => {
    const el = container.value;
    if (!el) return;

    el.removeEventListener("scroll", onScroll);
  });

  return {
    items,
    canScrollNext,
    next,
    canScrollPrevious,
    previous,
  };
}
