<template>
    <nav>
        <h3>Subreddits Vuer</h3>
        <AddSubredditForm compact="true"/>
        <SubredditList/>
    </nav>
</template>

<script>
import AddSubredditForm from '@/components/AddSubredditForm'
import SubredditList from '@/components/SubredditList'

export default{
    name: 'Subreddit',
    components:{
        AddSubredditForm,
        SubredditList,
    }
}
</script>

<style lang='scss' scoped>
.subreddit-list{
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
