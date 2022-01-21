<template>
  <div>
    <div style="height: 30px"/>
    <div v-if="loading" class="loader"></div>
    <div v-else style="width: 80%;" class="container-fluid">
      <div class="row">
        <div class="col-md-12">
          <!--          <div class="row">
                      <div id="head" class="col-md-12">

                      </div>
                    </div>-->
          <div class="row">
            <div id="menu" style="" class="d-none d-md-block col-md-3"><img style="height: 50px;" alt="Vue logo"
                                                                   src="@/assets/logo.png">

              <hr>
              <h4 class="admin">{{ username }}</h4>
              <hr>
              <MakeTask
                  v-show="isShowModalT"
                  @close="ModalTask"
              />
              <button @click="ModalTask" class="btn btn-outline-secondary">Создать задачу</button>
              <br> <br>
              <MakeProject
                  v-show="isShowModalP"
                  @close="ModalProj"
              />
              <button @click="ModalProj" class="btn btn-outline-success">Создать проект</button>
              <hr>

              Утром я составляю планы, а днем делаю глупости.<br> <i> (Вольтер)
              </i><br> <router-link to="/">User</router-link>
              <hr>
              <br>
              <a @click="$emit('logout')"> ВЫХОД </a>
            </div>
            <div id="main" class=" col-md-9">
              <div class="row">
                <div style="" class="page-header">
                  <H1 class="admin">Панель администрирования</H1>
                  <ul class="nav nav-tabs">


                    <li class="nav-item ">
                      <a style="color:  #040f26" class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">&nbsp;&nbsp;&nbsp;&nbsp;
                        Все :</a>
                    </li>
                    <li class="nav-item">
                      <a :class="index === 3? 'nav-link active':'nav-link' " @click="setActive(3)"
                      >Пользователи</a>
                    </li>
                    <li class="nav-item">
                      <a :class="index === 1? 'nav-link active':'nav-link' " @click="setActive(1)"
                      >Проекты</a>
                    </li>
                    <li class="nav-item">
                      <a :class="index === 22? 'nav-link active':'nav-link' " @click="setActive(22)"
                      >Задачи</a>
                    </li>


                  </ul>
                </div>
              </div><div v-if="!usermode" >
              <p><span style="font-size: x-large">Быстрые фильтры </span> *
                <a id="hideFilters" @click="hideFilters">использовать</a> *
                <a v-if="hideF" id="hideDTPiker" @click="hideDTPiker">ограничить временной интервал </a></p>
              <div v-if="hideF" class="row">
                <div v-if="index===2 || index===22" style=" background-color: #deecf3" class="col wb">
                  <label for="projFilter" class="form-label">Отсортировать по проектам</label>
                  <Select id="projFilter"
                          :list="allprojects"
                          title='Не фильтровать'

                          @change="filterCh($event,'projectName' )"
                  />
                </div>

                <div style="background-color: #dfe1e2" class="col wb">
                  <label for="userFilter" class="form-label">Отсортировать по
                    {{ index === 1 || index === 10 ? "владельцу" : "исполнителю" }}</label>
                  <Select id="userFilter"
                          :list="users"
                          title='Не фильтровать'
                          @change="filterCh($event, 'userName')"
                  />
                </div>

                <div v-if="hideDTp" style="background-color: #ecf5e6; width: 24%" class="col wb">
                  <label for="fromdate" class="form-label">Начало периода</label>
                  <input @change="filterCh($event,'fromDate')" class="form-control"
                         id="fromdate" type="datetime-local">

                </div>
                <div v-if="hideDTp" style="background-color: #ecf5e6;  width: 24%" class="col wb">
                  <label for="todate" class="form-label">Конец период</label>
                  <input @change="filterCh($event, 'toDate')" class="form-control" id="todate"
                         type="datetime-local">
                </div>

                <div style="margin-left: auto; margin-right: auto " class="row"> <h3>Фильтры по задачам</h3>
                  <div :class="ff.ftype == null ? 'col wb' : 'col wb '+ ftype[ff.ftype-1].name">
                    <Select id="ftype"
                            :list="ftype"
                            title='Все типы'
                            @selected="chFF($event, 'ftype')"
                    /></div>
                  <div :class="'col wb pr' +ff.fprior">
                    <Select  id="fprior"
                             :list="fprior"
                             title='Все приоритеты'
                             @selected="chFF($event,'fprior')"
                    /></div>
                  <div class="col wb ">
                    <Select  id="fstatus"
                             :list="fstatus"
                             title='Все статусы'
                             @selected="chFF($event,'fstatus' )"
                    /></div>
                  <div class="col wb ">
                    <input  type="text" placeholder="Содержит текст" @change="chFF($event,'ftext' )"/>
                  </div>
                </div>
              </div></div>
              <div v-else-if="usermode"><input  type="text" placeholder="Имя или e-mail содержит текст" @change="chFF($event,'usertext' )"/></div>
              <div class="col-md-12" id="content">
                <ContentConteiner :list=requestTemp :type="index"></ContentConteiner>

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer id="Footer"/>
    </div>

  </div>
</template>

<script>
import ContentConteiner from "@/components/ContentConteiner";
import store from "@/store";
import Footer from "@/components/Footer";
import MakeTask from "@/modal/MakeTask";
import MakeProject from "@/modal/MakeProject";
import Select from "@/modal/Select";
import dataService from "@/services/axios_req";
import service_ffilter from "@/services/fffilter"



export default {
  name: 'Admin',
  props: ['keycloak'],

  components: {
    ContentConteiner,
    Footer,
    MakeTask,
    MakeProject,
    Select,


  },
  data() {
    return {
      hideF: false,
      hideDTp: false,
      infoText: "Welcome",
      index: 3,
      username: "username",
      loading: true,
      isShowModalP: false,
      isShowModalT: false,
      usermode: false,
      filter: {
        projectName: null,
        userName: null,
        fromDate: null,
        toDate: null
      },
      requestTemp: [],
      ftype: store.state.list.TASK_TYPES,
      fstatus: store.state.list.STATUS,
      fprior: store.state.list.PRIORITY,
      ff: {
        ftype: null,
        fstatus: null,
        fprior: null,
        ftext: null,
        usertext: null
      },


    }
  },

  methods: {


    hideFilters() {
      this.hideF = !this.hideF;
      if (!this.hideF) {
        document.getElementById("hideFilters").innerText = "использовать";
        this.filter.projectName = null;
        this.filter.userName = null;
        this.setActive(this.index);
      } else {
        document.getElementById("hideFilters").innerText = "скрыть фильтры" //todo reset or not when hide


      }

    },
    hideDTPiker() {
      this.hideDTp = !this.hideDTp;
      if (!this.hideDTp) {
        document.getElementById("hideDTPiker").innerText = "ограничить временной интервал"
        this.filter.fromDate = null
        this.filter.toDate = null

      } else {
        document.getElementById("hideDTPiker").innerText = "скрыть выбор временного  интервала"
      }
    },
    ModalProj() {
      this.isShowModalP = !this.isShowModalP;
    },
    ModalTask() {
      this.isShowModalT = !this.isShowModalT;

    },
    filterCh(e, param) {
      this.filter[param] = e.target.value == "" ? null : e.target.value;
      if (Date.parse(this.filter.fromDate) >= Date.parse(this.filter.toDate)) {
        alert("Ошибка в датах: начало периода после его конца.");
        this.filter.fromDate = null
        this.filter.toDate = null
        return;
      }
      console.log(" change: " + JSON.stringify(e.target.value)
          + "\n projectName: " + this.filter.projectName +
          "\n userName: " + this.filter.userName +
          "\n fromDate:" + this.filter.fromDate +
          "\n todate: " + this.filter.toDate)

      this.setActive(this.index);
    },
    async filterReq(t) {
      let type = "";
      switch (t) {
        case 1:
          type = 'p';
          break;
        case 22:
          type = 't';
          break;
        default :
          alert("TABS error ");
          break;
      }

      let filtered = (await dataService.data_req("", "rest/filter/" + type + "/" + this.filter.projectName + "/" + this.filter.userName + "/"
          + this.filter.fromDate + "/" + this.filter.toDate, "GET")).data;
      if (filtered) {
        this.fffilter(filtered,type);
      }
    },

/// FF methods start
    chFF(e, param) {
      this.ff[param] = e.target.value.trim() == "" ? null : e.target.value;

      console.log(" change FF: " + JSON.stringify(this.ff))

      this.setActive(this.index);
    },

    fffilter(arr, type){

      this.requestTemp = service_ffilter.do(arr,this.ff,type);
    },
/// FF methods END

    async setActive(index) {
      this.index = index;
        if (index===3){
          this.usermode=true
          if (this.ff.usertext!= null){
          this.requestTemp= store.state.list.USERS.filter((task)=> task.name.toLowerCase().includes(this.ff.usertext.toLowerCase())
                || task.email.toLowerCase().includes(this.ff.usertext.toLowerCase()))}

          else {
            this.requestTemp= store.state.list.USERS
          }

        }

        else {
          this.usermode=false
          await this.filterReq(this.index);
        }

    },
   async checkData() {
      if (store.state.auth.user) {

        this.loading = false;
        store.commit('subscribe');
      } else
        setTimeout(() => {
          this.checkData();
        }, 300)


    }

  },
  async beforeMount() {

    this.checkData();
  },
  mounted() {
    this.setActive(this.index);
    console.log("created  this.username = " + this.username);
  },

  computed: {
    dataP: () => {
      return store.state.auth.user.projectsOwner
    },  //  getters
    thisUser: () => {
      alert('LIST    thisUser.name' + store.state.auth.user.name)
      return store.state.auth.user
    },
    allprojects: () => {
      return store.state.list.ALLPROJECTS
    },
    users: () => {
      return store.state.list.USERS
    },


  }
}


</script>
<style scoped>
.admin{
background-color: salmon}
</style>
