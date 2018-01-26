<template>
<div>
    <Header></Header>
    <div>
        webpaa
    </div>
    <Footer></Footer>
</div>
</template>
<script>

    //首页文件 单文件组件可维护，可重用需要设置单文件组件
    import Header from './components/Header.vue'
    import Content from './components/Content.vue'
    import Footer from './components/Footer.vue'

    //es6 语法
    // >  module.exports = {}
    export default {
        data : function(){
            return {

            }
        },
        methods:{

        },
        computed:{

        },
        components : {
            'Header' : Header,
            'Content' : Content,
            'Footer' : Footer
        }
    }
</script>
<style>

</style>