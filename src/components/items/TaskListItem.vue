<template>
  <table style="border-collapse: collapse; width:100%;" border="0">
    <tbody>
    <tr>
      <td style="background-color: #e8ebf5; width: 11.3103%;">ID:&nbsp;<strong>{{item.id}}</strong></td>
      <td :class="item.type.name" style="width: 19.7241%;"><span >{{item.type.name}}</span> </td>
      <td style="width: 48.5517%;"></td>
      <td style="background-color: #d8abe7; width: 20.4138%;">Код:<strong>{{item.code}}</strong></td>
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
</template>

<script>
export default {
  name: "TaskListItem",
  props: ['item']

}
</script>

<style scoped>

</style>