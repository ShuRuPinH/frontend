<template>
  <div v-if="loading" class="loader"></div><div v-else>
  <h2 style="background: #f0ad4e">Вы исполнитель  /с учетом фильтров/ : {{fromParent_sort.length}} шт. </h2>
  <div  @click="$emit('opentask',  item)" class="sticker-left sticker-warning text-center" v-for="(item,id) in fromParent_sort" :key="id" :value="item" :data-sticker="item.name">
    <table style="border-collapse: collapse; width:100%;" border="0">
      <tbody>
      <tr>
        <td style="background-color: #b2ceee; width: 11.3103%;">ID:&nbsp;<strong>{{item.id}}</strong></td>
        <td style="width: 19.7241%;"></td>
        <td style="width: 48.5517%;"></td>
        <td style="background-color: #b2eec6; width: 20.4138%;">Код:<strong>{{item.code}}</strong></td>
      </tr>
      <tr>
        <td style="width: 11.3103%;">Описание:</td>
        <td style="width: 88.6897%;" colspan="3">{{item.description}}</td>
      </tr>
      <tr>
        <td style="width: 11.3103%;">Автор:<strong>{{item.author == null? "нет": item.author.name}}</strong>&nbsp;</td>
        <td style="width: 19.7241%;">&nbsp;</td>
        <td style="width: 48.5517%; text-align: right;"></td>
        <td style="width: 20.4138%;">Испольнитель:<strong> {{item.executor == null? "нет": item.executor.name}}</strong> &nbsp;</td>
      </tr>
      </tbody>
    </table>
  </div>

  <h2 style="background: #d9534f">Все /с учетом фильтров/ : {{fromParent.length}} шт.</h2>
  <div @click="$emit('opentask',  item) " class="sticker-left sticker-danger text-center" v-for="(item,id) in fromParent" :key="id" :value="item" :data-sticker="item.name">
  <table style="border-collapse: collapse; width:100%;" border="0">
    <tbody>
    <tr>
      <td style="background-color: #b2ceee; width: 11.3103%;">ID:&nbsp;<strong>{{item.id}}</strong></td>
      <td style="width: 19.7241%;"></td>
      <td style="width: 48.5517%;"></td>
      <td style="background-color: #b2eec6; width: 20.4138%;">Код:<strong>{{item.code}}</strong></td>
    </tr>
    <tr>
      <td style="width: 11.3103%;">Описание:</td>
      <td style="width: 88.6897%;" colspan="3">{{item.description}}</td>
    </tr>
    <tr>
      <td style="width: 11.3103%;">Автор:<strong>{{item.author == null? "нет": item.author.name}}</strong>&nbsp;</td>
      <td style="width: 19.7241%;">&nbsp;</td>
      <td style="width: 48.5517%; text-align: right;"></td>
      <td style="width: 20.4138%;">Испольнитель:<strong> {{item.executor == null? "нет": item.executor.name}}</strong> &nbsp;</td>
    </tr>
    </tbody>
  </table>
  </div></div>
</template>

<script>

import store from "@/store";

export default {
  name: "TaskItemAll",
  data(){
    return{
      fromParent_sort : [],
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
    prt() {
      alert(JSON.stringify(this.fromParent[0].executor.id) + ' < exec fromParent  current user ID >' + store.state.auth.user.id
          + '  fromParent_sort. ' + JSON.stringify(this.fromParent_sort))
    },

    checkData() {
      if (this.fromParent[0] && this.fromParent[0].executor ) {
        this.fromParent_sort = this.fromParent.filter((task) => task.executor.id == store.state.auth.user.id);
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