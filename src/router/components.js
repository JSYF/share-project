const Index = () =>
  import(/* webpackChunkName: "group-index" */ "@/pages/index/inedx.vue");
const Apply = () =>
  import(/* webpackChunkName: "group-apply" */ "@/pages/index/apply.vue");
const yunhanApply = ()=>
  import(/* webpackChunkName: "group-apply" */ "@/pages/yunhanApply/index.vue");
const publicity = ()=>
  import(/* webpackChunkName: "group-publicity" */ "@/pages/publicity/index.vue");
const publicityShare = ()=>
  import(/* webpackChunkName: "group-publicity" */ "@/pages/publicity/share.vue");
export default {
  Index,
  Apply,
  yunhanApply,
  publicity,
  publicityShare
};
