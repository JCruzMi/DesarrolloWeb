<template lang='pug'>

  div.card
    .card.body
      .card.title MATERIAS
      ul.list-group
        li(v-if="masters.length === 0").list-group-item.text-center.align-items-center.bg-info
          h1 No Hay Registros
        li.list-group-item(v-if="!item.status",v-for="item, index in masters")
          div.row
            div.col-md-4 {{item.name}}

              span.badge.badge-primary.badge-pill  {{item.actividades}}
            .col-md-4
              button(@click="change(item)").btn.btn-success Ver Tareas
            .col-md-4
              button(@click="remove(index)").fas.fa-trash-alt.btn.btn-danger

        li.list-group-item(v-else)
          div.text-center {{item.name}}
          div
            button.btn.btn-success(@click="change(item)") Regresar
            li.list-group-item
              <activity v-bind:materiapr='item.name'></activity>


        li.list-group-item.text-center.align-items-center.bg-info
          input.form-control(v-model="name" placeholder="Nombre Materia")
          button(@click="add()").btn.btn-success.btn-lg Agregar

</template>

<script>
import Activity from './Activity'
export default {
  name: 'Master',
  data () {
    return {
      status: '',
      name: '',
      canTareas:'',
      masters : [{'name': 'materia 1', 'status': false, 'actividades': 0},
      {'name': 'uno', 'status': false, 'actividades': 0}]
    }
  },
  methods: {
    remove: function(index) {
      this.masters.splice(index, 1);
    },
    add: function() {
       if (this.name.length>0){
         this.masters.push({
           name: this.name,
           status: false,
       })
       this.name= ""
    }
    else {
      alert('Por favor rellene bien los campos')
    }
  },
    change: function(item) {
      item.status = !(item.status);
    },
  },
  components: {
    Activity
  }
}
</script>

<style lang="scss">
  @import "../scss/css.scss";
</style>
