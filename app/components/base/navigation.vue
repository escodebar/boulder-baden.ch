<template>
  <nav :class="[classes.nav, isHidden && classes.hidden]">
    <ul :class="classes.ul">
      <li :class="classes.li" v-for="route in items" :key="route.name">
        <NuxtLink
          :class="classes.a"
          :to="{ name: route.name }"
          :active-class="classes.active"
        >
          <span :class="classes.span">
            {{ route.label }}
          </span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
interface NavigationItem {
  label: string;
  name: string;
}

defineProps<{
  items: NavigationItem[];
  classes: {
    nav: string;
    hidden: string;
    ul: string;
    li: string;
    a: string;
    active: string;
    span: string;
  };
  isHidden?: boolean;
}>();
</script>
