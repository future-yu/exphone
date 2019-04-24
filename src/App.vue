<template>
    <div class="content">
        <div class="tabbar">
            <router-link to="/">
                <span @click="changeBar(0)" :class="['bar_title',tab_index===0?'bar_active':'']">首页</span>
            </router-link>
            <router-link to="/user">
                <span @click="changeBar(1)" :class="['bar_title',tab_index===1?'bar_active':'']">我的</span>
            </router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'exphone',
        created: () => {

        },
        data() {
            return {
                tab_index: 0,
            };
        },
        methods:{
            changeBar(tab_index){
                this.tab_index = tab_index;
            }
        }
    };
</script>

<style>
    body,ul,li{
        margin: 0;
        padding: 0;
    }
    .tabbar{
        overflow: hidden;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        z-index: 900;
    }
    .bar_title{
        float: left;
        font-size: 20px;
        width: 50%;
        font-weight: bold;
        text-align: center;
        color: #000;
        line-height: 40px;
    }
    .bar_active{
        color: #fff;
        background-color: rgba(0,200,0,0.8);
    }
</style>