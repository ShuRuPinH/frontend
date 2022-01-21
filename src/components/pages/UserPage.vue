<template>
  <hr> <table class="page ttt">
  <thead>
  <tr><td colspan="3"><small>Вкладка юзера:</small><h4 id="taskpagename"><b> {{item.name}} </b>  </h4>
  </td></tr>

    <tr>    <td class="circ white" rowspan="2" style=" width:50%"><h4>{{item.name}} </h4> </td>  <td style=" width:30%"> Код:   </td>
      <td style=" width:20%" > Id:<b>{{item.id}}</b>  </td></tr>
    <tr><td>е-mail:  <span style="background-color: #71d4ff; ">{{item.email}}</span> </td><td> </td></tr>
    </thead>

    <tbody>


    <tr >
      <td style="background-color: #dee1e7; border-radius: 6px ;" colspan="2"> Описание: <p>{{item}}</p></td>
      <td> <button @click="edit(item)" class="btn btn-outline-dark">Редактировать <br> юзера</button></td>
    </tr>
    </tbody>

  </table>
</template>

<script>

import store  from "@/store";

export default {
  name: "TaskPage",
  props: ['item'],

  components:{

  },
  data(){
    return{
      stats: []
    }
  },
mounted() {
   this.stats =  store.state.list.STATUS
},
  methods:{
    edit(i){

      this.$emit('ModalEdit', i)
    },
    chStatus(e){
      alert( e.target.value)
    }
  }

}


</script>

<style scoped>
table{
  width: 100%;
}
#selstat{
  color: #000000;
  background-color: #eadcdc;
}

grey      {
   background-color: #efa24f;
 }
#taskpagename{
  padding: 10px;
  background: #f1f1f1;
  border-radius: 6px;
  box-shadow: 1px 1px 2px 1px rgb(83, 53, 53)
}

</style>