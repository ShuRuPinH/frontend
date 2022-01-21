<template>
  <div  v-if="!listhide" class="hello"><hr>
    <ProjectsAllList v-if="type===1  " @openprj="openprj($event)" :fromParent="list"/>
    <ProjectsPersonList v-if="type===10" @openprj="openprj($event)"  :fromParent="list"/>
    <TasksAllList v-if="type===2" @opentask="opentask($event)" :from-parent="list"/>
    <TasksAdminList v-if="type===22" @opentask="opentask($event)" :from-parent="list"/>
    <UsersAdminList v-if="type===3" @openuser="openuser($event)" :from-parent="list"/>
    <TasksPersonList v-if="type===20" @opentask="opentask($event)" :from-parent="list"/></div>

  <div v-if="listhide" class="page">
  <TaskPage v-if="cctype===22" @ModalEdit="ModalEdit($event)" :item="input" />
  <ProjectPage  v-if="cctype===11" @ModalEdit="ModalEdit($event)" @opentask="opentask($event)" :item="input"/>
  <UserPage v-if="cctype===33" @ModalEdit="ModalEdit($event)" :item="input"  />
  </div>

  <EditPage
      v-show="isShowModalE"
      @close="ModalEdit"
      :inputitem="inputitem"
  />
</template>

<script>
import ProjectsAllList from "@/components/lists/ProjectsAllList";
import TasksPersonList from "@/components/lists/TasksPersonList";
import TasksAllList from "@/components/lists/TasksAllList";
import ProjectsPersonList from "@/components/lists/ProjectsPersonList";
import TaskPage from "@/components/pages/TaskPage";
import ProjectPage from "@/components/pages/ProjectPage";
import TasksAdminList from "@/components/lists/TasksAdminList";
import UsersAdminList from "@/components/lists/UsersAdminList";
import UserPage from "@/components/pages/UserPage";
import EditPage from '@/modal/EditPage'

export default {
  name: 'ItemsList',
  data(){
    return{
      input: null,
      listhide: false,
      cctype: 0,
      isShowModalE: false,
      inputitem: null
    }
  },
  props: {
    list: Array,
    type: Number,
  },
  components:{
    ProjectsAllList,
    TasksPersonList,
    TasksAllList,
    ProjectsPersonList,
    TaskPage,
    ProjectPage,
    TasksAdminList,
    UsersAdminList,
    UserPage,
    EditPage
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
    },
    openuser(i){
      this.input =i;
      this.cctype=33;
      this.listhide=true;
    },

    ModalEdit(e){
    /*  alert(" ModalEdit "+ JSON.stringify(e))*/

      this.inputitem=e
      this.isShowModalE = !this.isShowModalE


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
