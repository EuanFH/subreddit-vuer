<template>
    <main>
        <RedditIcon class='RedditIcon'/>
        <h1>Sorry!</h1>
        <h2>The page you are looking for dosn't exist.</h2>
    </main>
</template>

<script>
import RedditIcon from '@/components/RedditIcon'

export default {
    name: 'NotFound',
    components: {
        RedditIcon
    }
}
</script>

<style lang="scss" scoped>
main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    color: $secondary-color;
}

.RedditIcon{
    max-width: 12.5em;
}
</style>
