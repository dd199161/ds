<template>
  <div class="titles">
    <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
      <el-form-item label="账号：" prop="pass">
        <el-input type="text" v-model="ruleForm2.pass" auto-complete="off" style="width:320px;"></el-input>
      </el-form-item>
      <el-form-item label="密码：" prop="checkPass">
        <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" style="width:320px"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入账号'))
      } else {
        callback()
      }
    }
    var validatePas = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        callback()
      }
    }
    return {
      ruleForm2: {
        pass: '',
        checkPass: '',
      },
      rules2: {
        pass: [{validator: validatePass, trigger: 'blur'}],
        checkPass: [{validator: validatePas, trigger: 'blur'}],
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          if (this.ruleForm2.pass !== 'abc') {
            this.$message({
              message: `账号不存在`,
              duration: 800,
              type: 'error',
            })
          } else if (this.ruleForm2.checkPass !== '123') {
            this.$message({
              message: `密码错误`,
              duration: 800,
              type: 'error',
            })
          }
        }
        if (
          this.ruleForm2.pass === 'abc' &&
          this.ruleForm2.checkPass === '123'
        ) {
          this.$alert('登陆成功', {
            confirmButtonText: '确定',
            callback: action => {
              this.$router.push({
                path: '/vuexcount',
              })
            },
          })
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>
<style>

</style>

