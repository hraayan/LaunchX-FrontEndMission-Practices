import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ClienteView from "../views/ClienteView.vue";
import PedidosView from "../views/PedidosView.vue";
import StockView from "../views/StockView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/cliente",
    name: "cliente",
    component: ClienteView,
  },
  {
    path: "/stock",
    name: "stock",
    component: StockView,
  },
  {
    path: "/pedidos",
    name: "Pedidos",
    component: PedidosView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
