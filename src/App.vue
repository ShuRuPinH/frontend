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
            <div id="menu" class="d-none d-md-block col-md-3"><img style="height: 50px;" alt="Vue logo"
                                                                   src="@/assets/logo.png">

              <hr>
              <h4>{{ username }}</h4>
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
              </i>
              <hr>
              <br>
              <a @click="keycloak.logout()"> ВЫХОД </a>
            </div>
            <div id="main" class=" col-md-9">
              <div class="row">
                <div style="" class="page-header">

                  <ul class="nav nav-tabs">
                    <li  class="nav-item ">
                      <a style="color: #0bacf5" class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Ваши  :</a>
                    </li>  <li class="nav-item">
                    <a :class="index === 20? 'nav-link active':'nav-link' " @click="setActive(20)"
                    >Задачи</a>
                  </li>
                    <li class="nav-item">
                      <a :class="index === 10? 'nav-link active':'nav-link' " @click="setActive(10)"
                      >Проекты</a>
                    </li>

                    <li  class="nav-item ">
                      <a style= "color:  #0d75a5" class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">&nbsp;&nbsp;&nbsp;&nbsp; Все  :</a>
                    </li>
                    <li class="nav-item">
                      <a :class="index === 1? 'nav-link active':'nav-link' " @click="setActive(1)"
                      >Проекты</a>
                    </li>
                    <li class="nav-item">
                      <a :class="index === 2? 'nav-link active':'nav-link' " @click="setActive(2)"
                      >Задачи</a>
                    </li>


                  </ul>
                </div>
              </div>
              <p><span style="font-size: x-large">Быстрые фильтры </span> *
                <a id="hideFilters" @click="hideFilters">использовать</a> *
                <a v-if="hideF" id="hideDTPiker" @click="hideDTPiker">ограничить временной интервал </a></p>
              <div v-if="hideF" style="padding: 10px;" class="row">
                <div v-if="index!==1" style="background-color: #deecf3" class="col">
                  <label for="projFilter" class="form-label">Отсортировать по проектам</label>
                  <Select id="projFilter"
                          :list="allprojects"
                          title='Не фильтровать'

                          @change="filterCh($event,'projectName' )"
                  />
                </div>

                <div style="background-color: #dfe1e2" class="col ">
                  <label for="userFilter" class="form-label">Отсортировать по {{index ===1? "владельцу" :"исполнителю"  }}</label>
                  <Select id="userFilter"
                          :list="users"
                          title='Не фильтровать'
                          @change="filterCh($event, 'userName')"
                  />
                </div>

                <div v-if="hideDTp" style="background-color: #ecf5e6; width: 24%" class="col ">
                  <label for="fromdate" class="form-label">Начало периода</label>
                  <input @change="filterCh($event,'fromDate')"  class="form-control"
                         id="fromdate" type="datetime-local">

                </div>
                <div v-if="hideDTp" style="background-color: #ecf5e6;  width: 24%" class="col ">
                  <label for="todate" class="form-label">Конец период</label>
                  <input @change="filterCh($event, 'toDate')"  class="form-control" id="todate"
                         type="datetime-local">
                </div>
              </div>
              <div class="col-md-12" id="content">
                <ItemsList :list=requestTemp :type="index"></ItemsList>

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
import ItemsList from '@/components/ItemsList.vue'
import store from "@/store";
import Footer from "@/components/Footer";
import MakeTask from "@/modal/MakeTask";
import MakeProject from "@/modal/MakeProject";
import Select from "@/modal/Select";
import dataService from "@/services/axios_req";



export default {
  name: 'App',
  props: ['keycloak'],

  components: {
    ItemsList,
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
      index: 1,
      username: "username",
      loading: true,
      isShowModalP: false,
      isShowModalT: false,
      filter: {
        projectName: null,
        userName: null,
        fromDate: null,
        toDate: null
      },
      requestTemp: []
    }
  },

  methods: {
    hideFilters() {
      this.hideF = !this.hideF;
      if (!this.hideF) {
        document.getElementById("hideFilters").innerText = "использовать"
      } else {
        document.getElementById("hideFilters").innerText = "скрыть фильтры" //todo reset or not when hide
        this.filter.projectName=null;
        this.filter.userName=null;
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
      this.filter[param] = e.target.value;
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
    async filterReq(t){
      let type ="";
      switch (t){
        case 1: type='p'; break;
        case 2: type='t'; break;


        default : alert("TABS error "); break;
      }

      let filtered = (await dataService.data_req("","rest/filter/"+type+"/"+this.filter.projectName +"/"+this.filter.userName+"/"
          +this.filter.fromDate + "/"+ this.filter.toDate ,"GET")).data;
      if (filtered) {
        console.log( "good Req :\n" +JSON.stringify(filtered))
        this.requestTemp=filtered;}
    },
    async personReq(t){
      let type ="";
      switch (t){
        case 10: type='p'; break;
        case 20: type='t'; break;
        default : alert("TABS error "); break;
      }

      let filtered = (await dataService.data_req("","rest/person/"+type+"/"+store.state.auth.user.id+"/"+this.filter.projectName +"/"+this.filter.userName+"/"
          +this.filter.fromDate + "/"+ this.filter.toDate ,"GET")).data;
      if (filtered) {
        console.log( "good Req :\n" +JSON.stringify(filtered))
        this.requestTemp=filtered;}
    },



    setActive(index) {
      this.index = index;

      if (index <10)
      this.filterReq(this.index);
      else {
        this.personReq(this.index);
      }

    },
    checkData() {
      if (store.state.auth.user) {
        this.username = store.state.auth.user.email;
        this.loading = false;
        store.commit('subscribe');
      } else
        setTimeout(() => {
          this.checkData();
        }, 300)


    }

  },
  async beforeCreate() {
   if (! store.commit('initialiseStore')){
    await this.keycloak.loadUserProfile()
        .then(function (profile) {
          let userq = profile.username.toString();
          store.dispatch('getState', userq).then(
              console.log("beforeCreate() then = " + JSON.stringify(store))
          )
        });}
    this.checkData();
  },
  mounted() {
    this.filterReq(this.index);
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
<style>

div {
  padding: 5px;
}

label {
  font-size: small;
}

#position {
  padding: 10px;
  background: #f1f1f1;
  border-radius: 6px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, .64)
}

#menu {
  border: 0px solid black;
  padding: 5px;

}

#main {

  padding: 5px;
}

#content {
  border: 0px solid black;
  padding: 10px;

}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.nav-link {
  font-size: larger;
  font-weight: bold;
  color: #2f9f8f;


}

.nav-link:hover {
  color: #87ef3e;

}

.nav-link.active {
  color: #f81f60;
  font-weight: bolder;
  font-size: larger;

}

#nav {
  padding: 30px;
  background-color: coral;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b94e;
}

.active {
  color: red;
}

.loader {
  margin-right: auto;
  margin-left: auto;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #2f9f8f;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}


[class*="sticker"] {
  position: relative;
  margin: 15px 0;
  padding: 33px 15px 15px;
  background: #fff;
  border-radius: 6px;
  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, .64)
}
[class*="sticker"]:after {
  content: attr(data-sticker);
  position: absolute;
  top: 0;
  padding: 3px 7px;
  font-size: 16px;
  font-weight: bold;
  background: #999;
  color: #fff
}
.sticker-left {
  border-top-left-radius: 6px
}
.sticker-right {
  border-top-right-radius: 6px
}
.sticker-left:after {
  left: 0;
  border-radius: 6px 0 6px 0
}
.sticker-right:after {
  right: 0;
  border-radius: 0 6px 0 6px
}
.sticker-danger:after {
  background: #d9534f
}
.sticker-warning:after {
  background: #f0ad4e
}
.sticker-success:after {
  background: #5cb85c
}
.sticker-info:after {
  background: #5bc0de
}
.sticker-inverse:after {
  background: #222
}

</style>
