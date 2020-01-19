<template>
    <Fab @click="addSubreddit" icon="+"/>
</template>

<script>
import Fab from '@/components/Fab'
export default {
    name: 'AddSubredditButton',
    components: {
        Fab,
    },
    props: {
        subredditName: String,
    },
    methods: {
        addSubreddit: function(){
            this.subredditName = this.subredditName.toLowerCase();
            if(this.subredditName === ''){
                this.$emit('error', 'empty');
                return;
            }
            if(this.subredditName.substring(0,3) !== '/r/'){
                this.subredditName = '/r/' + this.subredditName;
            }
            if(!/^\/r\/[a-z]+$/.test(this.subredditName)){
                this.$emit('error', 'invalid');
                return;
            }
            this.$store.commit('addSubreddit', this.subredditName);
            this.$emit('added-subreddit', this.subredditName); 
        },
    }
}
</script>
