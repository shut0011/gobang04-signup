<template>
  
  <tab-bar>
    <tab-bar-item path="/home" activeColor="blue">
      <icon slot="item-icon" name="home"></icon>
      <div slot="item-text">{{$t('home')}}</div>
    </tab-bar-item>
  
    <tab-bar-item path="/setting" activeColor="blue">
       <icon slot="item-icon" name="setting"></icon>
       <div slot="item-text">{{$t('setting')}}</div>
     </tab-bar-item>    
 
    <tab-bar-item path="/change" activeColor="red">
      <icon slot="item-icon" name="memo"></icon>
      <div slot="item-text">{{$t('change')}}</div>
    </tab-bar-item>

    <tab-bar-item path="/about" activeColor="red">
      <icon slot="item-icon" name="about"></icon>
      <div slot="item-text">{{$t('about')}}</div>
    </tab-bar-item>
  
  </tab-bar>
</template>

<script>
  import Icon from 'components/common/icon/Icon'
  import TabBarItem from 'components/common/tabbar/TabBarItem'
  import TabBar from 'components/common/tabbar/TabBar'

  export default {
    name: "MainTabBar",
    components: {
      Icon,
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
    font-size: 30px;
  }

</style>