<template>
  <div id="app">
    <transition name="page-slide">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="scss">
body{
    margin: 0;
    background-color: $primary-background-color;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.page-slide-enter-active, .page-slide-leave-active {
  transition: transform 1s;
}

.page-slide-enter {
  transform: translateX(-100%);
}

.page-slide-leave-to {
    transform: translateX(100%);
}

.page-slide-enter-to, .page-slide-leave {
  transform: translateX(0);
}
</style>
