
// 定义异步组件也可这样 const Foo = resolve => require(['./Foo.vue'], resolve)
// 定义异步组件，将组件按组分块，‘group-index’为 组名称


let components;
const Index = r => require.ensure([], () => r(require('../pages/index/inedx.vue')), 'group-index');
const Apply = r => require.ensure([], () => r(require('../pages/index/apply.vue')), 'group-apply');


components = {
    Index,
    Apply,
};

export default components;
