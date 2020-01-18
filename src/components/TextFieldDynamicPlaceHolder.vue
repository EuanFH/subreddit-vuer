<template>
    <TextField @focused="handleInUse" @emptyNotFocused="handleNotInUse" :placeholder="currentPlaceholder"/>
</template>

<script>
import TextField from '@/components/TextField.vue'

export default {
    name: 'TextFieldDynamicPlaceholder',
    data() {
        return {
            shouldRenderPlaceHolder: true,
            currentPlaceholder: "",
        }
    },
    props: {
        placeholders: {
            type: Array,
            required: true,
        },
        typingDelayMin: {
            type: Number,
            default: 25
        },
        typingDelayMax: {
            type: Number,
            default: 100,
        },
        typingEndDelay: {
            type: Number,
            default: 2500,
        },
        typingInstantDelete: {
            type: Boolean,
            default: false,
        },
        typingSymbol: {
            type: String,
            default: '|'
        },
        
    },
    components: {
        TextField,
    },
    methods: {
        init: async function(){
            while(this.renderPlaceHolder){
                for(let i = 0; i < this.placeholders.length; i++){
                    if(!this.shouldRenderPlaceHolder){
                        return
                    }
                    await this.renderPlaceHolder(this.placeholders[i], false)
                    if(!this.shouldRenderPlaceHolder){
                        return
                    }
                    await this.cursorBlink(this.placeholders[i])
                    if(!this.shouldRenderPlaceHolder){
                        return
                    }
                    await this.renderPlaceHolder(this.placeholders[i], true)
                    if(!this.shouldRenderPlaceHolder){
                        return
                    }
                    await this.cursorBlink("")
                }
            }
        },
        renderPlaceHolder: async function(placeholder, reverse) {
            for(let i = 0; i < placeholder.length; i++){
                if(!this.shouldRenderPlaceHolder){
                    this.currentPlaceholder="";
                    return
                }
                await this.typingDelay();
                //slice starts at 1. so add one to make the index and slice match
                let placeholderPosition = i + 1
                if(reverse){
                    placeholderPosition = placeholder.length - i - 1
                }
                this.currentPlaceholder = placeholder.slice(0, placeholderPosition) + this.typingSymbol;
            }
        },
        cursorBlink: async function(placeholder){
            var showCursor = true;
            let done = false;
            (async () => {
                await this.delay(this.typingEndDelay);
                done = true;
            })()
            while(!done){
                if(!this.shouldRenderPlaceHolder){
                    this.currentPlaceholder="";
                    return
                }
                await this.delay(400)
                if(showCursor){
                    this.currentPlaceholder = placeholder + this.typingSymbol;
                    showCursor = !showCursor;
                    continue;
                }
                this.currentPlaceholder = placeholder;
                showCursor = !showCursor;
            }
        },
        delay: function(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        typingDelay: function() {
            return this.delay(Math.floor(Math.random()*(this.typingDelayMax + 1) + this.typingDelayMin));
        },
        handleInUse: function(){
            this.shouldRenderPlaceHolder = false;
        },
        handleNotInUse: function(){
            if(!this.shouldRenderPlaceHolder){
                this.shouldRenderPlaceHolder = true;
                this.init();
            }
        }

    },
    mounted(){
        this.init()
    }
}
</script>

<style lang="scss" scoped>
button {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    background-color: $primary-color;
}
</style>
