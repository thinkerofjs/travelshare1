<template>
    <div id="concentration">
        <h1 class="title">精选</h1>
        <div class="wrapper">
                <div
                    class="wrapperItem"
                    v-for="(story, index) in hot_travels"
                    :key="index"
                    @click="goDetail(story.tid)"
                >
                    <img :src="hosts + story.pics[0]" alt="">
                    <div class="storyInfo">
                        <p class="storyCategory">{{ type[story.tpid-1] }}</p>
                        <p class="storyContent" v-html="story.content">
                            {{ story.content }}
                        </p>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Concentration",
        data(){
            return {
                hosts: '',
                type: ['民宿', '美食', '景点', '艺术', '灵感']
            }
        },
        methods: {
            goDetail(storyId){
                this.$router.push({
                    name: 'traveldesc',
                    params: { storyId }
                });
            }
        },
        mounted() {
            this.hosts = this.host;
        },
        props: {
            hot_travels: Array
        }
    }
</script>

<style lang="scss" scoped>
    #concentration{
        width: 100%;
        height: 9rem;
        margin: 0.75rem 0;
        padding: 0.5rem;
        background-color: #ffffff;
        /*border: 1px solid #f5f5f5;*/
        box-shadow: 0 1px 9px #999;
        .title{
            color: #484848;
            font-size: 1.25rem;
            font-weight: bold;
        }

        .wrapper{
            margin-top: 0.5rem;
            display: -webkit-box;
            overflow-x: scroll;
            overflow-scrolling: touch;

            .wrapperItem{
                width: 5rem;
                height: 6rem;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                border: 1px solid #f5f5f5;
                box-shadow: 0 4px 9px #f5f5f5;
                margin-right: 0.4rem;

                img{
                    width: 100%;
                    height: 2.941rem;
                }
                .storyInfo {
                    margin-top: 0.3rem;
                    .storyCategory{
                        font-size: 0.8rem;
                        font-weight: bold;
                    }
                    .storyContent{
                        font-size: 0.5rem;
                        /*white-space: nowrap;*/
                        /* 设置超出两行的文本使用省略号显示 */
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display:-webkit-box;
                        -webkit-box-orient:vertical;
                        -webkit-line-clamp:2;
                    }
                }

            }
        }
        /*隐藏滚动条*/
        .wrapper::-webkit-scrollbar {display:none}
    }
</style>
