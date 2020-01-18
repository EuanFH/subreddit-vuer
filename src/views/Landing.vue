<template>
    <main>
        <transition name="slide-in">
            <RedditIcon v-if="enter" class="redditIcon"/>
        </transition>
        <h1>Check this out enter a subreddit</h1>
        <TextFieldDynamicPlaceholder :placeholders="placeholders" class="textField"/>
        <Fab icon="+" @click="addSubreddit"/>
    </main>
</template>

<script>
import router from '@/router'
import RedditIcon from '@/components/RedditIcon.vue'
import TextFieldDynamicPlaceholder from '@/components/TextFieldDynamicPlaceHolder.vue'
import Fab from '@/components/Fab.vue'

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
        Fab,
        TextFieldDynamicPlaceholder,
    },
    methods: {
        addSubreddit: function(){
            router.push('/r/programming')      
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
