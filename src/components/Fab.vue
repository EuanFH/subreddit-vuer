<template>
    <button @click='$emit("click")'>{{icon}}</button>
</template>

<script>
export default {
    name: 'Fab',
    props: {
        icon: String //probably somthing else
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
