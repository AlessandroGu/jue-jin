<template>
    <div class="find">
        <div class="find-container">
        <div class="find-head">
            <div class="search-head" @click="letShow">
                <i class="iconfont search-img">&#xe669;</i>搜索
            </div>
        </div>
        <div class="scroll-content">
            <div class="back-img"></div>
        </div>
        <div class="four-img">
            <div class="item-img">
                <img src="./image/hot_1.png" alt="">
                <span>本周最热</span>
            </div>
            <div class="item-img">
                <img src="./image/hot_2.png" alt="">
                <span>收藏集</span>
            </div>
            <div class="item-img">
                <img src="./image/hot_3.png" alt="">
                <span>线下活动</span>
            </div>
            <div class="item-img">
                <img src="./image/hot_4.png" alt="">
                <span>专栏</span>
            </div>
        </div>
        <div class="fei-point">
            <div class="left-icon">
                <img src="./image/boil_point.png" alt="">
                <span class="feidian">沸点</span>
            </div>
            <div class="right-icon">
                <i class="iconfont">&#xe687;</i>
            </div>
        </div>
        <div class="boil-wrapper">
            <div class="boil-container" ref="usamovie">
                <ul>
                    <li v-for="(item, index) in usamovie" :key="index">
                        <img :src="item.subject.images.small" alt="">
                        <span>
                            <p>{{item.subject.title}}</p>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="include" ref="find">
            <div class="hot-article">
                <div class="hot-head">
                    <div class="left-icon">
                        <img src="./image/hot_red.png" alt="">
                        <span>热门文章</span>
                    </div>
                    <div class="right-icon">
                        <i class="iconfont">&#xe77e;</i>
                        <span>定制热门</span>
                    </div>
                </div>
                <div class="foreach" v-for="(item, index) in movie" :key="index">
                    <div class="hot-list" @click="clickShow(item)">
                        <div class="hot-info">
                            <p>{{item.title}}</p>
                            <div class="bottom-desc">
                                <i class="iconfont">&#xe641;<span>10</span></i>
                                <i class="iconfont">&#xe631;<span>渔人码头</span></i>
                                <i class="iconfont">&#xe603;<span>40分钟前</span></i>
                            </div>
                        </div>
                        <div class="hot-img">
                            <img src="./image/001.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <search ref="searchs"></search>
        <listdetail :list="selectList" ref="listdetails"></listdetail>
    </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import listdetail from '../listDetail/listDetail.vue'
import search from '../search/search.vue'
export default {
    data() {
        return {
            movie: {},
            selectList: {},
            secShow: false,
            usamovie: {}
        }
    },
    methods: {
        _getData() {
            this.$http.get('/api/movie/top250').then((response) => {
                if (response.status === 200) {
                    this.movie = response.data.subjects;
                    console.log(this.movie);
                    // this.$nextTick(() => {
                    //     if (!this.scroll) {
                    //         this.scroll = new BScroll(this.$refs.find, {
                    //             click: true
                    //         })
                    //     } else {
                    //         this.scroll.refresh();
                    //     }
                    // })
                }
            })
        },
        _getBook() {
            this.$http.get('/api/movie/us_box').then((response) => {
                if (response.status === 200) {
                    this.usamovie = response.data.subjects;
                    console.log(this.usamovie);
                    this.$nextTick(() => {
                        this.scroll = new BScroll(this.$refs.usamovie, {
                            click: true,
                            scrollX: true
                        })
                    })
                }
            })
        },
        clickShow(item) {
            this.selectList = item;
            this.$refs.listdetails.show();
        },
        letShow() {
            this.$refs.searchs.show();
        }
    },
    components: {
        listdetail,
        search
    },
    created() {
        this._getData();
        this._getBook();
    }
}
</script>
<style lang="stylus">
.find
    height: 100vh
    .find-head
        width: 100%
        height: 40px
        position: fixed
        top: 0
        left: 0
        background-color: #fff
        text-align: center
        box-shadow: inset 0px -1px 1px -1px #A7A7AB
        .search-head
            width: 95%
            height: 30px
            line-height: 30px
            background-color: #E0E1E5
            border-radius: 5px
            margin-top: 5px
            margin-left: 2.5%
            margin-right: 2.5%
            .search-img
                font-size: 20px
                vertical-align: top
    .scroll-content
        width: 100%
        height: 153px
        margin-top: 40px
        .back-img
            width: 100%
            height: 100%
            background: url('./image/content_list_img_1.png') center center no-repeat
    .four-img
        width: 100%
        height: 80px
        margin-top: 10px
        background: #ffffff
        color: #2e3135
        display: flex
        .item-img
            flex: 1
            text-align: center
            img
                width: 30px
                height: 40px
                padding-top: 10px
            span 
                display: block
                margin-top: 5px
                font-size: 15px
    .fei-point
        width: 100%
        height: 45px
        line-height: 45px
        display: flex
        background: #ffffff
        margin-top: 10px
        box-shadow: inset 0px -1px 1px -1px #A7A7AB;
        .left-icon
            flex: 1
            margin-left: 10px
            img
                width: 20px
                height: 20px
                vertical-align: middle
            .feidian
                display: inline-block
                padding-left: 5px
                font-size: 15px
        .right-icon
            flex: 1
            text-align: right
            margin-right: 10px
    .boil-wrapper
        width: auto
        height: 115px
        overflow-x: hidden !important
        background: #fff
        // border-top: 1px solid #A7A7AB
        box-shadow: inset 0px -1px 1px -1px #A7A7AB
        .boil-container
            width: auto
            height: 100%
            ul
                width: 2110px
                height: 100%
                padding-left: 10px
                li
                    position: relative
                    float: left
                    width: 180px
                    height: 90px
                    border-radius: 5px
                    margin: 10px
                    margin-left: 0
                    display: inline-block
                    img
                        width: 100%
                        height: 100%
                        border-radius: 5px
                    span
                        position: absolute
                        top: 0
                        left: 0
                        width: 180px
                        height: 90px
                        border-radius: 5px
                        color: #ffffff
                        font-size: 15px
                        box-shadow: inset 180px 10px 5px rgba(0,0,0,.4)
                        p
                            width: 145px
                            height: 35px
                            padding-left: 20px
                            padding-right: 15px
                            padding-top: 25px
                            font-size: 15px
                            line-height: 35px
                            text-align: center
                            overflow: hidden
                            white-space: normal
                            text-overflow: ellipsis !important
    .include
        height: 145px    
        .hot-article
            .hot-head
                width: 100%
                height: 45px
                line-height: 45px
                background: #ffffff
                margin-top: 10px
                display: flex
                box-shadow: inset 0px -1px 1px -1px #A7A7AB
                .left-icon
                    flex: 1
                    margin-left: 10px
                    img
                        width: 20px
                        height: 20px
                        vertical-align: text-bottom
                    span
                        display: inline-block
                        padding-left: 5px
                        font-size: 15px
                .right-icon
                    flex: 1
                    text-align: right
                    margin-right: 10px
            .foreach
                .hot-list
                    height: 100px
                    display: flex
                    background: #fff
                    box-shadow: inset 0px -1px 1px -1px #a7a7ab;
                    .hot-info
                        flex: 1
                        padding-top: 20px
                        padding-left: 10px
                        p
                            color: black
                        .bottom-desc
                            padding-top: 5px
                            i
                                font-size: 10px
                    .hot-img
                        flex: 60px 0 0
                        text-align: right
                        width: 60px
                        height: 60px
                        padding-top: 20px
                        padding-right: 10px
                        img 
                            width: 100%
                            height: 100%

</style>