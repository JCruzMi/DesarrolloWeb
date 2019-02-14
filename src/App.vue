<template lang='pug'>
  div.container
    <navigation></navigation>
    br
    <index></index>

</template>

<script>
//import Activity from './view/Activity'
//import Master from './view/Master'
import Index from './view/Index'
//import About from './view/About'
import Navigation from './view/Navigation'
export default {
  name: 'app',
  components: {
    Navigation,
    Index
    //About
    //Activity,
    //Master
  }
}
</script>

<style lang="">
</style>
