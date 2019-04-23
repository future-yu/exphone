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
                <el-col  :sm="8" :md="6">
                    <div class="grid-content bg-purple">
                        <img src="" alt="">
                    </div>
                </el-col>
                <el-col  :sm="8" :md="6" ><div class="grid-content bg-purple-light"></div></el-col>
                <el-col  :sm="8" :md="6" ><div class="grid-content bg-purple"></div></el-col>
                <el-col  :sm="8" :md="6" ><div class="grid-content bg-purple-light"></div></el-col>
            </el-row>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Index",
        data:()=>{
            return{
                input_value:''
            }
        }
    }
</script>

<style scoped>
    .search_box{
        padding: 8px 12px;
    }
    .content{
        height: 110vh;
        background-color: #aaa;
    }

    .item_box{
        padding: 5px 10px;
    }

    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
</style>