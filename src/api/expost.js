let axios = require('axios');

async function getPostPage(page_num) {
    return await axios.get(`/post/page/${page_num}`);
}

async function getPostDetail(post_id){
    return await axios.get(`/post/detail/${post_id}`);
}

async function getSearchPost(search_kyes){
    let key_string = [];
    for (let key in search_kyes){
        key_string.push(`${key}=${search_kyes[key]}`);
    }
    return await axios.get(`/post/search?${key_string.join('&')}`);
}
export  default {
    getPostPage,
    getPostDetail,
    getSearchPost
};

