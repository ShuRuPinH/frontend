<template>
  <h1> TaskPage</h1>
  <p>{{item}}}</p>
</template>

<script>
export default {
  name: "TaskPage",
  props: ['item']
/*  computed:{
    fish : this.item ?  JSON.stringify(this.item) : "no item"
  }*/

}


</script>

<style scoped>

</style>