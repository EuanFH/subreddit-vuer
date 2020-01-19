<template>
    <section>
        <Chip v-for='subreddit in subreddits' :key='subreddit' class='Chip' :label='subreddit' delete='true' />
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

.Chip{
    margin-bottom: 10px;
}
</style>

