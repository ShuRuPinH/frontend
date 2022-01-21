<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">



          <p style="font-size: xx-large;font-weight: bold; text-align: left; color: #1003A5">   Создать задачу</p>
            <div class="input-group mb-3">

              <span class="input-group-text">Название:</span>
              <input style="width: 40%" type="text" class="form-control" v-model.trim="t.name">
              <span class="input-group-text">код:</span>
              <input type="text" class="form-control" v-model.trim="t.code">
            </div>



        <br>
        <div class="row">
          <div class="col">
            <Select
                :list="projects"
                title='Выберите проект'
                use-placeholder="true"
                @selected="chTProj($event)"
            />
          </div>
          <div class="col">
            <Select
                :list="types"
                title='Выберите тип'
                use-placeholder="true"
                @selected="chTType($event)"
            /></div>
          <div class="col">
            <Select
                :list="users"
                title='Исполнитель'
                use-placeholder="true"
                @selected="chTExec($event)"
            />

          </div>
          <div class="col">
            <Select
                :list="priors"
                title='Приоритет'
                use-placeholder="true"
                @selected="chTPrior($event)"
            />
          </div>
        </div>
        <div >

           <textarea rows="10" style=" width: 100%;" v-model.trim="t.description" type="text"/>


        </div>

        <div class=" footer">
          <slot v-if="this.user" name="footer">
            User email = {{ user.email }} User id = {{ user.id }}
            <button style="background-color: #F39191" class="btn" @click="$emit('close')">
              Отмена
            </button>&nbsp;

            <button class="btn" style="background-color: #56C86F" @click="sendData">
              Создать
            </button>


          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from '@/store';
import dataService from "@/services/axios_req"
import router from "@/router";
import Select from "@/modal/Select";
import find from "@/services/finding";

export default {
  components: {
    Select
  },

  data() {
    return {
      t: {
        id: null,
        code: null,
        name: "Название задачи",
        description: "Описание задания",
        type: {
          id: null
        },

        priority: {
          id: null
        },
        project: {id: null},
        author: {
          id: null
        },
        executor: {
          id: null
        },
        created: 777,
      },
      user: Object,
      types: [],
      priors: [],

      users: [],

      proj: null,


    }
  },
  computed(){

  },

  mounted() {
    this.user = store.state.auth.user
    this.types = store.state.list.TASK_TYPES
    this.priors = store.state.list.PRIORITY
    this.projects=store.state.list.ALLPROJECTS
    this.users = store.state.list.USERS

  },

  methods: {
    chTExec(e) {
      this.t.executor.id = e.target.value;
    },
    chTProj(e) {
      let tproject = find.inAbyNwithX(this.projects, "id", e.target.value);
      this.t.code = tproject.prefix + "-" + 1; //todo
      this.t.project = tproject
    },
    chTType(e) {
      this.t.type.id = e.target.value;

    },
    chTPrior(e) {
      this.t.priority.id = e.target.value;
    },

    async sendData() {
      this.t.author.id = this.user.id
      alert(JSON.stringify(this.t));
      alert((await dataService.data_req(this.t, "rest/task/create", "POST")).status);
      await dataService.refresh();
      this.$emit('close');
      router.push('List')
    }
  }

};
</script>


<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 1s ease;

}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color:rgb(238,214,126);
  transition: all 0.3s ease;

  font-family: "Roboto Light", Arial, sans-serif;
}

.modal-header {

}

.modal-body {
  margin: 0px 0;

}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.footer {
  text-align: right;
margin: 5px;
  background-color: #e9ecef;
border-width: 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>