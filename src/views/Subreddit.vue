<template>
    <div class="pageContainer">
        <nav>
            <h3>Subreddits Vuer</h3>
            <AddSubredditForm compact="true"/>
            <SubredditList/>
        </nav>
        <main>
            <SubredditFeed/>
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

nav {
    background-color: $secondary-background-color;
    height: 100vh;
    width: 200px;
}

h3 {
    margin: 0;
    padding: 10px;
    color: $secondary-color;
}
</style>
