<template>
  <div v-if="loading" class="loader"></div>
  <div v-else>
  <div v-if="fromParent[1][0]">

  <h2 style="background: #f0ad4e">Задачи к выполнению  /с учетом фильтров/: {{fromParent[1].length}} шт.</h2>


    <div  @click="$emit('opentask',  item) " class="sticker-left sticker-warning text-center"
       v-for="(item,id) in fromParent[1]" :key="id" :value="item"
       :data-sticker="item.name ==null ? 'n/a' : item.name">

    <table   style="border-collapse: collapse; width:100%;" border="0">
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
        <td style="width: 20.4138%;">Исполнитель:<strong> {{item.executor == null? "нет": item.executor.name}}</strong> &nbsp;</td>
      </tr>
      </tbody>
    </table>
  </div>
   </div>
  <div v-else><h2 style="background: #f0ad4e">Нет задач к выполнению.</h2></div>
  <div v-if="fromParent[0][0]">
    <h2 style="background: #d9534f">Поставленные задачи: {{fromParent[0].length}} шт.</h2>

  <div  @click="$emit('opentask',  item2) " class="sticker-left sticker-danger text-center" v-for="(item2,id) in fromParent[0]" :key="id" :value="item2" :data-sticker="item2.name ==null ? 'n/a' : item2.name">
  <table style="border-collapse: collapse; width:100%;" border="0">
    <tbody>
    <tr>
      <td style="background-color: #b2ceee; width: 11.3103%;">ID:&nbsp;<strong>{{item2.id}}</strong></td>
      <td style="width: 19.7241%;"></td>
      <td style="width: 48.5517%;"></td>
      <td style="background-color: #b2eec6; width: 20.4138%;">Код:<strong>{{item2.code}}</strong></td>
    </tr>
    <tr>
      <td style="width: 11.3103%;">Описание:</td>
      <td style="width: 88.6897%;" colspan="3">{{item2.description}}</td>
    </tr>
    <tr>
      <td style="width: 11.3103%;">Автор:<strong>{{item2.author == null? "нет": item2.author.name}}</strong>&nbsp;</td>
      <td style="width: 19.7241%;">&nbsp;</td>
      <td style="width: 48.5517%; text-align: right;"></td>
      <td style="width: 20.4138%;">Исполнитель:<strong> {{item2.executor == null? "нет": item2.executor.name}}</strong> &nbsp;</td>
    </tr>
    </tbody>
  </table>
  </div></div>
  <div v-else><h2 style="background: #f0ad4e">Нет поставленных задач.</h2></div>

  </div>
</template>

<script>




export default {
  name: "TaskItem",

 data() { return{
   loading: true
 }
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
    if (this.fromParent.length ==2 && this.fromParent[0] && ( this.fromParent[0].executor==null || this.fromParent[0].executor) ) {
        console.log("this.fromParent.length = "+ this.fromParent.length)
      this.loading=false
    } else
      setTimeout(() => {
        this.checkData();
        this.loading=true
      }, 300)


  }}
}
</script>

<style scoped>

</style>