<template>
  <div v-if="loading" class="loader"></div><div v-else>adminlist
  <h2 >Все /с учетом фильтров/ : {{fromParent.length}} шт.</h2>
  <div @click="$emit('opentask',  item) " class="sticker-left sticker-warning text-center" v-for="(item,id) in fromParent" :key="id" :value="item" :data-sticker="item.name">
    <TaskListItem :item="item"/>
  </div></div>
</template>

<script>


import TaskListItem from "@/components/items/TaskListItem";

export default {
  components:{
    TaskListItem
  },
  name: "TasksAdminList",
  data(){
    return{

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


    checkData() {
      if (this.fromParent[0] && this.fromParent[0].executor ) {

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