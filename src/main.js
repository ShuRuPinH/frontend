import {createApp} from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store';
import Keycloak from "keycloak-js";



let initOptions = {
    url: 'http://localhost:8887/auth', realm: 'Task_Manager', clientId: 'tm', onLoad: 'login-required'
}

let keycloak = Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {
    if (!auth) {
        console.log("!Auth");
        window.location.reload();

    } else {
        console.log("Authenticated - "+ keycloak.clientId);
        console.log("token - "+ keycloak.idToken);

        createApp(App, {  keycloak: keycloak } ).use(router).use(store).mount('#app');

    }


//Token Refresh
    setInterval(() => {
        keycloak.updateToken(70).then((refreshed) => {
            if (refreshed) {
                console.log('Token refreshed '+ keycloak.token);
            } else {
                console.log('Token not refreshed, valid for '
                    + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
            }
        }).catch(() => {
            console.log('Failed to refresh token');
        });
    }, 15000)

}).catch((e) => {
    console.log("Authenticated Failed   e:"+ e);
    document.write('<br><br><center><h3>Не доступен сервер авторизации.</h3></center>');
});

export default keycloak;