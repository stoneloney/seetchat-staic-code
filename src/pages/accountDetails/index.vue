<template>
    <!--账户明细页面-->
    <div class="accountDetails">
        <van-sticky>
            <van-nav-bar style="height:50px">  
                <template #title><span style="font-size:18px">账户明细</span></template>
                <template #left><van-icon name="arrow-left"  size="20" color="#000000" @click="fanHui"/></template>
            </van-nav-bar>
        </van-sticky>
        <div class="dateDiv">2020-06-21</div>
        <van-cell-group>
            <van-cell title="提现" value="-200.00" />
            <van-cell title="提现" value="-180.00" />
            <van-cell title="平台" value="-20.00" />
        </van-cell-group>
        <div class="dateDiv">2020-06-16</div>
        <van-cell-group>
            <van-cell title="李月如" value="+600.00" />
            <van-cell title="杨洋" value="+280.00" />
            <van-cell title="零度" value="+200.00" />
        </van-cell-group>
        


    </div>

</template>

<script>

    //引入组件首字母大写
    import { Dialog} from 'vant';
    import Vue from 'vue';
    export default {

        //基础数据存放处
        data (){
            return {
               shouKuanRen: '',
               shouKuanHao: '',
               money: 0,
            }
        },

        //数据预加载
        created : function(){
            this.screenHeight = window.screenHeight;
        },

        //网页加载完成
        mounted () {
            
        },

        //声明方法
        methods : {
           //返回上一页
           fanHui:function(){
                this.$router.go(-1);
           }
           
        },

        //计算属性
        computed: {

        },


        components: {
           
        }
    }
</script>

<style lang="stylus" scoped>
    .accountDetails
        height:667px
        width:100vw
        background-color:#F9F9FB
        .head
            padding-left: 15px;
            padding-top:20px
            background-color:white
            font-size:18px
            height:36px;
            width:100vw
            .tuPiao
                margin-top:3px
        .dateDiv
            margin:10px 15px 10px 15px
            color:#C1C1C1
            font-size:14px
</style>
