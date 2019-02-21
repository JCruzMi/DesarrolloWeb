<template lang="pug">

  .div.row
    div.col-sm
      .card
        ul.list-group
          li.list-group-item.text-center.align-items-center.bg-info
            <about></about>

    div.col-sm

    div.col-sm



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
