import { createRouter, createWebHashHistory } from "vue-router";
import Base from "../views/Base.vue";
import About from "../views/About.vue";
import BlogPosts from "../views/BlogPosts.vue";

const routes = [
  {
    path: "/",
    component: Base,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/blog-posts/:id",
    name: "blog",
    component: BlogPosts,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
