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
.button {
  display: none;
}

.figure {
  display: grid;
  gap: var(--border-size-thick);
}

.img {
  height: auto;
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

@media (max-width: 767px) {
  .section {
    overflow-x: auto;
  }

  .figure {
    grid-template-rows: repeat(2, 1fr);
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    width: 100vw;
  }

  .small {
    width: 30vw;
  }

  .medium {
    width: 35vw;
  }

  .big {
    width: 40vw;
  }
}

@media (min-width: 768px) {
  .section {
    overflow: hidden;
  }

  .figure {
    grid-template-columns: repeat(2, 1fr);
  }

  .img {
    max-height: 50vw;
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
}
</style>
