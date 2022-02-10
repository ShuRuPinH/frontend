<template>

  <div style="width: 50%; margin-top: 150px; margin-left: auto; margin-right: auto" class="alert alert-success" role="alert">
    <h4 class="alert-heading">Well done!</h4>
    <p>Вы создали аккаунт, и ваш профиль ожидает верификации администратором.</p>
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