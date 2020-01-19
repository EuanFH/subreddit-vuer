<template>
    <nav>
        <AddSubredditForm/>
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
</style>
