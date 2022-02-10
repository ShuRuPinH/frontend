<template>
  <hr> <table class="page ttt">
  <thead>
  <tr><td colspan="3"><small>Вкладка задачи:</small><h4 id="taskpagename"><b> {{item.name}} </b> от <b>{{item.author.name}}</b> для <b>{{item.executor.name == null ? "неизвестно" :item.executor.name }}</b> </h4>
  </td></tr>

    <tr>    <td class="circ white" rowspan="2" style=" width:50%"><h4>{{item.name}} </h4> </td>  <td style=" width:30%"> Код: <span class="circ grey ">{{item.code}}-{{item.id}}</span>  </td>
      <td style=" width:20%" > Id:<b>{{item.id}}</b>  </td></tr>
    <tr><td>Тип: <span :class="'circ '+ item.type.name">{{item.type.name}}</span> </td><td>Приоритет : <span :class="'circ pr'+ item.priority.id">{{item.priority.name}}</span> </td></tr>
    </thead>

    <tbody>


    <tr >
      <td style="background-color: #dee1e7; border-radius: 6px ;" colspan="2"> Описание: <p>{{item.description}}</p></td>
      <td> <button @click="edit(item)" class="btn btn-outline-dark">Редактировать <br> задачу</button></td>
    </tr>
    </tbody>

    <tbody>


    <tr>
      <td class="circ greyfooter"><small>Создана:</small><br> {{new Date( this.item.created).toString()}} </td>
      <td>
        <Select id="selstat"
            :list="stats"
            title='Изменить статус'
            use-placeholder="true"
            @change="chStatus($event)"
        />
    </td>
      <td class="circ greyfooter"><small>Автор:</small><br><b>{{item.author.name}}</b> </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import Select from "@/modal/Select";
import store  from "@/store";

export default {
  name: "TaskPage",
  props: ['item'],

  components:{
      Select
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