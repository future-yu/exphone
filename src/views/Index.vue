<template>
    <div class="content">
        <div class="search_box">
            <el-input
                    placeholder="请输入内容"
                    v-model="input_value">
                <el-button slot="append" type="primary" icon="el-icon-search"></el-button>
            </el-input>
        </div>
        <div class="item_box">
            <el-row :gutter="5">
                <router-link v-for="item in item_data" :key="item.id" to="/post/detail/1">
                    <el-col :sm="8" :md="6">
                        <div class="item">
                            <img :src="item.img_url[1]||item.img_url[0]" :alt="item.img_title" class="item_img">
                            <p class="item_title">{{item.img_title}}</p>
                        </div>
                    </el-col>
                </router-link>
            </el-row>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Index",
        created:function(){
            this.api.getPostPage(1).then(res=>{
                // debugger
                this.item_data = res.data;
            })
        },
        data: () => {
            return {
                input_value: '',
                item_data: null
            }
        }
    }
</script>

<style scoped>
    .search_box {
        padding: 8px 12px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 900;
        background-color: #0af;
        box-sizing: border-box;
    }

    .content {
        background-color: #aaa;
    }

    .item_box {
        padding: 60px 10px 60px 10px;
    }

    .item {
        padding: 8px;
    }

    .item_img {
        display: block;
        width: 100%;
        height: 150px;
        background-color: #fff;
    }

    .item_title {
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        height: 24px;
        line-height: 24px;
        font-size: 16px;
        color: #000;
        margin: 0;
        text-align: center;
    }
</style>