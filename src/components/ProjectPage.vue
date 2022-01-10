<template>
  <h1> ProjectPage</h1>
  <p>{{item}}}</p>
</template>

<script>
export default {
  name: "ProjectPage",
  props: ['item'],
/*  computed:{
    fish : this.item ?  JSON.stringify(this.item) : "no item"
  }*/
}
</script>

<style scoped>

</style>