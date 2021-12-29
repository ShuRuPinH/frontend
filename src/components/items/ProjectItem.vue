<template>
  <div  class="sticker-left sticker-info text-center"  v-for="(item,id) in fromParent" :key="id" :value="item" :data-sticker="item.name">
  <table style="border-collapse: collapse; width:100%;" border="0">
    <tbody>
    <tr>
      <td style="background-color: #b2ceee; width: 11.3103%;">ID:&nbsp;<strong>{{item.id}}</strong></td>
      <td style="width: 19.7241%;"></td>
      <td style="width: 48.5517%;"></td>
      <td style="background-color: #b2eec6; width: 20.4138%;">Prefix:<strong>{{item.prefix}}</strong></td>
    </tr>
    <tr>
      <td style="width: 11.3103%;">Описание:</td>
      <td style="width: 88.6897%;" colspan="3">{{item.description}}</td>
    </tr>
    <tr>
      <td style="width: 11.3103%;">&nbsp;</td>
      <td style="width: 19.7241%;">&nbsp;</td>
      <td style="width: 48.5517%; text-align: right;">Владелец:<strong>{{item.owner==null ? " нет" :item.owner.name}}</strong></td>
      <td style="width: 20.4138%;">&nbsp;</td>
    </tr>
    </tbody>
  </table>

  </div>
</template>

<script>
//import info from "@/components/items/HeadInfo"
export default {
  name: "ProjectItem",
/*  mounted() {
      info.setText("fgf");
  },*/
  props:{
    fromParent: null
  }
}
</script>

<style scoped>

</style>