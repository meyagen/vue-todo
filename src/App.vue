<template lang="jade">
  #app
    img(src='./assets/logo.png')
    hello

    //- test semantic ui
    buttion.ui.secondary.button Ok, let's get started!
</template>

<script>
import Hello from './components/vue/Hello';

export default {
  name: 'app',
  components: {
    Hello,
  },
};
</script>

<style lang="stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
