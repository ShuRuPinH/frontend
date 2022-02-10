<template>
  <div v-if="loading" class="loader"></div><div v-else>
  <h2 >Вы исполнитель  /с учетом фильтров/ : {{fromParent_sort.length}} шт. </h2>
  <div  @click="$emit('opentask',  item)" class="sticker-left sticker-warning text-center" v-for="(item,id) in fromParent_sort" :key="id" :value="item" :data-sticker="item.name">
  <TaskListItem :item="item"/>
  </div>

  <h2 >Все /с учетом фильтров/ : {{fromParent.length}} шт.</h2>
  <div @click="$emit('opentask',  item) " class="sticker-left sticker-warning text-center" v-for="(item,id) in fromParent" :key="id" :value="item" :data-sticker="item.name">
    <TaskListItem :item="item"/>
  </div></div>
</template>

<script>

import store from "@/store";
import TaskListItem from "@/components/items/TaskListItem";

export default {
  components:{
    TaskListItem
  },
  name: "TasksAllList",
  data(){
    return{
      fromParent_sort : [],
      loading: true
    }
  },
  props: {
    fromParent: [],
  },
 mounted() {
this.checkData()
    },
  updated() {
    this.checkData()
  },

  methods: {
    prt() {
      alert(JSON.stringify(this.fromParent[0].executor.id) + ' < exec fromParent  current user ID >' + store.state.auth.user.id
          + '  fromParent_sort. ' + JSON.stringify(this.fromParent_sort))
    },

    checkData() {
      if (this.fromParent.length === 0 || this.fromParent[0] && this.fromParent[0].executor ) {
        this.fromParent_sort = this.fromParent.filter((task) => task.executor.id == store.state.auth.user.id);
        this.loading=false
      } else
        setTimeout(() => {
          this.loading=true
          this.checkData();
        }, 300)


    }
  }
}

</script>

<style scoped>

</style>