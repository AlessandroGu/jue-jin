<template>
    <div class="boildetail">
        <div class="boil-head">
            <div class="left-icon">
                <i class="iconfont">&#xe607;</i>
            </div>
            <div class="middle-icon">
                <img src="./image/12.png" alt="">
                <span class="word">坊子</span>
            </div>
            <div class="right-icon">
                <i class="iconfont">&#xe65d;</i>
            </div>
        </div>
        <div class="top-img">
            <img src="./image/2.png" alt="">
            <div class="bottom-img">
                <div class="left-person">
                    <i class="iconfont">&#xe65d;</i>
                    <span>31人参加</span>
                </div>
                <div class="right-img">
                    <ul>
                        <li>
                            <img src="./image/1.png" alt="">
                        </li>
                        <li>
                            <img src="./image/2.png" alt="">
                        </li>
                        <li>
                            <img src="./image/3.png" alt="">
                        </li>
                        <li>
                            <img src="./image/4.png" alt="">
                        </li>
                        <li>
                            <img src="./image/5.png" alt="">
                        </li>
                        <li>
                            <img src="./image/6.png" alt="">
                        </li>
                        <li>
                            <img src="./image/7.png" alt="">
                        </li>
                        <li>
                            <img src="./image/8.png" alt="">
                        </li>
                        <li>
                            <img src="./image/9.png" alt="">
                        </li>
                        <li>
                            <img src="./image/10.png" alt="">
                        </li>
                        <li>
                            <img src="./image/11.png" alt="">
                        </li>
                        <li>
                            <img src="./image/12.png" alt="">
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="middle-boil">
            <p class="boil-point">沸点：说到夏天你的第一反应是什么？</p>
            <p class="belong">对于小编来说，说到夏天最直接的反应就是海边，那么对你来说又是什么呢？</p>
            <div class="icon-hour">
                <span>
                    <i class="iconfont">&#xe603;</i>14小时前
                </span>
                <span>
                    <i class="iconfont">&#xe666;</i>403
                </span>
            </div>
        </div>
        <div class="answer">
            <span class="first">30条回答</span>
            <span class="second">最新</span>
            <span class="third">最热</span>
        </div>
        <div class="bottom-comment">
            <div>
                <div class="top-avatar">
                    <div class="avatar-img">
                        <img src="./image/1.png" alt="">
                    </div>
                    <div class="middle-hour">
                        <p>AlexCheung</p>
                        <span>16小时前</span>
                    </div>
                    <div class="number">
                        <i class="iconfont">&#xe634;</i>5
                    </div>
                </div>
                <div class="middle-comment">
                    可以穿体恤衫了， 可以下河游泳了，可以去捉泥鳅了，可以去偷瓜吃了，可以捉知了喂狼狗了，可以去我姨家吃葡萄了，可以去河边捉蛇玩了，四更天可以捉刚破壳的知了，可以到椿树捉椿蹦蹦，可以看西游记了，可以看还珠格格了，又能尿尿和泥玩了！
                </div>
                <div class="bottom-icon">
                    <i class="iconfont">&#xe6c5;</i>
                    <i class="iconfont">&#xe65d;</i>
                </div>
            </div>
        </div>
        <div class="bottom-input">
            <div class="icon-uss">
                <i class="iconfont">&#xe65f;</i>
            </div>
            <input type="text" name="" placeholder="我有话说">
            <span>发送</span>
        </div>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus">
    .boildetail
        .boil-head
            width: 100%
            height: 40px
            line-height: 40px
            position: fixed
            z-index: 1510
            top: 0
            left: 0
            display: flex
            color: white
            .left-icon
                // flex: 1
                width: 50px
                height: 100%
                text-align: left
                i
                    font-size: 25px
                    padding-left: 10px
            .middle-icon
                flex: 1
                height: 100%
                line-height: 40px
                img
                    width: 30px
                    height: 30px
                    margin-top: 5px
                    border-radius: 50%
                    vertical-align: top
            .right-icon
                flex: 1
                text-align: right
                i
                    font-size: 25px
                    padding-right: 10px
        .top-img
            width: 100%
            height: 160px
            position: relative
            img
                width: 100%
                height: 100%
            .bottom-img
                position: absolute
                height: 30px
                bottom: 20px
                width: 100%
                background: white
                .left-person
                    float: left
                    width: 120px
                    height: 30px
                    line-height: 30px
                    margin-left: 15px
                    background: #FD8306
                    border-radius: 50px
                    color: #ffffff
                    font-size: 14px
                    i 
                        padding-left: 15px
                    span 
                        padding-left: 5px
                .right-img
                    height: 30px
                    ul
                        li
                            float: right
                            margin-left: -15px
                            img
                                width: 30px
                                height: 30px
                                border-radius: 50%
        .middle-boil
            padding: 20px 15px
            background: #fff
            .boil-point
                color: #000
                font-size: 18px
                line-height: 22px
                font-weight: 600
                padding-bottom: 15px
            .belong
                font-size: 14px
                line-height: 16px
                padding-bottom: 15px
            .icon-hour
                span
                    font-size: 12px
                    color: #D5D1D1
                    vertical-align: middle
                    padding-right: 15px
        .answer
            height: 40px
            line-height: 40px
            width: 100%
            margin-top: 10px
            background: #fff
            box-shadow: inset 0px -1px 1px -1px #A7A7AB
            display: flex
            .first
                flex: 1
                padding-left: 15px
            .second
                float: right
                margin-right: 15px
            .third
                float: right
                margin-right: 15px
        .bottom-comment
            padding: 20px 15px 15px
            display: flex
            .top-avatar
                width: 100%
                height: 40px
                // display: flex
                .avatar-img
                    width: 40px
                    height: 40px
                    float: left
                    img
                        width: 40px
                        height: 40px
                .middle-hour
                    // flex: 1
                    float: left
                    margin-left: 10px
                    p
                        color: #0A0E7E
                        line-height: 22px
                    span
                        font-size: 14px
                        color: #D5D1D1
                .number
                    float: right
                    height: 40px
                    line-height: 40px
                    width: 60px
                    background: #E2F4F7
                    color: #1DA6EB
                    text-align: center
                    i
                        padding-right: 5px
            .middle-comment
                padding: 10px 0px 15px 50px
                color: #000
                line-height: 20px
            .bottom-icon
                padding-left: 50px
                i
                    padding-right: 40px
                    font-size: 20px
        .bottom-input
            z-index: 1510
            position: fixed
            display: flex
            bottom: 0
            background: #fff
            width: 100%
            height: 50px
            line-height: 50px
            box-shadow: inset 0px 1px 1px -1px #A7A7AB
            .icon-uss
                float: left
                height: 100%
                width: 50px
                text-align: center
                i
                    color: #ACA9A9
                    font-size: 20px
            input
                flex: 1
                height: 36px
                margin-top: 7px
                border: 0.5px solid #DEDCDC
            span
                display: block
                float: right
                width: 50px
                text-align: center
                color: #2375E3
</style>