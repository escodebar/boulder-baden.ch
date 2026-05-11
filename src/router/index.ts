import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import NeuHier from "@/pages/NeuHier.vue";
import Bouldern from "@/pages/Bouldern.vue";
import Trainieren from "@/pages/Trainieren.vue";
import Spielen from "@/pages/Spielen.vue";
import Geniessen from "@/pages/Geniessen.vue";
import Vision from "@/pages/Vision.vue";
import Geschichte from "@/pages/Geschichte.vue";
import AGB from "@/pages/AGB.vue";
import Impressum from "@/pages/Impressum.vue";
import Datenschutz from "@/pages/Datenschutz.vue";
import Oeffnungszeiten from "@/pages/Oeffnungszeiten.vue";

declare module "vue-router" {
  interface RouteMeta {
    main?: boolean;
    footer?: boolean;
    legal?: boolean;
  }
}

const routes = [
  { path: "/", component: Home },
  {
    path: "/neu-hier",
    component: NeuHier,
    name: "Neu Hier",
    meta: { main: true, footer: true },
  },
  {
    path: "/bouldern",
    component: Bouldern,
    name: "Bouldern",
    meta: { main: true, footer: true },
  },
  {
    path: "/trainieren",
    component: Trainieren,
    name: "Trainieren",
    meta: { main: true, footer: true },
  },
  {
    path: "/spielen",
    component: Spielen,
    name: "Spielen",
    meta: { main: true, footer: true },
  },
  {
    path: "/geniessen",
    component: Geniessen,
    name: "Geniessen",
    meta: { main: true, footer: true },
  },
  {
    path: "/vision",
    component: Vision,
    name: "Unserer Vision",
    meta: { footer: true },
  },
  {
    path: "/geschichte",
    component: Geschichte,
    name: "Unsere Geschichte",
    meta: { footer: true },
  },
  { path: "/agb", component: AGB, name: "AGB", meta: { legal: true } },
  {
    path: "/impressum",
    component: Impressum,
    name: "Impressum",
    meta: { legal: true },
  },
  {
    path: "/datenschutz",
    component: Datenschutz,
    name: "Datenschutz",
    meta: { legal: true },
  },
  {
    path: "/oeffnungszeiten",
    component: Oeffnungszeiten,
    name: "Öffnungszeiten",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
