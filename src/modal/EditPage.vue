<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">

        <p style="font-size: xx-large;font-weight: bold; text-align: left; color: #1003A5">   Редактирование элемента</p>

        <form id="eform"  >
        <div v-for="(val,key) in inputitem" :key="key"  class="input-group mb-3">

          <span class="input-group-text">{{key}}:  </span>

          <input @change='this.formchange(key,$event)' style="width: 40%" type="text" class="form-control" :value="val">

        </div></form>
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



export default {

  props: ['inputitem'],
  data() {
    return {
      p: {

        id: null,
        name: "Назовите проект",
        description: "Описание проекта",
        prefix: "Prfx()",
        owner: {
          id: null
        }
      },
      user:store.state.auth.user,
      tempitem: this.inputitem
    }
  },
  computed() {


  },
  mounted() {
   console.log(" tempitem \n"+JSON.stringify(this.tempitem))
    console.log(" this.inputitem\n"+JSON.stringify(this.inputitem))
  },
  methods: {
    closeModal() {
    },
    async sendData() {
      this.p.owner.id = this.user.id
      alert((await dataService.data_req(this.p, "rest/project/create", "POST")).status);
      await dataService.refresh();
      // todo  store.dispatch - act
      this.$emit('close');
    }
  ,
  formchange(key,e){
    this.tempitem =  this.inputitem;
    this.tempitem[key]=e.target.value;
    alert(JSON.stringify(this.tempitem))
  }}

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
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  height: 90%;
  margin: 0px auto;
  padding: 20px 30px;
  overflow: scroll;
  background-color: #eec57e;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: "Roboto Light", Arial, sans-serif;
}

.modal-header {
  background-color: #198754;
}

.modal-body {
  margin: 20px 0;
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