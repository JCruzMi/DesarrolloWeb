
<template lang='pug'>
  div
    <navigation></navigation>
    br

    <router-view></router-view>

    br
    .footer.bg-dark
      br
      h2.text-center Sobre nosotros
      .container
        .div.row.bg-dark
          div.col-sm
            <about nombre='Juan David Cruz Miranda' edad='19' carrera='Ingeniería de Sistemas' uni='EAN'></about>

          div.col-sm
            <about nombre='Fabian Andres Meza Criado' edad='21' carrera='Ingeniería de Sistemas' uni='EAN'></about>

          div.col-sm
            <about nombre='Tatiana Robles' edad='21' carrera='Ingeniería de Sistemas' uni='EAN'></about>

        div.col-xl
          ul.bg-light.text-center
            li
              a(class="nav-link", href="", id="contac") Facebook
            li
              a(class="nav-link" href="") Gmail

      <a href="#" class="float-right"><h2><i class="fas fa-arrow-circle-up"></i></h2></a>
      <p><span></span>  © En desarrollo. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
      </br>


</template>

<script>
//import Activity from './view/Activity'
//import Master from './view/Master'
import Index from './view/Index'
import About from './view/About'
import Navigation from './view/Navigation'
export default {
  name: 'app',
  components: {
    Navigation,
    Index,
    About
    //Activity,
    //Master
  }
}
</script>

</script>

<style lang="">
</style>
