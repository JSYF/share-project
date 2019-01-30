const Index = () =>
  import(/* webpackChunkName: "group-index" */ "@/pages/index/inedx.vue");
const Apply = () =>
  import(/* webpackChunkName: "group-apply" */ "@/pages/index/apply.vue");
export default {
  Index,
  Apply
};
