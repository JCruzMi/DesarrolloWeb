<template lang='pug'>

    div
      .container.ret
        img(src="../assets/juan.png",class="image")
        div(class="overlay")
          div(class="text") {{ nombre }} </br>Edad: {{ edad }} años </br>Carrera: {{carrera}} </br>Universidad: {{uni}}

</template>

<script>
export default {
  name: 'About',
  props: ['nombre','edad','carrera','uni']
}
</script>

<style lang="scss">
  @import "../scss/login.scss";
</style>
