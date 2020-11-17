<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabBar/MainTabBar'
import request from '@/service'

export default {
  name: 'app',
  data() {
    return {
      setLocal: 'cn',
      isLogin: 'true'
    }
  },
  components: {
    MainTabBar
  },
  mounted() {
    console.log('app mounted')
    //this.setLocal = this.$i18n.locale
    this.checkLogin()
  },
  methods: {
    async checkLogin() {
      await request.get('users/checkLogin').then((res) => {
        if (res.status === 200) {
          this.name = res.data.name
          this.isLogin = true
        } else {
          this.$router.push({ name: 'signup' })
          this.isLogin = false
        }
      })
    }    
  }
}
</script>

<style>
@import "../../assets/css/base.css";

#app {
  background-image: url(/timg.jpg);
  background-repeat: no-repeat;
  background-color: #b8e5f8;
  background-size: 120%;
  background-position: center;
  height: 100vh;
  overflow: auto
}
</style>
