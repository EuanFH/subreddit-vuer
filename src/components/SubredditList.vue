<template>
    <section>
        <Chip v-for='subreddit in subreddits' :key='subreddit' :label='subreddit' delete='true' />
    </section>
</template>

<script>
import Chip from '@/components/Chip'

export default{
    name: 'SubredditList',
    data() {
        return {
            subreddits: [],
        }
    },
    components: {
        Chip,
    },
    mounted() {
        this.subreddits = this.$store.getters.subreddits
    }
}
</script>

<style lang="scss" scoped>
section {
    display: flex;
    flex-direction: column;
}
</style>

