import Vue from 'vue'
import VueI18n from 'vue-i18n'

import enUs from './language/en-US'
import zhCn from './language/zh-CN'
import zhTw from './language/zh-TW'
import jaJp from './language/ja-JP'

Vue.use(VueI18n)

const i18n = new VueI18n({
  //locale: 'en-US',
  locale: (function() {
    if (localStorage.getItem('language')) {
      return localStorage.getItem('language')
    }
    return 'zh-CN'
  }()),

  messages: {
    'zh-CN': zhCn,
    'en-US': enUs,
    'zh-TW': zhTw,
    'ja-JP': jaJp
  }

})

export default i18n