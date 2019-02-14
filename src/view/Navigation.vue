<template lang='pug'>
div.row
  div.col-sm
    div(class="topnav", id="myTopnav")
      a(href="#", class="active") Home
      a(href="#") News
      a(href="#") Contact
      a(href="#") About
      a(href="javascript:void(0);", style="font-size:15px;", class="icon", @onclick="myFunction()")
        i.fas.fa-chevron-circle-down

</template>

<script>
  export default {
    name: 'Navigation',
    myFunction: function() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
  }
  }

</script>

<style lang="scss">
  @import "../scss/naveg.scss";
</style>
