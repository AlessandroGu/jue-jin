<template>
    <transition name="transMove">
        <div class="search" v-show="searchShow">
            <div class="search-head">
                <i class="iconfont" @click="hide">&#xe687;</i>搜索
            </div>
            <div class="search-content">
                <i class="iconfont">&#xe669;</i>
                <input type="search" placeholder="搜索">
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    data() {
        return {
            searchShow: false
        }
    },
    methods: {
        hide() {
            this.searchShow = false;
        },
        show() {
            this.searchShow = true;
        }
    }
}
</script>
<style lang="stylus">
    .search
        position: fixed
        top: 0
        left: 0
        bottom: 0
        width: 100%
        z-index: 1000
        background: #ffffff
        .search-head
            width: 100%
            height: 40px
            line-height: 40px
            text-align: center
            color: #000000
            background: #f5f5f7
            box-shadow: inset 0px -1px 1px -1px #A7A7AB
            i
                position: absolute;
                padding: 0 10px 0 10px
                display: block
                transform: rotate(180deg)
                color: #007AFF
                font-size: 20px
                font-weight: 600
        .search-content
            margin: 10px
            height: 30px
            line-height: 30px
            background-color: #E0E1E5
            border-radius: 5px
            i
                font-size: 20px
                vertical-align: middle
                padding-left: 10px
            input
                width: 85%
                height: 30px
                background-color: #E0E1E5
                border-radius: 5px
                outline: none
                vertical-align: middle
</style>
