<template>
    <div class="apply-page">
        <div class="apply-wrap">
            <div class="apply-inner">
                <h3>学员卡</h3>
                <p class="info">让学习更有趣</p>

                <input @input="changeInput($event.target.value, 'org_name')" type="text" placeholder="请填写机构名称">
                <input @input="changeInput($event.target.value, 'name')" type="text" placeholder="请填写联系人姓名">
                <input @input="changeInput($event.target.value, 'phone')" type="text" placeholder="请填写联系电话">

                <textarea @input="changeInput($event.target.value, 'note')" placeholder="如有其他信息备注请填写"></textarea>

                <button class="bg-heart" @click.stop.prevent="submitInfo" >确认提交</button>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: '',
        props: {},
        data () {
            return {
                msg: 'apply-page',

                org_name: '',
                name: '',
                phone: '',
                note: '',
            }
        },
        created() {
            // ajax
            // 实例已经创建完成之后被调用。
            // 在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算，
            // watch/event 事件回调。然而，挂载阶段还没开始， 属性目前不可见。
        },
        components: {
            // 注册子组件
        },
        methods: {
            // 注册方法
            changeInput(value,key){
                // console.log(value,key);
                this[key] = value;
            },

            submitInfo(){
                let org_name = this.org_name, 
                    name = this.name , 
                    phone = this.phone, 
                    note = this.note; 

                if( !org_name || !name || phone.length!=11 ){
                    let prompt_text = '';
                    if( !org_name ){
                        prompt_text = '请填写机构名称'
                    }else if( !name ){
                        prompt_text = '请填写联系人姓名'
                    }else if( phone.length!=11 ){
                        prompt_text = '请填写正确联系电话'
                    }
                    alert(prompt_text)
                    return;
                }
            }
        },
        computed: {},
        mounted() {
            // el 被新创建的 vm. 替换，并挂载到实例上去之后调用该钩子。
            // 如果 root 实例挂载了一个文档内元素，
            // 当 mounted 被调用时 vm. 也在文档内。
        },
        updated() {
            // 当这个钩子被调用时，组件 DOM 已经更新，
            // 所以你现在可以执行依赖于 DOM 的操作。
            // 然而在大多数情况下，你应该避免在此期间更改状态，
            // 因为这可能会导致更新无限循环。
        },
        activated() {
            // keep-alive 组件激活时调用。
        },
        deactivated() {
            // keep-alive 组件停用时调用。
        },
        beforeDestroy() {
            // 实例销毁之前调用。在这一步，实例仍然完全可用。
        },
        destroyed() {
            // Vue 实例销毁后调用。
            // 调用后，Vue 实例指示的所有东西都会解绑定，
            // 所有的事件监听器会被移除，所有的子实例也会被销毁。
        },
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" rel="stylesheet/stylus">
.apply-page
    min-height 100%
    background-color #a75762
    background-image url("https://image.haoxuezhuli.com/wap-index/sq.jpg")
    background-size cover
    .apply-wrap
        padding 120px 40px 0
    .apply-inner
        background-color #fff
        display flex
        align-items center
        justify-content center
        flex-direction column
        border-radius 4px
        padding 60px 0 120px
        h3
        .info
            font-size 60px
            color #333
            font-weight 600
            line-height 1.5
        .info
            font-weight 100
            margin-bottom 60px
        input
        textarea
            width 500px
            height 80px
            line-height 80px
            padding 0 20px
            font-size 28px
            color #333
            box-sizing border-box
            margin-bottom 20px
            border-radius 4px
            border: 2px solid #eee; /*no*/
            font-family SourceHanSansCN-Regular
        textarea
            height 130px
            line-height 1.5
            padding 20px
            margin-bottom 60px
            resize none
        button
            width 500px
            height 80px
            line-height 80px
            text-align center
            border-radius 4px
            font-size 32px
            color #fff
</style>