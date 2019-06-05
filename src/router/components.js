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
const studentCardShare = () =>
  import(/* webpackChunkName: "group-student" */ "@/pages/studentCard/index.vue");
const posterForm = () =>
  import(/* webpackChunkName: "poster-form" */ "@/pages/poster_form/index.vue");
// 数据看板
const dataShow = () =>
  import(/* webpackChunkName: "group-data-show" */ "@/pages/data_show/index.vue");
// 红包
const redPacket = () =>
  import(/* webpackChunkName: "red-packet" */ "@/pages/red_packet/index.vue")
// 学期报告
const report = ()=>
  import(/* webpackChunkName: "group-report" */ "@/pages/report/index.vue");
const reportDetails = ()=>
  import(/* webpackChunkName: "group-report" */ "@/pages/report/details.vue");

export default {
  Index,
  Apply,
  yunhanApply,
  publicity,
  publicityShare,
  studentCardShare,
  posterForm,
  dataShow,
  redPacket,
  report,
  reportDetails
};
