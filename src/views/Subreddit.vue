<template>
    <div class="pageContainer">
        <nav>
            <h3>Subreddits Vuer</h3>
            <AddSubredditForm :compact="true"/>
            <SubredditList />
        </nav>
        <main>
            <section>
                <h1>/r/{{$route.params.subreddit}}</h1>
                <SubredditFeed :subredditName="$route.params.subreddit"/>
            </section>
        </main>
    </div>
</template>

<script>
import AddSubredditForm from '@/components/AddSubredditForm';
import SubredditList from '@/components/SubredditList';
import SubredditFeed from '@/components/SubredditFeed';

export default{
    name: 'Subreddit',
    components:{
        AddSubredditForm,
        SubredditList,
        SubredditFeed,
    },
    beforeMount() {
        let currentSubreddit = '/r/' + this.$route.params.subreddit
        let subreddits = this.$store.getters.subreddits
        if(subreddits.includes(currentSubreddit)){
            return;
        }
        this.$store.commit('addSubreddit', currentSubreddit)
    }
}
</script>

<style lang='scss' scoped>
.pageContainer{
    display: flex;
    direction: row;
}
main {
    flex: 1;
    margin: 10px;
    display: flex;
    justify-content: center;
}

section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

nav {
    position: sticky;
    top: 0;
    background-color: $secondary-background-color;
    height: 100vh;
    width: 200px;
}

h1 {
    color: $primary-color;
}

h3 {
    margin: 0;
    padding: 10px;
    color: $primary-color;
}
</style>
