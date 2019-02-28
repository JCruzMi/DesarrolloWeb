<template lang="pug">
  .container
      <img class="d-block w-100" src="http://placehold.it/1800x850/70AD96/FFF&text=&nbsp"  alt="First slide">

      <img class="d-block w-100" src="http://placehold.it/1800x850/EA4E23/FFF&text=&nbsp" alt="Second slide">

      <img class="d-block w-100" src="http://placehold.it/1800x850/472D38/FFF&text=&nbsp" alt="Third slide">


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
