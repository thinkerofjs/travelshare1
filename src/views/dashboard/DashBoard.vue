<template>
    <div id="dashboard">
<!--        <transition :name="transitionName">-->
        <router-view />
<!--        </transition>-->
        <van-tabbar
            v-model="active"
            active-color="#87CEEB"
            inactive-color="#000"
        >
            <van-tabbar-item icon="home-o" replace to="/dashboard/home">首页</van-tabbar-item>
            <van-tabbar-item icon="other-pay" replace to="/dashboard/travels">游记</van-tabbar-item>
            <van-tabbar-item icon="logistics" replace to="/dashboard/gotravel">去旅行</van-tabbar-item>
            <van-tabbar-item icon="user-o" replace to="/dashboard/mine">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "DashBoard",
        data(){
            return {
                active: Number(sessionStorage.getItem('tabBarActiveIndex')) || 0,
                transitionName: 'van-slide-left'
            }
        },
        watch: {
            active(value){
                let tabBarActiveIndex = value > 0 ? value : 0;
                sessionStorage.setItem('tabBarActiveIndex', tabBarActiveIndex)
            }
        },
        created(){
            this.init();
        },
        methods: {
            // 初始化导航栏状态
            init(){
                let routeUrl = this.$route.path;
                if (routeUrl === '/dashboard/home') {
                    this.active = 0;
                }
            },
        },
    }
</script>

<style scoped>
    #dashboard{
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        background-color: #f5f5f5;
    }
</style>
