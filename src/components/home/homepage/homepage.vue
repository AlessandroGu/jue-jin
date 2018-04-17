<template>
    <div class="homepage">
        <div class="homepage-roll-container" ref="homepage">
            <div class="homepage-container">
                <div class="hot-recommend">
                    <div class="hot-recommend-head">
                        <div class="left-content">
                            <i class="iconfont">&#xe67c;</i>
                            <span>热门推荐</span>
                        </div>
                        <div class="right-content">
                            <i class="iconfont refresh">&#xe6d3;</i>
                            <i class="iconfont">&#xe6bf;</i>
                        </div>
                    </div>
                </div>
                <div class="foreach" v-for="(item, index) in movie" :key="index">
                    <div class="hot-list"  @click="clickShow(item)">
                        <div class="hot-info">
                            <p>{{item.title}}</p>
                            <div class="bottom-desc">
                                <i class="iconfont">&#xe641;<span>10</span></i>
                                <i class="iconfont">&#xe631;<span>渔人码头</span></i>
                                <i class="iconfont">&#xe603;<span>40分钟前</span></i>
                            </div>
                        </div>
                        <div class="hot-img">
                            <img src="./001.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <listDetail ref="listdetails" :list="selectList"></listDetail>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import listDetail from '../../listDetail/listDetail.vue'
export default {
    data() {
        return {
            movie: [],
            find: {},
            isShow: false,
            selectList: {}
        }
    },
    components: {
        listDetail
    },
    created() {
        this.$http.get('/api/movie/top250').then((response) => {
            if (response.status === 200) {
                this.movie = response.data.subjects;
                console.log(this.movie);
                this.$nextTick(() => {
                    if (!this.scroll) {
                        this.scroll = new BScroll(this.$refs.homepage, {
                            click: true
                        })
                    } else {
                        this.scroll.refresh();
                    }
                })
            }
        })
    },
    methods: {
        clickShow(item) {
            this.selectList = item;
            this.$refs.listdetails.show();
        }
    },
    mounted() {
        
    }
}
</script>
<style lang="stylus">  
.homepage
    margin-top: 50px
    .homepage-roll-container
        height: 100vh
        .homepage-container
            .hot-recommend
                width: 100%
                background: #ffffff
                .hot-recommend-head
                    width: 100%
                    height: 37px
                    line-height: 37px
                    background: #ffffff
                    display: flex
                    box-shadow: inset 0px -1px 1px -1px #A7A7AB;
                    .left-content
                        flex: 1
                        color: #007AFF;
                        padding-left: 10px
                    .right-content
                        flex: 1
                        text-align: right
                        padding-right: 15px
                        i 
                            font-size: 20px
                        .refresh
                            padding-right: 5px
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
