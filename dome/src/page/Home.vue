<template>
    <div>
        <ChatList :list="list"></ChatList>
    </div>
</template>
<script>
    import ChatList from '../components/ChatList.vue'
    export default {
        components : {
            ChatList
        },
        created(){
            this.$http.get('./static/newData.json').then(function(res){
                this.$store.commit('saveList',res.body);
                console.log(res.data);
            },function(res){
                console.log(res.status + " @" + new Date())
            })
        },
        computed:{
            list(){
                return this.$store.getters.getList;
            }
        }
    }
</script>
<style>

</style>