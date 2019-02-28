<template lang="pug">
  .container
      <img class="d-block w-100" src="http://placehold.it/1800x850/70AD96/FFF&text=&nbsp"  alt="First slide">
      br
      h1 Hola


</template>

<script>
import About from './About'
export default {
  name: 'Index',
  components: {
    About
    }
}
</script>

<style lang="scss">
  @import "../scss/css.scss";
</style>
