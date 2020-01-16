import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            component: () => import('@/views/Landing'),
        },
        {
            path: "/r/:subreddit",
            component: () => import('@/views/SubredditFeed'),
        },
        {
            path: "*",
            component: () => import('@/views/NotFound'),
        }
    ]
});
