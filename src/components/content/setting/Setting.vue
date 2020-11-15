<template>
  <div class="hello">
    <h1>{{$t('setting')}}</h1>

    <div class="weui-cells">
      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
          <label for="" class="weui-label">{{$t('search deep')}}:</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="deep" :value="deep" @change="setDeep">
            <option v-for="d in deepList" :key="d.value" :value="d.value">{{$t(d.title)}} ({{d.value}}~{{d.value+2}})</option>
          </select>
        </div>
      </div>
      <div class="weui-cell weui-cell_switch">
        <div class="weui-cell__hd">
          <label for="" class="weui-label">{{$t('step spread')}}:</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-switch" type="checkbox" style="float:right" :checked="spread" @input="setSpread">
        </div>
      </div>
      <div class="weui-cell weui-cell_select weui-cell_select-after">
        <div class="weui-cell__hd">
          <label for="" class="weui-label">{{$t('lang')}}:</label>
        </div>
        <div class="weui-cell__bd">
          <select class="weui-select" name="lang" :value="lang" @change="setLang">
            <option value="en-US">English</option>
            <option value="zh-CN">简体中文</option>
            <option value="zh-TW">繁體中文</option>
            <option value="ja-JP">日本語 </option>
          </select>
        </div>
      </div>
      <div class="weui-cell weui-cell_switch">
        <div class="weui-cell__hd">
          <label for="" class="weui-label">{{$t('show steps')}}:</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-switch" type="checkbox" style="float:right" :checked="showSteps" @input="setShowSteps">
        </div>
      </div>
    </div>
    <el-button class="logout-btn" @click="logout()">退出登录</el-button>
    <div class="weui-footer">
      <p class="weui-footer__links">
        <a href="https://gobang" target="_blank" class="weui-footer__link">Github</a>
        <a href="javascript:void(0);" class="weui-footer__link">@ tang</a>
      </p>
      <p class="weui-footer__text">Copyright © 2020 </p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions} from 'vuex'
import { SET_DEEP, SET_LANG, SET_SHOW_STEPS, SET_SPREAD } from 'store/modules/home/mutations-type.js'
import i18n from 'i18n/index.js'
import request from '@/service'

export default {
  name: 'Setting',
  components: {
  },
  computed: {
    ...mapState({
      version: 'version',
      lang: state => state.home.lang,
      deep: state => state.home.deep,
      deepList: state => state.home.deepList,
      showSteps: state => state.home.showSteps,
      spread: state => state.home.spread
    })
  },
  methods: {
    setDeep (e) {
      console.log('Setting.vue setDeep')
      console.log(this)
      let value = e.target.value
      this.$store.dispatch('home/' + SET_DEEP, parseInt(value))

      console.log('Setting.vue setDeep end')
    },
    setLang (e) {
      let value = e.target.value
      this.$store.dispatch('home/' + SET_LANG, value)
      i18n.locale = value
    },
    setShowSteps (e) {
      let value = e.target.checked
      this.$store.dispatch('home/' + SET_SHOW_STEPS, value)
    },
    setSpread (e) {
      let value = e.target.checked
      this.$store.dispatch('home/' + SET_SPREAD, value)
    },
    async logout() {
      await request.post('/users/logout').then((res) => {
        if (res.status === 200) {
          this.$Message.success('注销成功')
          this.name = ''
          this.$router.push({ name: 'signup' })
        } else {
          this.$Message.error('注销失败，请稍后再试')
        }
      })
      console.log('登出')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import 'assets/css/variables';
h1 {
  font-size: 22px;
  color: $primary-color;
  text-align: center;
}

.operations {
  .weui-btn {
    margin: 5px;
    height: 46px;
  }
} 

.weui-footer {
  margin-top: 32px;
}

.weui-label {
  font-size: 16px;
}

.weui-cell__bd {
  font-size: 16px;
}

.weui-switch, .weui-switch-cp__box {
  width: 48px;
  height: 24px;
  border-radius: 10px;
}

.weui-switch-cp__box:before, .weui-switch:before {
  width: 0px;
  height: 0px;
}

.weui-switch-cp__box:after, .weui-switch:after {
  top: -2px;
  left: -6px;
  width: 25px;
  height: 25px;
  border-radius: 12px;
}

.weui-switch-cp__input:checked~.weui-switch-cp__box:after, .weui-switch:checked:after {
    transform: translateX(30px);
}

.logout-btn {
  width: 100%;
  font-size: 16px;
  margin-top: 1px;
}

</style>
