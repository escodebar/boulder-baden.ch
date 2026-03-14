import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import NeuHier from "@/pages/NeuHier.vue";
import Bouldern from "@/pages/Bouldern.vue";
import Trainieren from "@/pages/Trainieren.vue";
import Spielen from "@/pages/Spielen.vue";
import Geniessen from "@/pages/Geniessen.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/neu-hier", component: NeuHier, name: "Neu Hier" },
  { path: "/bouldern", component: Bouldern, name: "Bouldern" },
  { path: "/trainieren", component: Trainieren, name: "Trainieren" },
  { path: "/spielen", component: Spielen, name: "Spielen" },
  { path: "/geniessen", component: Geniessen, name: "Geniessen" },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
