import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        subreddits: [],
    },
    getters: {
        subreddits: state => state.subreddits
    },
    mutations: {
        init: function(state) {
            if(!localStorage.getItem('store')){
                return;
            }
            this.replaceState(
                Object.assign(state, JSON.parse(localStorage.getItem('store')))
            );
        },
        addSubreddit: (state, subreddit) => {
            if(state.subreddits.includes(subreddit)){
                return;
            }
            state.subreddits.push(subreddit)
        },
        removeSubreddit: (state, subreddit) => {
            if(!state.subreddits.includes(subreddit)){
                return;
            }
            let subredditIndex = state.subreddits.indexOf(subreddit);
            state.subreddits.splice(subredditIndex, 1);
        }
    },
})

store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
})
