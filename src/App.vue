<template>
  <toast :style="'z-index: 2000;'"/>
  <div class="app">
      <router-view></router-view>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue';

export default {
  components: {
    SideBar
  }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
