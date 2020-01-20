<template>
    <div>
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
        <section v-if="loading">
                <article v-for="(blankPost, index) in blankPosts" :key="index" class="loadingArticle Post"/>
        </section>
    </div>
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
            blankPosts: new Array(25),
            rawPosts: undefined,
            posts: [],
        }
    },
    methods: {
        loadPosts: function(){
            this.loading = true;
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
.loadingArticle{
    width: 100%;
    height: 100px;
    background-color: $secondary-color;
    border-radius: 2px 50px 50px 2px;
    opacity: 0.5;
    animation: pulsing 3s infinite;
}
@keyframes pulsing{
    0%   { opacity: 0.5; }
    50% { opacity: 0.8; }
    100%   { opacity: 0.5; }
}
</style>
