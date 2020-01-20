<template>
    <section v-if="!loading">
        <Post
            v-for="post in posts" 
            :key="post.title"
            :title="post.title"
            :timeStamp="post.created_utc"
            :upvoteCount="post.ups"
            :thumbnail="post.thumbnail"
            :postLink="'https://reddit.com' + post.permalink"
            :imageLink="post.url"
            class="Post"
        />
    </section>
</template>

<script>
    //<p v-if="error">Loading</p>
    //<p v-if="loading">eror</p>
import Post from '@/components/Post'
import axios from 'axios';

export default {
    name: 'SubredditFeed',
    props: {
        subredditName: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            loading: true,
            error: false,
            errorValue: undefined,
            rawPosts: undefined,
            posts: [],
        }
    },
    methods: {
        loadPosts: function(){
            axios.get('https://jsonp.afeld.me/?url=https://reddit.com/r/' + this.subredditName + '/top.json')
                .then(response => {
                    this.rawPosts = response.data;
                    this.loading = false;
                })
                .catch(error => {
                    this.erroValue = error;
                    this.error = true;
                    this.loading = false;
                });
        }
    },
    computed: {
        loadedWithNotErrors: function(){
            return !this.loading && !this.error
        },
    },
    watch: {
        rawPosts: function (){
            if(this.rawPosts == undefined){
                return;
            }
            this.posts = this.rawPosts.data.children.map((rawPost)=>{
                return rawPost.data;
            }) 
        },
        subredditName: function(){
            this.loadPosts();
        }
    },
    components: {
        Post
    },
    created() {
        this.loadPosts();
    }
}
</script>

<style lang="scss" scoped>
section{
    width: 600px;
}
.Post {
    margin-bottom: 10px;
}
</style>
