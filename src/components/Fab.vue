<template>
    <button>{{icon}}</button>
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
    border-radius: 50%;
    background-color: $primary-color;
}
</style>
