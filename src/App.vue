<template lang='pug'>
  .container
    br
    div#app.text-center
      h1 {{ msg }}
      .container
        img(src="./assets/juan.png", class="image")
        div(class="overlay")
          div(class="text") Bienvenido
      <index></index>

      <about></about>

</template>

<script>
//import Activity from './view/Activity'
//import Master from './view/Master'
import Index from './view/Index'
import About from './view/About'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome back',

    }
  },
  components: {
    Index,
    About
    //Activity,
    //Master
  }
}
</script>

<style lang="scss">
  @import "scss/css.scss";
</style>
