<template>
  <h2 style="background: #f0ad4e">Задачи к выполнению:</h2>
  <div class="sticker-left sticker-warning text-center" v-for="(item,id) in fromParent[1]" :key="id" :value="item" :data-sticker="item.name">
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

  <h2 style="background: #d9534f">Поставленные задачи:</h2>
  <div class="sticker-left sticker-danger text-center" v-for="(item,id) in fromParent[0]" :key="id" :value="item" :data-sticker="item.name">
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
</template>

<script>




export default {
  name: "TaskItem",
  computed: {
  },
  props:{
    fromParent: []
  },

  checkData() {
    if (this.fromParent.length ==2 ) {
      console.log("this.fromParent.length = "+ this.fromParent.length)
    } else
      setTimeout(() => {
        this.checkData();
      }, 300)


  }
}
</script>

<style scoped>

</style>