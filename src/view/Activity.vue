<template lang='pug'>

  div.row

    table.table.table-stripped
      tr
        th
        th Titulo de la tarea
        th Escala
        th Fecha
        th Estado
      tr(v-if="activities.length === 0")
        td(colspan="5").text-center
          h1 No Hay Registros

      tr(v-for="item, index in activities")
        td
          button(@click="remove(index)", class="fas fa-trash-alt").btn.btn-danger

        td {{item.titulo}}
        td {{item.name}}
        td {{item.date}}
        td
          button.btn.btn-danger(v-if="!item.status", @click="change(item)")
            i.fas.fa-times
          button.btn.btn-success(v-else @click="change(item)")
            i.fas.fa-check

      tfoot
        td
        td
          input.form-control(v-model="titulo" placeholder="Titulo")
        td
          input.form-control(v-model="name" placeholder="Nombre")
        td
          input.form-control(v-model="date" placeholder="Fecha")
        td
          button(@click="add()").btn.btn-success.btn-block Agregar


</template>

<script>
export default {
  name: 'Activity',
  props: ['materiapr'],
  created: function(){
    for(const i in this.activitiesall){
      var m = this.activitiesall[i]
      if(m.materia === this.materiapr){
        this.activities = m.activities
      }
    }
  },
  data () {
    return {
      materia: '',
      titulo: '',
      name: '',
      date: '',
      activitiesall : [{'materia':'materia 1',
          activities: [{'name': 'uno', 'date': 'igajvdbjsk', 'status': false},
          {'name': 'dos', 'date': 'igajvdbjsk', 'status': false}]},
          {'materia':'uno',
          activities: [{'name': 'tres', 'date': 'igajvdbjsk', 'status': false},
          {'name': 'cuatro', 'date': 'igajvdbjsk', 'status': false}]}],
      activities : []
    }
  },
  methods: {
    remove: function(index) {
      this.activities.splice(index, 1);
    },
    add: function() {
       if (
         this.titulo.length>0) {
         this.activities.push({
          materia: this.materia,
          titulo: this.titulo,
          name: this.name,
          status: false,
          date: this.date
       })
       this.titulo = ""
       this.name= ""
       this.date = ""
    }
    else {
      alert('Porfavor rellene bien los campos')
    }
  },
    change: function(item) {
      item.status = !(item.status);
    },

}
}
</script>

<style lang="scss">
  @import "../scss/css.scss";
</style>
