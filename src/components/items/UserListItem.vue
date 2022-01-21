<template>
  <table style="border-collapse: collapse; width:100%;" border="0">
    <tbody>
    <tr>
      <td style="background-color: #e8ebf5; width: auto;">ID:&nbsp;<strong>{{item.id}}</strong></td>

      <td >E-mail:<strong> <span style="background-color: #71d4ff; width: 40%;" >&nbsp;{{item.email}}&nbsp;</span></strong></td>
    </tr>
    <tr>

      <td style="width: auto;" colspan="2">{{item}}</td>
    </tr>
    <tr>
      <td style="width: auto;">&nbsp;</td>
      <td style="width: auto;">&nbsp;</td>

    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "UserListItem",
  props: ['item']

}
</script>

<style scoped>

</style>