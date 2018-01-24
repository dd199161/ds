<template>
  <div>
    <div>
      <p>
        <input type="text" v-model="name" placeholder="请输入用户名">
      </p>
    </div>
    <div>
      <p>
      	{{}}
        <input type="password" v-model="pwd" placeholder="请输入密码">
      </p>
    </div>
    <div>
      <button @click="login">登录</button>
    </div>
    <div v-show="error"> {{error}} </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        name: '',
        pwd: '',
        error: ''
      }
    },
    methods: {
      login() {
        var _name = this.name,
          _pwd = this.pwd;
        if(!_name) {
          alert('用户名不能为空！');
          return;
        }
        if(!_pwd) {
          alert('密码不能为空！');
          return;
        }
        this.$http.get('./static/user.json').then(function(res) {
          if(res.data.name != _name) {
          	console.log(res.data.name,_name);
            this.error = '用户名不正确'
          } else if(res.data.password != _pwd) {
            this.error = '密码不正确'
          } else {
            this.$store.commit('saveUser', res.data)
            this.name = '';
            this.pwd = '';
            this.error = ''
            this.$router.push({
              path: '/main'
            })
          }
        }, function(res) {
          console.log(res)
        })
      }
    }
  }
</script>
<style>

</style>