<template>
    <swiper id="swipe" :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide v-for="(img, index) in hot_scenicspot" :key="index">
            <img :src="img.pics" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "Swipe",
        data(){
            return {
                swiperOption: {
                    notNextTick: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    loop: true,
                    autoplay: {
                        delay: 1800
                    },
                    speed: 1500,
                    // 滑动后回调函数
                    on: {
                        slideChangeTransitionEnd(){
                            // console.log(this.activeIndex);
                        }
                    }
                },
                imgs: [
                    { img_url: require('../../../../images/home_swipe1.jpg') },
                    { img_url: require('../../../../images/home_swipe2.jpg') },
                    { img_url: require('../../../../images/home_swipe3.jpg') },
                    { img_url: require('../../../../images/home_swipe4.jpg') },
                    { img_url: require('../../../../images/home_swipe5.jpg') },
                    { img_url: require('../../../../images/home_swipe6.jpg') },
                ]
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        props: {
            hot_scenicspot: Array
        }
    }
</script>

<style lang="scss" scoped>
    #swipe{
        width: 100%;
        height: 12rem;
        margin-top: 0.75rem;
        box-shadow: 0 3px 9px #999;

        img{
            width: 100%;
        }
    }
</style>
