<template>
  <div v-if="loading" class="loader"></div><div v-else>adminlist
  <h2 >Все /с учетом фильтра/ : {{fromParent.length}} шт.</h2>
  <div @click="$emit('openuser',  item) " class="sticker-left sticker-primary text-center" v-for="(item,id) in fromParent" :key="id" :value="item" :data-sticker="item.name">
    <UserListItem :item="item"/>
  </div></div>
</template>

<script>


import UserListItem from "@/components/items/UserListItem";

export default {
  components:{
    UserListItem
  },
  name: "UsersAdminList",
  props: {
    fromParent: [],
  },
  data(){
    return{

      loading: true,

    }
  },

  mounted() {
    this.checkData()
  },
  updated() {
    this.checkData()
  },


  methods: {

    checkData() {
      if (this.fromParent[0] && this.fromParent[0].email ) {
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