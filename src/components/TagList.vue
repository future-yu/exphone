<template>
    <div class="tag_list">
        <span class="tab_name">{{tag_name}}:</span>
        <button v-for="tag in tags_value" :key="tag.id" class="tag_item">{{tag}}</button>
    </div>
</template>

<script>
    export default {
        name: "TagList",
        props:['tags_value','tag_name']
    }
</script>

<style scoped>
    .tag_list{
        float: left;
    }
    .tab_name{
        float: left;
        margin-top: 10px;

    }
    .tag_item{
        float: left;
        line-height: 20px;
        border-radius: 2px;
        border: 0;
        outline: none;
        background-color: #2f83ff;
        font-size: 14px;
        margin: 10px 5px 0 5px;
        color: #fff;
    }
    
</style>