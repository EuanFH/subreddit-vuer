<template>
    <button> 
        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
             viewBox="0 0 42 42" style="enable-background:new 0 0 42 42;" xml:space="preserve">
        <path d="M37.059,16H26V4.941C26,2.224,23.718,0,21,0s-5,2.224-5,4.941V16H4.941C2.224,16,0,18.282,0,21s2.224,5,4.941,5H16v11.059
            C16,39.776,18.282,42,21,42s5-2.224,5-4.941V26h11.059C39.776,26,42,23.718,42,21S39.776,16,37.059,16z"/>
        </svg>
    </button>
</template>

<script>
export default {
    name: 'Fab',
}
</script>

<style lang="scss" scoped>
button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: solid 1px $secondary-background-color;
    box-shadow: 2px 2px 5px 0px $secondary-background-color;
    background-color: $primary-color;
    cursor: pointer;
}
svg {
    fill: $primary-background-color;
    width: 25px;
}
</style>
