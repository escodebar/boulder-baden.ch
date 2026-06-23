<template>
  <BaseGallery :images="images" :classes="toClasses($style)" />
</template>

<script setup lang="ts">
const props = defineProps<{
  images: string[];
}>();

function toClasses(styles: Record<string, string>) {
  const {
    section,
    button,
    figure,
    img,
    top,
    middle,
    bottom,
    left,
    center,
    right,
  } = styles;

  return {
    section,
    button,
    figure,
    img,
    position: {
      vertical: { top, middle, bottom },
      horizontal: { left, center, right },
    },
  };
}
</script>

<style module>
@media (max-width: 767px) {
  /* for styling, check the base class */
}

@media (min-width: 768px) {
  .button {
    display: none;
  }

  .section {
    overflow: hidden;
  }

  .figure {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--border-size-thick);
  }

  .img {
    width: 80%;
    height: auto;
    max-height: 50vw;
    display: block;
    object-fit: contain;
  }

  .top {
    align-self: start;
  }

  .middle {
    align-self: center;
  }

  .bottom {
    align-self: end;
  }

  .left {
    justify-self: start;
  }

  .center {
    justify-self: center;
  }

  .right {
    justify-self: end;
  }
}
</style>
