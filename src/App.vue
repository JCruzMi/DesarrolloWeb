
<template lang='pug'>
  div
    //-Traemos el componente de navigation
    <navigation></navigation>
    br
    //-enrutamiento

    <router-view></router-view>
    //-footer
    br
    .footer.bg-dark
      br
      h2.text-center Sobre nosotros
      .container
        .div.row.bg-dark
          div.col-sm
            //-uso de componente con props para optimizar codigo
            <about nombre='Juan David Cruz Miranda' edad='19' carrera='Ingeniería de Sistemas' uni='EAN'></about>

          div.col-sm
            <about nombre='Fabian Andres Meza Criado' edad='21' carrera='Ingeniería de Sistemas' uni='EAN'></about>

          div.col-sm
            <about nombre='Tatiana Robles' edad='21' carrera='Ingeniería de Sistemas' uni='EAN'></about>
        br
        h2.text-center Contacto
        br
        //-tabla con nombres, Universidad y correo de los creadores
        div.col-xl
          table(class="table table-hover text-center",id="contact")
            thead
              tr
                th Nombre
                th Universidad
                th Email
            tbody
              tr
                td Juan
                td EAN
                td jcruzmi08064
              tr
                td Fabia
                td EAN
                td correo
              tr
                td Tatiana
                td EAN
                td troblesr5459

      <a href="#" class="float-right"><h2><i class="fas fa-arrow-circle-up"></i></h2></a>
      <p><span></span>  © En desarrollo. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
      </br>


</template>

<script>
import Index from './view/Index'
import About from './view/About'
import Navigation from './view/Navigation'
export default {
  name: 'app',
  components: {
    Navigation,
    Index,
    About
  }
}
</script>

</script>

<style lang="">
</style>
