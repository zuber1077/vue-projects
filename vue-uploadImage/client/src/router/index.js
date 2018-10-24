import Vue from "vue";
import Router from "vue-router";
import UploadImage from "@/components/UploadImage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/index",
      name: "index",
      component: UploadImage
    },
    {
      path: "/index",
      name: "post-image",
      component: UploadImage
    },
    {
      path: "*",
      redirect: "index"
    }
  ]
});
