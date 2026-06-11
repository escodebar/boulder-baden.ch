<template>
  <dl>
    <template v-for="item in items">
      <dt>
        <strong v-if="item.date">{{ item.date }}</strong>
        <span>{{ item.name }}</span>
      </dt>
      <dd>{{ item.time }}</dd>
    </template>
  </dl>
</template>

<script setup lang="ts">
defineProps<{
  items: OpeningTimeItem[];
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

dt,
dd {
  border-bottom: 0.5px solid var(--color-text);
}
dt:last-of-type,
dd:last-of-type {
  border-bottom: 0;
}

strong {
  margin-right: 1em;
}
</style>
