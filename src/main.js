import {createApp} from 'vue'
import Start from './Start.vue'
import router from '@/router'
import store from '@/store';
//import Keycloak from "keycloak-js";



import authConfig from '../auth_config.json'
import { setupAuth } from './auth'

console.log("main")
let app = createApp(Start).use(store).use(router)

function callbackRedirect(appState) {
    console.log("callbackRedirect = " + appState)
    router.push(
        appState && appState.targetUrl
            ? appState.targetUrl
            : '/'
    );

    console.log("callbackRedirect")
}

setupAuth(authConfig, callbackRedirect).then((auth) => {
    app.use(auth).mount('#app')
})
// Install the authentication plugin here



/*
let initOptions = {
 //  url: 'http://localhost:8887/auth', realm: 'Task_Manager', clientId: 'tm', onLoad: 'login-required'
    url: 'http://77.51.193.189:99/auth', realm: 'Task_Manager', clientId: 'tm', onLoad: 'login-required'
//url: 'https://208.76.221.20:8880/auth', realm: 'Task_Manager', clientId: 'tm', onLoad: 'login-required'
}

let keycloak = Keycloak(initOptions);

keycloak.init({ onLoad: initOptions.onLoad }).then((auth) => {
    if (!auth) {
        console.log("!Auth");
        window.location.reload();

    } else {
        console.log("Authenticated - "+ keycloak.clientId);
    /!*    console.log("token - "+ keycloak.idToken);*!/

        createApp(Start, {  keycloak: keycloak } ).use(router).use(store).mount('#app');

    }


//Token Refresh
    setInterval(() => {
        keycloak.updateToken(70).then((refreshed) => {
            if (refreshed) {
             /!*   console.log('Token refreshed '+ keycloak.token);*!/
            } else {
                console.log('Token not refreshed, valid for '
                    + Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + ' seconds');
            }
        }).catch(() => {
            console.log('Failed to refresh token');
        });
    }, 15000)

}).catch((e) => {
    console.log("Authenticated Failed   e:"+ JSON.stringify(e));
    document.write('<br><br><center><h3>Не доступен сервер авторизации.</h3></center>');
});

export default keycloak;*/
