<template>
 <div id="DarkModelPage">
        <div>
            <div class="bg">88888</div>
            <h1 class="title">天小天个人网</h1>
            <a  class="btn" @click="modelBrn">模式切换</a>
        </div>
    </div>
</template>

<script>
import { ref, onMounted} from "vue"
export default {
  name: "home",
  setup(){
    let dark = ref(false)
    onMounted(() =>{
        window.document.documentElement.setAttribute( "data-theme", 'light' )
    })
    const modelBrn = () =>{
        dark.value = !dark.value;
        dark.value ? window.document.documentElement.setAttribute( "data-theme", 'dark' ) : window.document.documentElement.setAttribute( "data-theme", 'light' )
    }
    return {
      modelBrn
    }
  }
}
</script>

<style scoped lang="scss">
#DarkModelPage{
    //在此使用了背景颜色变量
    @include background_color("background_color");
    //再次使用了文字颜色变量
    @include font_color("text-color");
    display: flex;
    height: 100%;
    justify-content:center;
    align-items: center;
    transition: background 1s , color 0.6s;
    .bg{
        background-color: $menuBg;
    }
    .title{
        margin-bottom: 20px;
    }
    .btn{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 40px;
        margin:  0 auto;
    }
}
</style>
