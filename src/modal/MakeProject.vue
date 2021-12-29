<template>
  <div class="modal-mask">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
          <slot name="header">
            <h4>Создать проект</h4>
            <div class="input-group mb-3">

              <span class="input-group-text">Название:</span>
              <input style="width: 40%" type="text" class="form-control" v-model.trim="p.name">
              <span class="input-group-text">префикс:</span>
              <input type="text" class="form-control" v-model.trim="p.prefix">
            </div>
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            Описание<textarea rows="10" style="width: 100%" v-model.trim="p.description" type="text"/>
          </slot>

        </div>

        <div v-if="this.user" class="modal-footer">
          <slot name="footer">
            User email = {{ user.email }} User id = {{ user.id }}
            <button class="btn btn-success" @click="sendData">
              Создать
            </button>

            <button class="btn btn-danger" @click="$emit('close')">
              Отмена
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


  data() {
    return {
      p: {

        id: null,
        name: "Назовите проект",
        description: "Опишите проект, кратко...",
        prefix: "Prfx()",
        owner: {
          id: null
        }
      },
      user: Object
    }
  },
  computed() {

  },
  mounted() {
    this.user = store.state.auth.user
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
  },
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
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
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
.modal-footer {
  background-color: darkgray;
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