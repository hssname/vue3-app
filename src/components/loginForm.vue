<template>
  <div class="login-form">
      <el-form
      ref="loginForm"
      :model="loginForm"
      :rules="rules"
      autocomplete="off"
      class="login-form"
      label-position="left"
    >
    <el-form-item label="Activity name" prop="name">
      <el-input v-model="loginForm.name"></el-input>
    </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {reactive, ref} from 'vue'
export default {
    name: 'loginForm',
    setup(){
        const loginForm = reactive({
            name: ''

        });
        const rules = reactive([
             {
                required: true,
                message: 'Please input Activity name',
                trigger: 'blur',
            },
        ]);
        return {
           loginForm, 
           rules
        }
    }
}
</script>

<style lang="scss" scoped>

</style>