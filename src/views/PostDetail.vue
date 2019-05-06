<template>
    <div class="content">
        <img :src="post_detail['img_url']" :alt="post_detail['title']" class="post_img">
        <p class="post_title">{{post_detail['title']}}</p>
        <ul class="post_tags">
            <li class="tag_item" v-for="(item,key) in post_detail['tags']" :key="item.id">
                <TagList :tags_value="item" :tag_name="key"></TagList>
            </li>
        </ul>
        <div class="thumb_list">
            <el-row :gutter="5">
                <router-link v-for="item in post_detail['thumbs']" :key="item.id"
                             :to="'/post/image?post_id='+post_detail['post_id']+'&img_id='+item.id">
                    <el-col :sm="8" :md="6">
                        <img :src="item.path_thumb||item.thumb_url"  class="item_img">
                    </el-col>
                </router-link>
            </el-row>
        </div>

    </div>
</template>

<script>
    import TagList from '../components/TagList'
    export default {
        name: "PostDetail",
        props:['post_id'],
        created:function(){
          this.api.getPostDetail(this.post_id).then(({data})=>{
              let allData = {
                  post_id:data.id,
                  img_url:('http://localhost:3000'+data['thumb']['path_thumb'])||data['thumb']['thumb_url'],
                  title:data.title,
                  tags:data.tag,
                  thumbs:data.images
              };
              this.post_detail=allData
          });
        },
        data: () => {
            return {
                post_detail:null
            }
        },
        components: {
            TagList
        }
    }
</script>

<style scoped>
    .content {
        padding: 10px;
    }
    .post_img {
        display: block;
        height: 20rem;
        margin: 0 auto;
    }
    .item_img{
        width: 100%;
    }
    .post_tags {
        overflow: hidden;
    }

    .tag_item {
        overflow: hidden;
    }

    .post_title {
        font-size: 20px;
        width: 80%;
        margin: 0 auto;
        font-weight: bold;
        font-family: "Adobe 宋体 Std L";
        text-align: center;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .thumb_list{
        padding-bottom: 60px;
        padding-top: 15px;
    }
</style>