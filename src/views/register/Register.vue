<template>
    <div id="register">
        <van-image
                class="image"
                round
                cover
                width="10rem"
                height="10rem"
                fit="contain"
                src="http://pic1.win4000.com/wallpaper/e/57b668cd660c1.jpg"
        />
        <div class="content">
            <div class="title white">
                <h1>加入旅享社区</h1>
            </div>
            <div class="fields">
                    <van-field
                            class="white"
                            left-icon="contact"
                            v-model="username"
                            required
                            clearable
                            label="用户名:"
                            placeholder="请输入用户名"
                    />

                    <van-field
                            class="white"
                            left-icon="contact"
                            v-model="password"
                            type="password"
                            clearable
                            label="密码:"
                            placeholder="请输入密码"
                            required
                    />
            </div>

            <div class="btns">
<!--                <router-link to="/login">-->
                <van-button
                        plain
                        hairline
                        round
                        type="danger"
                        size="normal"
                        class="btn white"
                        @click.prevent="registerUser">注册</van-button>
<!--                </router-link>-->
<!--                <router-link to="/login">-->
                <van-button
                        plain
                        hairline
                        round
                        type="danger"
                        size="normal"
                        class="btn white"
                        @click.prevent="back">返回</van-button>
<!--                </router-link>-->
            </div>
        </div>
    </div>
</template>

<script>
    import { register } from './../../service/index'
    import { Toast, Notify, Dialog } from 'vant'
    export default {
        name: "Register",
        data(){
            return {
                username: '',
                password: '',
            }
        },
        methods: {
            async registerUser(){
                let _this = this;
                if (!_this.username.trim() || !_this.password.trim()) {
                    _this.notifyMsg("用户名或密码不能为空！");
                    return ;
                }
                let result = await register(_this.username, _this.password);

                if (result.status === 200) {
                    if (!result.data.code) {
                        Dialog.alert({
                            title: '注册',
                            message: '注册成功，请登录'
                        }).then(() => {
                            console.log('确认成功');
                            _this.back();
                        });
                    } else {
                        _this.notifyMsg(result.data.msg);
                    }
                } else {
                    _this.notifyMsg('请求失败，请重新注册');
                }
            },
            notifyMsg(msg){
                // 提示信息
                Notify({
                    message: msg,
                    duration: 1500,
                    color: 'rgba(168,168,168,0.99)',
                    background: '#f5f5f5'
                });
            },
            back(){
                this.$router.push({
                    name: 'login'
                });
            }
        },
        components: {
            [Dialog.Component.name]: Dialog.Component
        }
    }
</script>

<style lang="scss" scoped>
    #register{
        width: 100%;
        height: 100%;
        background: #87CEEB;
        position: relative;

        .white{
            color: #ffffff;
        }

        .image{
            left: 50%;
            margin-left: -5rem;
            margin-top: 3rem;
            border: 3px solid #ffffff;
        }
        .content{
            margin: 1rem 2rem;

            .title{
                font-size: 0.85rem;
            }

            .fields{
                margin: 20px 0 10px;
                padding: 0;
                .van-cell{
                    padding: 10px 0;
                    background-color: transparent;

                    .van-field__control{
                        color: transparent;
                    }
                }

                .van-cell:not(:last-child)::after{
                    border-bottom: 0.05rem solid #ffffff;
                }
                .van-cell--required::before{
                    content: none;
                }
            }
            .btns{
                .btn{
                    margin-top: 30px;
                    width: 100%;
                    border: 2px solid #ffffff;
                    background-color: transparent;
                }
            }

        }
    }
</style>
