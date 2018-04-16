<template>
  <div class="mine">
      <div class="top-word">我的</div>
      <div class="middle-content">
          <div class="left-img">
              <img src="./me.jpg" alt="">
          </div>
          <div class="right-introduce">
              <p class="road-person">途中人</p>
              <span class="web-develop">前端开发工程师</span>
              <div class="bg-img">
                  <img src="./right2.png" alt="">
              </div>
          </div>
      </div>
      <div class="my-items">
              <ul>
                  <li>
                      <i class="iconfont my-icon">&#xe65e;</i>我喜欢的
                  </li>
                  <li>
                      <i class="iconfont my-icon">&#xe602;</i>收藏集
                  </li>
                  <li>
                      <i class="iconfont my-icon">&#xe6e2;</i>阅读过的文章
                  </li>
                  <li>
                      <i class="iconfont my-icon">&#xe6ba;</i>标签管理
                  </li>
              </ul>
          </div>
          <div class="my-set">
              <ul>
                  <li>
                      <i class="iconfont my-icon">&#xe60f;</i>意见反馈
                  </li>
                  <li>
                      <i class="iconfont my-icon">&#xe676;</i>设置
                  </li>
              </ul>
          </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus">
    .mine 
        .top-word 
            width: 100%
            height: 40px
            line-height: 40px
            text-align: center
            background-color: #f5f5f7
            box-shadow: inset 0px -1px 1px -1px #A7A7AB
        .middle-content 
            position: relative
            width: 100%
            height: 100px
            background: #fff
            margin-top: 20px
            padding-top: 1px
            display: flex
            .left-img 
                width: 50px
                height: 50px
                margin-left: 20px
                margin-top: 25px
                img 
                    width: 100%
                    height: 100%
                    border-radius: 50%
            .right-introduce 
                flex: 1
                padding-left: 20px
                padding-top: 30px
                .road-person 
                    font-size: 18px
                    line-height: 20px
                    font-weight: 500
                    color: #000
                    padding-bottom: 2px
                .web-develop 
                    font-size: 14px
                    font-weight: 400
                    color: #8b8b8b
                .bg-img 
                    position: absolute
                    top: 40px
                    right: 20px
                    width: 15px
                    height: 20px
                    img 
                        width: 100%
                        height: 100%
        .my-items
            width: 100%
            background: #fff
            margin-top: 20px
            ul 
                li 
                    width: 100%
                    height: 50px
                    line-height: 50px
                    font-size: 16px
                    color: #000
                    border-bottom: 1px solid #A7A7AB
                    .my-icon 
                        color: #ABB4BF
                        font-size: 18px
                        padding-left: 20px
                        padding-right: 30px
        .my-set
            width: 100%
            background: #fff
            margin-top: 20px
            ul
                li
                    width: 100%
                    height: 50px
                    line-height: 50px
                    font-size: 16px
                    color: #000
                    box-shadow: inset 0px -1px 1px -1px #A7A7AB
                    .my-icon 
                        color: #ABB4BF
                        font-size: 18px
                        padding-left: 20px
                        padding-right: 30px
</style>
