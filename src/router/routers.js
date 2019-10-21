const routers = [
  {
    path: "/",
    name: "/home",
    component: () => import("@src/components/Home.vue")
  },
  {
    path: "/login",
    name: "/login",
    component: () => import("@src/components/Login.vue")
  },
  {
    path: "/layout",
    name: "/layout",
    component: () => import("@src/components/layout/Index.vue")
  },

  {
    path: "*",
    name: "notFound",
    component: () => import("@src/components/NotFound.vue")
  }
];

export default routers;
