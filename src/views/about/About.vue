<template>
  <div class="about">
    <article class="weui-article">
      <h2>五子棋</h2>
      <section>
        <section>
          <p>
            这是一个Vue框架的JS代码五子棋游戏，浏览器中运行，在本地完成计算。AI具有一定的棋力，并且可以调节AI计算的深度。
          </p>
        </section>

        <section>
          <h3>源码和文档</h3>
          <p>
            <ul>
              <li>
                代码放在github上: <a href="https://github.com/shut0011/gobang04" target="_blank">shut0011/gobang04</a>
              </li>
              <li>还欠缺禁手算法</li>
            </ul>
          </p>
        </section>

        <section>
          <h3>AI 用到了什么技术</h3>
          <p>
            这是一个基于Alpha-Beta搜索的AI，主要用到了如下技术：
            <ul>
              <li>Alpha-Beta剪枝的极小化最大值方法</li>
              <li>Zobrist哈希置换表</li>
              <li>提高搜索效率的启发式评估</li>
              <li>逐步迭代加深</li>
            </ul>
          </p>
        </section>
        <section>
          <h3>用到的UI技术</h3>
          <p>
            UI 采用 Vue 框架完成，主要用到了:
            <ul>
              <li><a href="https://weui.io/" target="_blank">WeUI</a>中的一些样式</li>
              <li>使用了阿里的 <a href="https://www.iconfont.cn/" target="_blank">iconfont</a> 中的图标样式</li>
              <li>使用了 <a href="https://element.eleme.cn/#/zh-CN/component/installation" target="_blank">
              element-ui</a> 组件</li>
            </ul> 
          </p>
        </section>

      </section>
    </article>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style scoped>
a {
  color: blue;
}
</style>