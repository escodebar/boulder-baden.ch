<template>
  <dl :class="classes.dl">
    <template v-for="item in items">
      <dt :class="classes.dt">
        <strong :class="classes.strong" v-if="item.date">{{
          item.date
        }}</strong>
        <span :class="classes.span">{{ item.name }}</span>
      </dt>
      <dd :class="classes.dd">{{ item.time }}</dd>
    </template>
  </dl>
</template>

<script setup lang="ts">
defineProps<{
  items: OpeningTimeItem[];
  classes: Partial<{
    dl: string;
    dt: string;
    dd: string;
    strong: string;
    span: string;
  }>;
}>();
</script>

<style scoped>
dl {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  width: fit-content;
  max-width: 100%;
  margin-inline: auto;
  gap: 0.25rem 0;
}

dt {
  margin: 0;
  display: flex;
  justify-content: space-between;
}

dd {
  margin: 0;
  text-align: right;
  padding-left: 1rem;
}

strong {
  margin-right: 1em;
}
</style>
