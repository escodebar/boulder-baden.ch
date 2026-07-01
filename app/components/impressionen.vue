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
    small,
    medium,
    big,
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
    size: { small, medium, big },
    position: {
      vertical: { top, middle, bottom },
      horizontal: { left, center, right },
    },
  };
}
</script>

<style module>
@media (max-width: 767px) {
  .top {
    align-self: flex-start;
  }

  .middle {
    align-self: center;
  }

  .bottom {
    align-self: flex-end;
  }
}

@media (min-width: 768px) {
  .section {
    padding-top: var(--font-size-h2);
  }

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
    height: auto;
    max-height: 50vw;
    display: block;
    object-fit: contain;
  }

  .small {
    width: 60%;
  }

  .medium {
    width: 80%;
  }

  .big {
    width: 100%;
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
