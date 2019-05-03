<template>
    <div class="img_box">
        <img :src="img" @click="nextImage" class="img">
    </div>
</template>

<script>
    // import img from '../static/images/test.jpg'
    let img = '';
    export default {
        name: "PostImage",
        props:['post_id','img_id'],
        data:()=>{
            return{
                img:img
            }
        },
        methods:{
            nextImage(){
                this.api.getPostPage(1);
            }
        }
    }
</script>

<style scoped>
    .img_box{
        padding: 8px 8px 48px 8px;
    }
    .img{
        width: 100%;
    }
</style>