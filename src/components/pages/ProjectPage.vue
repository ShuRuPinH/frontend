<template>
<!--  <h1> ProjectPage</h1>
  <p>{{item}}}</p>-->

  <table class="page ppp" >
  <hr>
    <thead>
    <tr><td colspan="3"><small>Вкладка проекта:</small><h4 id="taskprojname"><b> {{item.name}} </b> владелец: <b>{{item.owner == null ? "неизвестно" :item.owner.name}}</b> </h4>
    </td></tr>
    <tr>    <td rowspan="2" class="circ white" style=" width:50%"><h4>{{item.name}}</h4> </td>
      <td style=" width:30%"> Префикс: <span class="circ grey ">{{item.prefix}}</span>  </td>
      <td style=" width:20%" > Id:<b>{{item.id}}</b>  </td></tr>
    </thead>

    <tbody>
    <tr >
      <td style="background-color: #dee1e7; border-radius: 6px ;" colspan="3"> <p>{{item.description}}</p></td>
    </tr>
    </tbody>



    <tbody>
    <tr >
      <td style=" border-radius: 6px ;" colspan="3"> <div v-if="item.tasks.length  ===0"> <h3 style="color: #f81f60">Проект не содержит задач.</h3></div>
        <div  @click="$emit('opentask',  item) " class="sticker-left sticker-warning text-center"
        v-for="(item,id) in item.tasks" :key="id" :value="item"
        :data-sticker="item.name ==null ? 'n/a' : item.name">
        <TaskListItem :item="item" /></div>
      </td>
    </tr>
    </tbody>

    <tbody>

    <tr>
      <td class="circ greyfooter"><small>Проект создан:</small><br>{{new Date( this.item.created).toString()}} </td> <td></td> <td class="circ greyfooter"> <small>Владелец:</small><br> <b>{{item.owner == null ? "неизвестно" :item.owner.name}}</b> </td>
    </tr>
    </tbody>
  </table>
</template>


<script>
import TaskListItem from "@/components/items/TaskListItem";

export default {
  components:{TaskListItem},
  name: "ProjectPage",
  props: ['item'],
/*  computed:{
    fish : this.item ?  JSON.stringify(this.item) : "no item"
  }*/
}
</script>

<style scoped>
table{
  width: 100%;
}
.circ     {
  font-weight: bold;
  padding: 2px;
  border-radius: 6px;
}
.grey      {
  background-color: #dbdbce;
}
#taskprojname{
  padding: 10px;
  background: #f1f1f1;
  border-radius: 6px;
  box-shadow: 1px 1px 2px 1px rgba(14, 57, 105, 0.64)
}
</style>