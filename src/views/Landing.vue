<template>
    <main>
        <transition name="slide-in">
            <RedditIcon v-if="enter" class="redditIcon"/>
        </transition>
        <h1>Check this out enter a subreddit</h1>
        <AddSubredditForm @addedSubreddit="addedSubreddit" :placeholders="placeholders" :dynamicPlaceholder="true"/>
    </main>
</template>

<script>
import router from '@/router'
import RedditIcon from '@/components/RedditIcon'
import AddSubredditForm from '@/components/AddSubredditForm'

export default{
    name: 'Landing',
    data() {
        return {
            enter: false,
            placeholders: ["/r/pics", "/r/programming", "/r/games", "/r/vuejs", "/r/webdev"],
        }
    },
    components: {
        RedditIcon,
        AddSubredditForm,
    },
    methods: {
        addedSubreddit: function(subreddit){
            router.push(subreddit)      
        }
    },
    mounted() {
        this.enter = true;
    }
}
</script>

<style lang='scss' scoped>
main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
.redditIcon {
    max-width: 12.5em;
    margin-bottom: 30px;
    overflow-y:scroll;
}
h1 {
    margin-top: 0px;
    margin-bottom: 10px;
    color: $secondary-color;
}
.textField{
    margin-bottom: 20px;
}
.slide-in-enter-active, .slide-in-leave-active {
  transition: transform 1s;
}

.slide-in-enter, .slide-in-leave-to {
  transform: translateY(-100%);
}

.slide-in-enter-to, .slide-in-leave {
  transform: translateY(0);
}
</style>
