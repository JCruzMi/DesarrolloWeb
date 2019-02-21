<template lang='pug'>
  .container
    <usuarion></usuarion>
    <superu></superu>

</template>

<script>
import Superu from './AdminUser/Superu'
import Usuarion from './AdminUser/Usuarion'
import About from './About'
export default {
  name: 'User',
  components: {
    Usuarion,
    Superu,
    About
  }
}
</script>

<style lang="">
</style>
