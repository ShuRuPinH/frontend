<template>
  <div><h1>ВАЖНО!</h1>

    <table border="0" style="border-collapse: collapse; width: 100%;">
    <tbody>
    <tr>
      <td style="width: 50%; padding: 20px; background-color: #f0ad4e"><img src="@/assets/manual.jpg"  alt="инструкция"/></td>
      <td style="text-align: left; width: 50%;"><ul>
        <li style="padding: 15px; background-color: #f0ad4e">Так как сервис пока использует <strong>самоподписанный сертификат</strong> (нет определённости с конечным местом размещения),
          для работы нужно <strong>ДВА</strong> <strong>разрешение</strong> для соединения: для <strong>фронтенда</strong> и <strong>бэкенда</strong>,
          с фронтом вы уже это, видимо,  сделали, для бэка нужно перейти по <a href="https://77.51.193.189:1111/" target="_blank">ссылке</a> , сделать как на картинке слева и закрыть окно, и так же разрешить, сертификат бэка будет добавлен и больше это не потребуется, иначе браузер просто не примет ответ от бэка.</li>
        <br>
        <li style="padding: 15px; background-color: #93c8b6">Авторизоваться можно c данными - логин: <strong>user@for.test</strong>, пароль: <strong>10zxZX!)</strong><br>Или зарегистрировать нового пользователя.</li>
        <br>
        <li style="padding: 15px; background-color: #a393c8">Это еще незавершенный проект для тестирования “в полях” ;)</li>
        <br>
        <li style="padding: 15px; background-color: #e0dee5">Фронтенд: <strong>JS - Vue</strong>,<br>бэкенд: <strong>Java Spring (Hibernate)</strong>,<br>БД: <strong>PostgreSQL</strong>,<br>Сервер авторизации: <strong>oauth2 - www.auth0.com</strong>.</li>
      </ul></td>
    </tr>
    <tr>
      <td style="width: 50%;"></td>
      <td style="width: 50%;"></td>
    </tr>
    </tbody>
  </table></div>
</template>

<script>
export default {
  name: "Info"
}
</script>

<style scoped>

</style>