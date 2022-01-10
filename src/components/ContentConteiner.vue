<template>
  <div  v-if="!listhide" class="hello"><hr>
    <ProjectItem v-if="type===1  " @openprj="openprj($event)" :fromParent="list"/>
    <ProjectItemPerson v-if="type===10" @openprj="openprj($event)"  :fromParent="list"/>
    <TaskItemAll v-if="type===2" @opentask="opentask($event)" :from-parent="list"/>
    <TaskItem v-if="type===20" @opentask="opentask($event)" :from-parent="list"/></div>

  <div v-if="listhide" class="page">
  <TaskPage v-if="cctype===22" :item="input" />
  <ProjectPage v-if="cctype===11" :item="input"/>
  </div>
</template>

<script>
import ProjectItem from "@/components/items/ProjectItem";
import TaskItem from "@/components/items/TaskItem";
import TaskItemAll from "@/components/items/TaskItemAll";
import ProjectItemPerson from "@/components/items/ProjectItemPerson";
import TaskPage from "@/components/TaskPage";
import ProjectPage from "@/components/ProjectPage";

export default {
  name: 'ItemsList',
  data(){
    return{
      input: null,
      listhide: false,
      cctype: 0
    }
  },
  props: {
    list: Array,
    type: Number,
  },
  components:{
    ProjectItem,
    TaskItem,
    TaskItemAll,
    ProjectItemPerson,
    TaskPage,
    ProjectPage
  },

  watch: {
    // эта функция запускается при любом изменении вопроса
    type: function () {
      this.listhide =false;
    }
  },
  methods:{

    opentask(i){
      this.input =i;
      this.cctype=22;
      this.listhide=true;
      },
    openprj(i){
      this.input =i;
      this.cctype=11;
      this.listhide=true;
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}



</style>
