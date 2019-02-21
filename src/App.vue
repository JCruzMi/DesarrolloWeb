<template lang='pug'>
  .container
    <navigation></navigation>
    br

    <router-view></router-view>

    br
    .footer
      <a href="#" class="float-right"><h2><i class="fas fa-arrow-circle-up"></i></h2></a>
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
}
</script>

<style lang="">
</style>
