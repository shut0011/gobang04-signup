<template>
  <div class="tab-bar-item" @click="itemClick">
    <div :style="activeStyle"><slot name="item-icon"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'yellow'
      }
    },
    data() {
      return {
        
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {color: "black"}
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 10px;
  }

  .tab-bar-item img {
    width: 29px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 4px;
  }

  .tab-bar-item svg {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;

  }

  .icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    overflow: hidden;
    font-size: 30px;
  }
</style>