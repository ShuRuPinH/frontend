<template>
  <div v-if="loading" class="loader"></div>
  <div v-else>
  <div v-if="fromParent[1].length > 0">

    <h2 >Участие в проектах (с учетом фильтра): {{fromParent[1].length}} шт.</h2>
  <div @click="$emit('openprj',  item) " class="sticker-left sticker-info text-center"  v-for="(item,id) in fromParent[1]" :key="id" :value="item" :data-sticker="item.name">
    <ProjectListItem :item="item"/>

  </div></div>

  <div v-else><h2 >Не являетесь участником проектов (с учетом фильтра).</h2></div>

  <div v-if="fromParent[0].length> 0">

    <h2 >Владелец проектов: {{fromParent[0].length}} шт.</h2>
    <div @click="$emit('openprj',  item) "  class="sticker-left sticker-info text-center"  v-for="(item,id) in fromParent[0]" :key="id" :value="item" :data-sticker="item.name">
<ProjectListItem :item="item"/>

    </div>
  </div>
  <div v-else><h2 >Не являетесь владельцем проектов.</h2></div></div>
</template>

<script>

import ProjectListItem from "@/components/items/ProjectListItem";
export default {
  name: "ProjectsPersonList",
components:{
  ProjectListItem
},
  data(){return{
    loading:true}
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
     try{ if (this.fromParent.length ==2 && (this.fromParent[0].length ==0 && this.fromParent[1].length ==0)
          || (this.fromParent[0][0] && this.fromParent[0][0].prefix )
          || (this.fromParent[1][0] && this.fromParent[1][0].prefix ))

      {
      this.loading=false
      } else
        setTimeout(() => {
          this.loading=true
          this.checkData();
        }, 300)}

 catch (e){
  this.window.refresh()
    }
}}

}
</script>

<style scoped>

</style>