<template>
    <form @submit.prevent="addSubreddit">
        <TextFieldDynamicPlaceholder v-if='dynamicPlaceholder' :placeholders="placeholders" @value="setSubredditInputValue" class="textField"/>
        <TextField v-else :placeholder="placeholder" @value="setSubredditInputValue" class="textField"/>
        <Fab @click="addSubreddit"/>
    </form>
</template>

<script>
import TextFieldDynamicPlaceholder from '@/components/TextFieldDynamicPlaceHolder';
import TextField from '@/components/TextField';
import Fab from '@/components/Fab';

export default{
    name: 'Landing',
    props: {
        dynamicPlaceholder:{
            type: Boolean,
            default: false,
        },
        placeholder: String,
        placeholders: Array,
    },
    data() {
        return {
            subredditInputValue: "",
        }
    },
    components: {
        TextFieldDynamicPlaceholder,
        TextField,
        Fab,
    },
    methods: {
        setSubredditInputValue: function(value){
            this.subredditInputValue = value;
        },
        addSubreddit: function(){
            this.subredditInputValue = this.subredditInputValue.toLowerCase();
            if(this.subredditInputValue === ''){
                this.$emit('error', 'empty');
                return;
            }
            if(this.subredditInputValue.substring(0,3) !== '/r/'){
                this.subredditInputValue = '/r/' + this.subredditInputValue;
            }
            if(!/^\/r\/[a-z]+$/.test(this.subredditInputValue)){
                this.$emit('error', 'invalid');
                return;
            }
            this.$store.commit('addSubreddit', this.subredditInputValue);
            this.$emit('addedSubreddit', this.subredditInputValue); 
        },
    },
}
</script>

<style lang='scss' scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
