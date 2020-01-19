<template>
    <form @submit.prevent="addSubreddit">
        <TextFieldDynamicPlaceholder v-if='dynamicPlaceholder' :placeholders="placeholders" @value="setSubredditInputValue" class="textField"/>
        <TextField v-else :placeholder="placeholder" @value="setSubredditInputValue" :class='{compactTextField: compact}'/>
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
.Fab {
    margin: 10px 0;
}

.compactFab {
    width: 35px;
    height: 35px;
}

.compactTextField {
   width: 150px;
}
</style>
