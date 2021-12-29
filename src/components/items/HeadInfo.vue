<template>
  <div id="position"><h5>{{ text }}</h5></div>

</template>
<script>
export default {
name: "HeadInfo",
data () {return {
  text: "Welcome"
}},
methods:{
  setText(msg){
    this.text=msg
  }
}


}
</script>

<style scoped>

</style>