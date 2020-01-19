<template>
    <section>
        <Post/>
    </section>
</template>

<script>
import Post from '@/components/Post'
export default {
    name: 'SubredditFeed',
    components: {
        Post
    }
}
</script>

<style lang="scss" scoped>
section{
    width: 600px;
}
</style>
