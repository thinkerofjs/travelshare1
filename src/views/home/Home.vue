<template>
    <div id="home">
        <div class="top">
            <p class="title">首页</p>
        </div>
        <!-- 轮播图区域 -->
        <Swipe :hot_scenicspot="hot_scenicspot" />

        <!-- 精选区域 -->
        <Concentration :hot_travels="hot_travels"/>

        <!-- 公告区域 -->
        <Announcement :notice="notice"/>

    </div>
</template>

<script>
    import Swipe from './components/swipe/Swipe'
    import Concentration from './components/concentration/Concentration'
    import Announcement from './components/announcement/Announcement'
    import {getHotScenicspot, getHotTravels, getNotice} from './../../service/index'
    import {Toast} from 'vant'
    export default {
        name: "Home",
        data(){
            return {
                hot_scenicspot:[],
                hot_travels: [],
                notice: []
            }
        },
        components: {
            Swipe,
            Concentration,
            Announcement
        },
        mounted() {
            this.getData();
            this.loadScecispot();
        },
        methods: {
            getData(){
                let _this = this;

                // _this.hot_scenicspot = getHotScenicspot(1,5);
                getHotTravels().then(res => {
                    if (res.status === 200) {
                        if (res.data === null) {
                            res.data = []
                        }
                        let travels = res.data;
                        for (let item of travels) {
                            item.pics = item.pics.split(',');
                        }
                        _this.hot_travels = travels
                    } else {
                        Toast({
                            message: '网络错误！'
                        })
                    }
                });

                getNotice().then(res => {
                    if (res.status === 200) {
                        if (res.data === null) {
                            res.data = []
                        }
                        this.notice = res.data
                    } else {
                        Toast({
                            message: '网络错误！'
                        })
                    }
                })
                // _this.notice = getNotice(1,3);
            },
            loadScecispot() {
                let _that = this;
                getHotScenicspot(0, 5).then(res => {
                    console.log('swipe',res.data);
                    if(res.status === 200) {
                        if (res.data === null) {
                            res.data = [];
                        }
                        console.log(res.data);
                        let hot_scenicspot = res.data;
                        console.log('hot_scenicspot',hot_scenicspot);
                        for(let item of hot_scenicspot) {
                            let images = item.imgurl.split(',');
                            for (let i in images) {
                                if (images[i] === '') {
                                    images.splice(i,1);
                                } else {
                                    images[i] = _that.host + images[i];
                                }
                            }
                            item.images = images;
                            item.pics = images[0];
                        }
                        _that.hot_scenicspot = hot_scenicspot;
                    }
                });
            },
        }
    }
</script>

<style lang="scss" scoped>
    #home{
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
        .top{
            display: flex;
            padding: 1rem 0.5rem;
            background-color: #8fd6f3;
            .title{
                width: 100%;
                display: inline-block;
                color: #f5f5f5;
                text-align: center;
                font-size: 1.25rem;
                line-height: 1.25rem;
                font-weight: bold;
            }
        }
    }
    #home::-webkit-scrollbar {display:none}
</style>
