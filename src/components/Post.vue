<template>
    <article @click='redirectToPost'>
        <section class="upvote"> 
            <svg class="upvoteIcon" id="Layer_1" enable-background="new 0 0 56.69 56.69" height="512" viewBox="0 0 56.69 56.69" width="512" xmlns="http://www.w3.org/2000/svg">
                <path d="m46.005 41.676c-1.202 0-2.332-.469-3.182-1.318l-14.478-14.479-14.477 14.478c-.849.85-1.979 1.318-3.182 1.318s-2.333-.468-3.183-1.318c-1.754-1.754-1.754-4.609 0-6.363l17.66-17.661c.849-.85 1.979-1.318 3.181-1.318 1.201 0 2.332.468 3.182 1.318l17.66 17.661c.851.85 1.318 1.979 1.318 3.182 0 1.201-.468 2.332-1.318 3.182-.849.849-1.979 1.318-3.181 1.318zm-17.66-18.625 15.892 15.893c.945.945 2.59.945 3.535 0 .473-.473.732-1.101.732-1.768s-.26-1.295-.732-1.768l-17.705-17.704c-.945-.902-2.56-.887-3.489.043l-17.661 17.661c-.975.975-.975 2.561 0 3.535.945.945 2.592.945 3.536 0z"/>
            </svg>
            <p class="upvoteCount">{{upvoteInK}}</p>
        </section>
        <div class="verticalRule"/>
        <section class="middleContainer">
            <h5>{{title}}</h5>
            <p class='postTime'>Posted {{created}}</p>
        </section>
        <img v-if='thumbnail' :src='thumbnail' @click.stop='redirectToImage'/>
    </article>
</template>

<script>
import moment from 'moment';

export default {
    name: 'Post',
    props: {
        title: String,
        timeStamp: Number,
        upvoteCount: Number,
        thumbnail: String,
        postLink: String,
        imageLink: String,
    },
    computed: {
        created: function (){
            return moment.unix(this.timeStamp).startOf('hours').fromNow();
        },
        upvoteInK: function() {
            return Math.abs(this.upvoteCount) > 999 ? Math.sign(this.upvoteCount)*((Math.abs(this.upvoteCount)/1000).toFixed(1)) + 'k' : Math.sign(this.upvoteCount)*Math.abs(this.upvoteCount);
        }
    },
    methods: {
        redirectToImage: function() {
            window.location.href = this.imageLink 
        },
        redirectToPost: function() {
            window.location.href = this.postLink
        }
    }
}
</script>

<style lang="scss" scoped>
article{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
    background-color: $secondary-background-color;
    border-radius: 2px 50px 50px 2px;
    cursor: pointer;
}

img{
    border-radius: 50%;
    height: 80px;
    width: 80px;
    margin: 10px 10px 10px auto;
    align-self: center;
}

h5 {
    color: $primary-color;
    margin: 10px 0;
    width: 400px;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
    text-overflow: ellipsis;
}

.upvoteCount {
    font-size: x-small;
    color: $secondary-color;
}

.middleContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    flex: 1;
}

.postTime{
    margin: 0 0 0 0;
    font-size: xx-small;
    color: $secondary-color;
}

.upvote {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    width: 50px;
}

.upvoteIcon {
    fill: $primary-color;
    width: 30px;
    height: 30px;
}

.verticalRule {
    border-left: 1px solid $primary-color;
    width: 2px;
    margin: 10px 10px;
}
</style>
