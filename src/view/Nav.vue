<template lang='pug'>

ul.class="topnav"
  li(a.class="active",href="#") Home
  li(a.href="#") News
  li(a.href="#") Contact
  li(class="right",a.href="#") About

</template>

<script>
export default {
  name: 'Nav',
}
</script>

<style lang="scss">
  @import "../scss/nav.scss";
</style>
