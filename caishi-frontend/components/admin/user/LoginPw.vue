<template>
  <el-form :model="form" :rules="rules" status-icon ref="form" class="login-pw">
    <div class="hint">
      <i class="hint-icon"></i>
      <span>请输入密码，密码由6-16个字符组成，为了保障您的资金安全， 修改后请牢记您的资金密码。</span>
    </div>
    <el-form-item prop="pw">
      <el-input ref="pw" type="password" v-model="form.pw" placeholder="请输入原登录密码"></el-input>
    </el-form-item>
    <el-form-item prop="newPw">
      <el-input ref="newPw" type="password" v-model="form.newPw" placeholder="请输入新密码"></el-input>
    </el-form-item>
    <el-form-item prop="checkPw">
      <el-input ref="checkPw" type="password" v-model="form.checkPw" placeholder="请重复新密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submit">提交</el-button>
      <el-button @click="reset">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<style lang="scss">
.login-pw {
  width: 410px;
  margin: 0 auto;

  .hint {
    margin-bottom: 20px;

    span {
      font-size: 14px;
      color: #444;
    }
  }

  .hint-icon {
    width: 16px;
    height: 16px;
    background: url('~assets/img/login/hint-icon.png');
    display: inline-block;
  }
}
</style>


<script>
import { zipObject } from 'lodash/fp'
import { mapGetters } from 'vuex'
import { pwReg, getRequiredRule } from '~/plugins/formValidate'
// import logout from '~/util/logout'
export default {
  props: ['visible'],
  data() {
    return {
      form: {
        pw: '',
        newPw: '',
        checkPw: ''
      },
      rules: {
        //this.form key and rules key must same
        pw: [
          getRequiredRule('请输入原登录密码'),
          {
            validator: (rule, value, callback) => {
              if (this.form.newPw !== '') {
                this.$refs.form.validateField('newPw')
              }
              callback()
            },
            trigger: 'blur'
          }
        ],
        newPw: [
          getRequiredRule('请输入新登录密码'),
          {
            validator: (rule, value, callback) => {
              if (value === this.form.pw) {
                callback(new Error('新登录密码不能与原登录密码相同'))
              } else if (!pwReg.test(value)) {
                callback(new Error('密码必须字母数字组合,6-18个字符'))
              } else {
                if (this.form.checkPw !== '') {
                  this.$refs.form.validateField('checkPw')
                }
                callback()
              }
            },
            trigger: 'blur'
          }
        ],
        checkPw: [
          getRequiredRule('请确认新登录密码'),
          {
            validator: (rule, value, callback) => {
              if (value !== this.form.newPw) {
                callback(new Error('两次输入密码不一致!'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submit() {
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$axiosPlus(
            'user/change-login-password',
            zipObject(['old', 'new', 'confirm'].map(_ => `${_}_password`))(
              Object.values(this.form)
            ),
            () => {
              this.$message({
                message: '修改成功！',
                type: 'success',
                duration: 1500,
                // onClose:() => logout(this.$store,this.$router)
                onClose: this.closeDiglog
              })
            }
          )
        } else {
          return false
        }
      })
    },
    closeDiglog() {
      this.$emit('update:visible', false)
    },
    reset() {
      this.closeDiglog()
    }
  },
  mounted() {
    this.$form = this.$refs.form
  }
}
</script>
