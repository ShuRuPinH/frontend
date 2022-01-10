<template>
  <div v-if="loading" class="loader"></div>
  <div v-else>
  <div v-if="fromParent[1].length > 0">

    <h2 style="background: #f0ad4e">Участие в проектах (с учетом фильтра): {{fromParent[1].length}} шт.</h2>
  <div @click="$emit('openprj',  item[0]) " class="sticker-left sticker-info text-center"  v-for="(item,id) in fromParent[1]" :key="id" :value="item[0]" :data-sticker="item[0].name">
  <table style="border-collapse: collapse; width:100%;" border="0">
    <tbody>
    <tr>
      <td style="background-color: #b2ceee; width: 11.3103%;">ID:&nbsp;<strong>{{item[0].id}}</strong></td>
      <td style="width: 19.7241%;"></td>
      <td style="width: 48.5517%;"></td>
      <td style="background-color: #b2eec6; width: 20.4138%;">Prefix:<strong>{{item[0].prefix}}</strong></td>
    </tr>
    <tr>
      <td style="width: 11.3103%;">Описание:</td>
      <td style="width: 88.6897%;" colspan="3">{{item[0].description}}</td>
    </tr>
    <tr>
      <td style="width: 11.3103%;">&nbsp;</td>
      <td style="width: 19.7241%;">&nbsp;</td>
      <td style="width: 48.5517%; text-align: right;">Владелец:<strong>{{item[0].owner==null ? " нет" :item[0].owner.name}}</strong></td>
      <td style="width: 20.4138%;">&nbsp;</td>
    </tr>
    </tbody>
  </table>

  </div></div>

  <div v-else><h2 style="background: #f0ad4e">Не являетесь участником проектов (с учетом фильтра).</h2></div>

  <div v-if="fromParent[0].length> 0">

    <h2 style="background: #f0ad4e">Владелец проектов: {{fromParent[0].length}} шт.</h2>
    <div @click="$emit('openprj',  item) "  class="sticker-left sticker-info text-center"  v-for="(item,id) in fromParent[0]" :key="id" :value="item" :data-sticker="item.name">
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
  </div>
  <div v-else><h2 style="background: #f0ad4e">Не являетесь владельцем проектов.</h2></div></div>
</template>

<script>
//import info from "@/components/items/HeadInfo"
export default {
  name: "ProjectItemPerson",
/*  mounted() {
      info.setText("fgf");
  },*/
  data(){return{
    loading:true}
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
      if (this.fromParent.length ==2 && (this.fromParent[0].length ==0 && this.fromParent[1].length ==0) || (this.fromParent[0][0].prefix || this.fromParent[1][0].prefix )) {
      this.loading=false
      } else
        setTimeout(() => {
          this.loading=true
          this.checkData();
        }, 300)


    }}
}
</script>

<style scoped>

</style>