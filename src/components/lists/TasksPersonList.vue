<template>
  <div v-if="loading" class="loader"></div>
  <div v-else>
  <div v-if="fromParent[1][0]">

  <h2 >Задачи к выполнению  /с учетом фильтров/: {{fromParent[1].length}} шт.</h2>


    <div  @click="$emit('opentask',  item) " class="sticker-left sticker-warning text-center"
       v-for="(item,id) in fromParent[1]" :key="id" :value="item"
       :data-sticker="item.name ==null ? 'n/a' : item.name">
      <TaskListItem :item="item"/>
  </div>
   </div>
  <div v-else><h2 >Нет задач к выполнению.</h2></div>
  <div v-if="fromParent[0][0]">
    <h2 >Поставленные задачи: {{fromParent[0].length}} шт.</h2>

  <div  @click="$emit('opentask',  item2) " class="sticker-left sticker-warning  text-center" v-for="(item2,id) in fromParent[0]" :key="id" :value="item2" :data-sticker="item2.name ==null ? 'n/a' : item2.name">
    <TaskListItem :item="item2"/>
  </div></div>
  <div v-else><h2 >Нет поставленных задач.</h2></div>

  </div>
</template>

<script>


import TaskListItem from "@/components/items/TaskListItem";

export default {
  components:{
    TaskListItem
  },
  name: "TasksPersonList",

 data() { return{
   loading: true
 }
  },
  props:{
    fromParent: []
  },
  mounted() {
    this.checkData()
  },
  updated() {
    this.checkData()
  },
methods:{


  checkData() {

      if (this.fromParent.length ==2 && (this.fromParent[0].length ==0 && this.fromParent[1].length ==0)
          || (this.fromParent[0] && this.fromParent[0][0] && this.fromParent[0][0].executor )
          || (this.fromParent[1] &&  this.fromParent[1][0] && this.fromParent[1][0].executor ))
    {
        console.log("this.fromParent.length = "+ this.fromParent.length)
      this.loading=false
    } else
      setTimeout(() => {
        this.checkData();
        this.loading=true
      }, 300)


  }}
}
</script>

<style scoped>

</style>