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
                             :to="'/post/image?post_id='+post_detail['post_id']+'&img_id='+item.img_id">
                    <el-col :sm="8" :md="6">
                        <img :src="item.url" :alt="item" class="item_img">
                    </el-col>
                </router-link>
            </el-row>
        </div>

    </div>
</template>

<script>
    import test_img from '../static/images/test.jpg';
    import TagList from '../components/TagList'

    export default {
        name: "PostDetail",
        data: () => {
            return {
                post_detail: {
                    post_id: 1,
                    img_url: test_img,
                    title: '经常被忽略的是，Vue 应用中原始数据对象的实际来源 - 当访问数据对象时，一个 Vue 实例只是简单的代理访问。所以，如果你有一处',
                    tags: {
                        parody: ['my hero', 'academia', 'boku no hero', 'academiarwbysplatoon'],
                        character: ['blake', 'belladonnacinder', 'falljaune', 'arckali', 'belladonnanora', 'valkyriepyrrha', 'nikosraven', 'branwenruby', 'rosesalemweiss', 'schneeyang', 'xiao', 'long'],
                        artist: ['aestheticc-meme'],
                        male: ['big penis'],
                        female: ['ahegaoanalassjobbig', 'assbig', 'breastsbike', 'shortsbikiniblowjobblowjob', 'facebodysuitbondagebukkakebunny', 'girlcunnilingusdark', 'skindouble', 'penetrationelffishnetsfutanarigarter', 'beltglasseshandjobhuge'],
                        misc: ['groupincest']
                    },
                    thumbs: [{
                        url: test_img,
                        img_id: 1
                    }, {
                        url: test_img,
                        img_id: 1
                    }, {
                        url: test_img,
                        img_id: 1
                    }, {
                        url: test_img,
                        img_id: 1
                    }, {
                        url: test_img,
                        img_id: 1
                    }, {
                        url: test_img,
                        img_id: 1
                    }, {
                        url: test_img,
                        img_id: 1
                    }, {
                        url: test_img,
                        img_id: 1
                    }, {
                        url: test_img,
                        img_id: 1
                    }, {
                        url: test_img,
                        img_id: 1
                    }, {
                        url: test_img,
                        img_id: 1
                    }, {
                        url: test_img,
                        img_id: 1
                    }, {
                        url: test_img,
                        img_id: 1
                    }, {
                        url: test_img,
                        img_id: 1
                    }]
                }
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
        width: 100%;

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