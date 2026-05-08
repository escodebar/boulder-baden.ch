import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import NeuHier from "@/pages/NeuHier.vue";
import Bouldern from "@/pages/Bouldern.vue";
import Trainieren from "@/pages/Trainieren.vue";
import Spielen from "@/pages/Spielen.vue";
import Geniessen from "@/pages/Geniessen.vue";

declare module "vue-router" {
  interface RouteMeta {
    main?: boolean;
  }
}

const routes = [
  { path: "/", component: Home },
  {
    path: "/neu-hier",
    component: NeuHier,
    name: "Neu Hier",
    meta: { main: true },
  },
  {
    path: "/bouldern",
    component: Bouldern,
    name: "Bouldern",
    meta: { main: true },
  },
  {
    path: "/trainieren",
    component: Trainieren,
    name: "Trainieren",
    meta: { main: true },
  },
  {
    path: "/spielen",
    component: Spielen,
    name: "Spielen",
    meta: { main: true },
  },
  {
    path: "/geniessen",
    component: Geniessen,
    name: "Geniessen",
    meta: { main: true },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
