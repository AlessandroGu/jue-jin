<template>
  <div class="bottom-banner">
      <div class="tab-item">
          <router-link :to="{path: '/'}">
            <div>
                <div class="include">
                    <i class="iconfont my-icon">&#xe6a6;</i>
                </div>
                <span class="item-wrapper">首页</span>
            </div>
          </router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path: '/find'}">
            <div>
                <div class="include">
                    <i class="iconfont my-icon">&#xe669;</i>
                </div>
                <span class="item-wrapper">发现</span>
            </div>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path: '/messages'}">
            <div>
                <div class="include">
                    <i class="iconfont my-icon" style="margin-left: 13px;">&#xe62d;</i>
                </div>
                <span class="item-wrapper">消息</span>
            </div>
        </router-link>
      </div>
      <div class="tab-item">
        <router-link :to="{path: '/mine'}">
            <div>
                <div class="include">
                    <i class="iconfont my-icon">&#xe705;</i>
                </div>
                <span class="item-wrapper">我的</span>
            </div>
        </router-link>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus">
    .bottom-banner 
        -webkit-transform: translateZ(0);
        width: 100%
        height: 48px
        line-height: 48px
        text-align: center
        position: fixed
        bottom: 0
        left: 0
        display: flex
        font-size: 13px
        background-color: #F5F5F5
        box-shadow: inset 0px 1px 1px -1px #A7A7AB
        .tab-item 
            flex: 1
            a
                .include
                    height: 20px
                    margin-top: -5px
                    .my-icon
                        font-size: 21px
                .item-wrapper
                    display: block
                    margin-top: -2px
        .router-link-active
            color: red
</style>
