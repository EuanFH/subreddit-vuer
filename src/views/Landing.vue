<template>
    <main>
        <RedditIcon class="redditIcon"/>
        <h1>Check this out enter a subreddit</h1>
        <input type="text"/>
        <Fab icon="+"/>
    </main>
</template>

<script>
import RedditIcon from '@/components/RedditIcon.vue'
import Fab from '@/components/Fab.vue'

export default{
    name: 'Landing',
    components: {
        RedditIcon,
        Fab,
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
input{
    margin-bottom: 20px;
}
</style>
