<template>
    <form @submit.prevent="addSubreddit">
        <TextFieldDynamicPlaceholder v-if='dynamicPlaceholder' :placeholders="placeholders" @value="setSubredditInputValue" class="textField"/>
        <TextField v-else :placeholder="placeholder" @value="setSubredditInputValue" :class='{compactTextField: compact}'/>
        <p :class='{"visable": errorOccured}'>{{errorText}}</p>
        <Fab :class='[{"compactFab": compact}, "Fab"]' @click="addSubreddit"/>
    </form>
</template>

<script>
import TextFieldDynamicPlaceholder from '@/components/TextFieldDynamicPlaceHolder';
import TextField from '@/components/TextField';
import Fab from '@/components/Fab';

export default{
    name: 'AddSubredditForm',
    props: {
        dynamicPlaceholder:{
            type: Boolean,
            default: false,
        },
        placeholder: String,
        placeholders: Array,
        compact: {
            type: Boolean,
            default: false,
        }
    },
    data() {
        return {
            errorOccured: false,
            errorText: '',
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
                this.error("You need to enter somthing first")
                return;
            }
            if(this.subredditInputValue.substring(0,3) !== '/r/'){
                this.subredditInputValue = '/r/' + this.subredditInputValue;
            }
            if(!/^\/r\/[a-z]+$/.test(this.subredditInputValue)){
                this.error("Subreddits only container characters a-z")
                return;
            }
            this.errorOccured = false;
            this.$store.commit('addSubreddit', this.subredditInputValue);
            this.$emit('addedSubreddit', this.subredditInputValue); 
        },
        error: function(text){
            this.errorText = text;
            this.errorOccured = true;
        }
    },
}
</script>

<style lang='scss' scoped>
form {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.Fab {
    margin: 1px 0 5px 0;
}

.compactFab {
    width: 35px;
    height: 35px;
}

.compactTextField {
   width: 150px;
}
p{
    text-align: center;
    visibility: hidden;
    font-size: xx-small;
    margin: 1px;
    color: $danger-color;
}
.visable{
    visibility: visible;
}
</style>
