<template>
    <main>
        <RedditIcon class="redditIcon"/>
        <h1>Check this out enter a subreddit</h1>
        <TextFieldDynamicPlaceholder :placeholders="placeholders" class="textField"/>
        <Fab icon="+"/>
    </main>
</template>

<script>
import RedditIcon from '@/components/RedditIcon.vue'
import TextFieldDynamicPlaceholder from '@/components/TextFieldDynamicPlaceHolder.vue'
import Fab from '@/components/Fab.vue'

export default{
    name: 'Landing',
    data() {
        return {
            placeholders: ["/r/pics", "/r/programming", "/r/games", "/r/vuejs", "/r/webdev"],
        }
    },
    components: {
        RedditIcon,
        Fab,
        TextFieldDynamicPlaceholder,
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
</style>
