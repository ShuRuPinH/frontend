<template>

  <div style="width: 50%; margin-top: 150px; margin-left: auto; margin-right: auto" class="alert alert-success" role="alert">
    <h4 class="alert-heading">Wait!</h4>
    <p>Это или ошибка связи с бэкендом или нужно подождать еще немного.</p>
    <hr>
    <p><a @click="$emit('logout')"> На страницу авторизации </a></p>

  </div>


</template>

<script>
export default {
  name: "Wait",

  beforeMount() {localStorage.clear()
  },

  mounted() {

  }
}

</script>

<style scoped>

</style>