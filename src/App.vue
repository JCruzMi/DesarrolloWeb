<template lang='pug'>
  .container
    br
    div#app.text-center
      h1 {{ msg }}
      img(src="assets/Juan.png")
      <index></index>

</template>

<script>
//import Activity from './view/Activity'
//import Master from './view/Master'
import Index from './view/Index'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome back',

    }
  },
  components: {
    Index
    //Activity,
    //Master
  }
}
</script>

<style lang="scss">
  @import "scss/css.scss";
</style>
