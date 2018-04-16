<template>
<transition name="move">
    <div id="listdetail" v-show="beShow">
        <div class="for-each">    
            <div class="list-detail">
                <div class="list-head">
                    <div class="left-icon" @click="hide">
                        <i class="iconfont">&#xe607;</i>
                    </div>
                    <div class="middle-content">
                        <div class="small-img">
                            <img :src="list.images.large" alt="">
                            <span>{{list.original_title}}</span>
                        </div>
                    </div>
                    <div class="right-icon"></div>
                </div>
                <div class="list-content">
                    <div class="list-img">
                        <img :src="list.images.medium" alt="">
                    </div>
                    <div class="bottom-content">
                        <p class="top-word">{{list.title}}</p>
                        <p class="bottom-word">{{list.original_title}}</p>
                    </div>
                </div>
                <div class="foot">
                    <div class="left-icon">
                        <i class="iconfont">&#xe600;</i>
                    </div>
                    <div class="left-icon">
                        <i class="iconfont">&#xe65a;</i>
                    </div>
                    <div class="left-icon">
                        <i class="iconfont">&#xe602;</i>
                    </div>
                    <div class="right-content">喜欢 {{list.year}}</div>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>
<script>
export default {
    props: {
        list: {
            type: Object
        }
    },
    data() {
        return {
            beShow: false
        }
    },
    methods: {
        show() {
            this.beShow = true;
        },
        hide() {
            this.beShow = false
        }
    }
}
</script>
<style lang="stylus">
                .list-detail
                    z-index: 1100
                    position: fixed
                    left: 0
                    top: 0
                    bottom: 0
                    width: 100%;
                    background: #fff
                    .list-head
                        width: 100%
                        height: 40px
                        line-height: 40px;
                        background-color: #f5f5f7;
                        box-shadow: inset 0px -1px 1px -1px #A7A7AB;
                        color: #000;
                        display: flex
                        .left-icon
                            flex: 40px 0 0
                            text-align: center
                            i
                                font-size: 20px
                                color: #007AFF
                        .middle-content
                            flex: 1
                            .small-img
                                height: 100%
                                img
                                    float: left
                                    width: 30px
                                    height: 30px
                                    margin-top: 5px
                                    border-radius: 50%
                                span 
                                    display: inline-block
                                    line-height: 40px
                                    margin-left: 5px
                                    font-size: 14px
                        .right-icon
                            height: 100%
                            background: url('./fenxiang.png') center center no-repeat
                            flex: 60px 0 0
                            background-size: 32%
                    .list-content
                        .list-img
                            width: 100%
                            height: 180px
                            img 
                                width: 100%
                                height: 100%
                        .bottom-content
                            color: #000
                            padding: 20px 15px 20px 15px
                            .top-word
                                padding-bottom: 30px
                                font-size: 18px
                                line-height: 22px
                                font-weight: 600
                            .bottom-word
                                font-size: 15px
                                line-height: 20px
                    .foot
                        z-index: 1300
                        position: fixed
                        bottom: 0
                        left: 0
                        display: flex
                        width: 100%
                        height: 48px
                        line-height: 48px
                        background-color: #F5F5F5
                        box-shadow: inset 0px 1px 1px -1px #A7A7AB
                        .left-icon
                            flex: 1
                            text-align: center
                            i
                                font-size: 22px
                        .right-content
                            width: 55%
                            float: left
                            text-align: right 
                            margin-right: 20px
                            font-size: 14px
</style>
