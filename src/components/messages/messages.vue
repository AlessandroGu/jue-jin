<template>
    <div class="messages">
        <div class="top-messages">消息</div>
        <div class="info-content">
            <ul>
                <li>
                    <div class="info-item">
                        <div class="left-img">
                            <img src="./me.jpg" alt="">
                        </div>
                        <div class="right-content">
                            <div class="left-content">
                                <p>白小明 关注了你</p>
                                <span>学生</span>
                            </div>
                            <div class="right-icon">
                                <i class="iconfont btn-add">&#xe674;</i>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="info-item">
                        <div class="left-img">
                            <img src="./me.jpg" alt="">
                        </div>
                        <div class="right-content">
                            <div class="left-content">
                                <p>白小明 关注了你</p>
                                <span>学生</span>
                            </div>
                            <div class="right-icon">
                                <i class="iconfont btn-add">&#xe674;</i>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="info-item">
                        <div class="left-img">
                            <img src="./me.jpg" alt="">
                        </div>
                        <div class="right-content">
                            <div class="left-content">
                                <p>白小明 关注了你</p>
                                <span>学生</span>
                            </div>
                            <div class="right-icon">
                                <i class="iconfont btn-add">&#xe674;</i>
                            </div>
                        </div>
                    </div>
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
    .messages
        .top-messages
            width: 100%
            height: 40px
            line-height: 40px
            text-align: center
            background-color: #f5f5f7
            box-shadow: inset 0px -1px 1px -1px #A7A7AB
        .info-content
            background: #ffffff
            ul
                li
                    .info-item
                        display: flex
                        width: 100%
                        height: 60px
                        box-shadow: inset 0px -1px 1px -1px #A7A7AB
                        .left-img
                            width: 35px
                            height: 35px
                            margin-left: 10px
                            margin-top: 10px
                            img
                                width: 100%
                                height: 100%
                        .right-content
                            flex: 1
                            margin-left: 10px
                            display: flex
                            .left-content
                                flex: 1
                                p
                                    font-size: 14px
                                    padding-top: 11px
                                    padding-bottom: 5px
                                    color: #8b8b8b;
                                span
                                    font-size: 12px
                                    color: #8b8b8b;
                            .right-icon
                                flex: 1
                                text-align: right
                                margin-right: 15px
                                line-height: 60px
                                .btn-add
                                    font-size: 28px
                                    color: #66C300
</style>
