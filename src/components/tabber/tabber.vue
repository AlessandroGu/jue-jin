<template>
  <div class="tabber">
      <div class="item-tabber">
          <router-link :to="{path: '/home/homepage'}">
            <span class="tabbar-link">首页</span>
          </router-link>
      </div>
      <div class="item-tabber">
          <router-link :to="{path: '/home/before'}">
            <span class="tabbar-link">前端</span>
          </router-link>
      </div>
      <div class="item-tabber">
          <router-link :to="{path: '/home/product'}">
            <span class="tabbar-link">产品</span>
          </router-link>
      </div>
      <div class="item-tabber">
          <router-link :to="{path: '/home/design'}">
            <span class="tabbar-link">设计</span>
          </router-link>
      </div>
      <div class="item-tabber">
          <router-link :to="{path: '/home/after'}">
            <span class="tabbar-link">后端</span>
          </router-link>
      </div>
      <div class="item-tabber">
          <router-link :to="{path: '/home/develop'}">
            <span class="tabbar-link">开发</span>
          </router-link>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus">
    .tabber 
        -webkit-transform: translateZ(0);
        position: fixed
        top: 0
        left: 0
        z-index: 100
        width: 100%
        height: 40px
        line-height: 40px
        text-align: center
        display: flex
        font-size: 14px
        box-shadow: inset 0px -1px 1px -1px #A7A7AB
        background-color: #f5f5f7
        .item-tabber 
            flex: 1
            a
                display: block
            .router-link-exact-active
                color: #007AFF
                border-bottom: 1px solid #006CFF
            .tabbar-link 
                display: block
</style>
