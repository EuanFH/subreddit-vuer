<template>
    <button @click="clickEvent" class='chip'>
        <p>{{label}}</p>
        <button @click='remove' class='delete'>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                 viewBox="0 0 512.001 512.001" style="enable-background:new 0 0 512.001 512.001;" xml:space="preserve">
                    <path d="M294.111,256.001L504.109,46.003c10.523-10.524,10.523-27.586,0-38.109c-10.524-10.524-27.587-10.524-38.11,0L256,217.892
                        L46.002,7.894c-10.524-10.524-27.586-10.524-38.109,0s-10.524,27.586,0,38.109l209.998,209.998L7.893,465.999
                        c-10.524,10.524-10.524,27.586,0,38.109c10.524,10.524,27.586,10.523,38.109,0L256,294.11l209.997,209.998
                        c10.524,10.524,27.587,10.523,38.11,0c10.523-10.524,10.523-27.586,0-38.109L294.111,256.001z"/>
            </svg>
        </button>
    </button>
</template>

<script>
export default{
    name: "Chip",
    props: {
        label:{
            type: String,
            required: true,
        },
        delete:{
            type: Boolean,
            default: false,
        }
    },
    methods: {
        remove: () => {
            this.$emit('remove', this.label);
        },
        clickEvent: ()=>{
            this.$emit('click');
        }
    }
}
</script>

<style lang="scss" scoped>
.chip {
    display: flex;
    flex-direction: row;
    padding: 1px;
    margin-right: 5px;
    background-color: $primary-background-color;
    color: $primary-color;
    border: none;
    border-radius: 0 30px 30px 0;
}
.delete {
    display: flex;
    height: 25px;
    width: 25px;
    margin: 5px 5px 5px auto;
    border: 1px $secondary-color solid;
    border-radius: 50%;
    background-color: $primary-background-color;
    color: $secondary-color;
}
p {
    padding: 5px 5px 5px 0;
    margin: 0;
    margin-left: 5px;
}
svg {
    fill: $secondary-color;
}
</style>
