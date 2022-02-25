 <template>
  <div id="app">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <!-- <keep-alive><router-view /> </keep-alive> -->
  </div>
</template>

 <script>
 export default {
  name: 'App',
 }
 </script>
 
<style lang="scss">
body {
  background-color: #EBF0F5;
}
#app {
  width: 100%;
  height: 100vh;
}

</style>>