<template>
    <div>
        <Header></Header>
	    <Content></Content>
        <Footer></Footer>
    </div>
</template>
<script>
    //App.vue 容器文件
    import Header from  "./components/Header.vue"
    import Content from  "./components/Content.vue"
    import Footer from  "./components/Footer.vue"

    export default{
        methods:{
            
        },
        components:{
            "Header":Header,
            "Content":Content,
            "Footer":Footer
        }
    }
</script>
<style scoped>
.title {
    color:red;
}
</style>