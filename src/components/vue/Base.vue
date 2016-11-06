<template lang="jade">
  div
    img(src='../../assets/logo.png')
    hello

    //- test semantic ui
    router-link.ui.secondary.button(to='/todo')
      | Ok, let's get started!
</template>

<script>
import Hello from './Hello';

export default {
  name: 'base',
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
