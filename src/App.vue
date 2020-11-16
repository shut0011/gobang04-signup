<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import MainTabBar from 'components/content/mainTabBar/MainTabBar'
  export default {
    name: 'app',
    data() {
      return {
        setLocal: 'cn'
      }
    },
    components: {
      MainTabBar
    },
    mounted() {
      // console.log('app mounted')
      this.setLocal = this.$i18n.locale
    }
    
  }

</script>

<style>
  @import "assets/css/base.css";

</style>
