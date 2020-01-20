<template>
    <transition-group class="chipContainer" name="chip-slide">
        <Chip v-for='subreddit in subreddits' :key='subreddit' class='subredditChip' :label='subreddit' :delete='true' @click="redirectToSubreddit" @remove="removeSubreddit" />
    </transition-group>
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
    methods: {
        removeSubreddit: function(subredditName){
            this.$store.commit('removeSubreddit', subredditName);
        },
        redirectToSubreddit: function(subredditName) {
            this.$router.push(subredditName);
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
.chipContainer {
    display: flex;
    flex-direction: column;
}

.subredditChip{
    margin-bottom: 10px;
}
.chip-slide-enter-active, .chip-slide-leave-active {
  transition: transform 0.2s;
}

.chip-slide-enter, .chip-slide-leave-to{
  transform: translateX(-100%);
}

.chip-slide-enter-to, .chip-slide-leave {
  transform: translateX(0);
}

</style>

