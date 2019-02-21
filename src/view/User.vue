<template lang='pug'>
  .container
    <usuarion></usuarion>
    <superu></superu>

</template>

<script>
import Superu from './AdminUser/Superu'
import Usuarion from './AdminUser/Usuarion'
export default {
  name: 'User',
  components: {
    Usuarion,
    Superu
  }
}
</script>

<style lang="">
</style>
