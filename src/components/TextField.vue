<template>
    <input @focus="handleFocus" @blur="handleLostFocus" v-model="value" :placeholder="placeholder" type="text"/>
</template>

<script>
export default {
    name: 'TextField',
    data() {
        return {
            focused: false,
            hasInput: false,
            value: "",
        };
    },
    props: {
        placeholder: String,
    },
    methods: {
        handleFocus: function(){
            this.focused = true;
            this.$emit('focused');
        },
        handleLostFocus: function(){
            this.focused = false;
            if(!this.hasInput){
                this.$emit('emptyNotFocused')
            }
        },
    },
    watch: {
        value: function(value){
            if(value !== ""){
                this.hasInput = true;
                return;
            }
            this.hasInput = false;
        }
    }
}
</script>

<style lang="scss" scoped>
input {
    background-color: transparent;
    color: white;
    border: none;
    border-bottom: 1px $secondary-color solid;
    transition: 0.25s ease-out;
}

input:hover,:focus{
    border-color: $primary-color;
    transition: 0.25s ease-in;
}
</style>
