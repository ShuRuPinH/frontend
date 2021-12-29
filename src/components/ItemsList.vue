<template>
  <div class="hello"><hr>
    <ProjectItem v-if="type===1" :fromParent="list"/>
    <TaskItemAll v-if="type===2" :from-parent="list"/>
    <TaskItem v-if="type===20" :from-parent="list"/>
  </div>
</template>

<script>
import ProjectItem from "@/components/items/ProjectItem";
import TaskItem from "@/components/items/TaskItem";
import TaskItemAll from "@/components/items/TaskItemAll";

export default {
  name: 'ItemsList',
  props: {
    list: Array,
    type:null,
  },
  components:{
    ProjectItem,
    TaskItem,
    TaskItemAll
  },


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
