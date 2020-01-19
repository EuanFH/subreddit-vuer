<template>
    <button @click="$emit.click" class='chip'>
        {{label}}
        <button @click='remove' class='delete'>X</button>
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
            this.$emit('remove', this.label)
        }
    }
}
</script>

<style lang="scss" scoped>
.chip {
    display: flex;
    flex-direction: row;
    padding: 1px;
    background-color: $primary-background-color;
    color: $secondary-color;
    border: none;
    border-radius: 0 30px 30px 0;
}
.delete {
    height: 30px;
    width: 30px;
    margin: 5px 5px 5px auto;
    border: 1px $secondary-color solid;
    border-radius: 50%;
    background-color: $primary-background-color;
    color: $secondary-color;
}
</style>
