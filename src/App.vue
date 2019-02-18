<template lang='pug'>
  .container
    <navigation></navigation>
    br
    <router-view></router-view>

    .footer
      <p class="float-right"><a href="#">Regresar arriba</a></p>
      <p>© En desarrollo. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>

</template>

<script>
//import Activity from './view/Activity'
//import Master from './view/Master'
import Index from './view/Index'
import About from './view/About'
import Navigation from './view/Navigation'
export default {
  name: 'app',
  components: {
    Navigation,
    Index,
    About
    //Activity,
    //Master
  }
}
</script>

<style lang="">
</style>
