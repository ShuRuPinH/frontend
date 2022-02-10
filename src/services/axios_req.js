import axios from "axios";
import store from '@/store';
import { authPlugin } from "@/auth";


const URL= "https://192.168.0.145:8989/";
//const URL= "http://77.51.193.189:1111/";

const { getTokenSilently } = authPlugin;


const dataService ={
   async  text_req(data ,route, method) {
       const token = await this.getToken();
   return await axios({
        method: method,
       // url: "http://192.168.0.145:8989/"+route,
       url: URL+route,
       // host:"http://192.168.0.145:8081",
      host: location.hostname,
       headers: {'Accept':'application/json', "Authorization": 'Bearer '+ token},
       params: {userId : store.state.auth.user.email},
        data: JSON.parse(data)
      }).then(response =>{return  response.data;}).catch(error => { return error});

        //  return rez;
    },
    async  data_req(data ,route, method) {
        const token = await this.getToken();
    return await axios({
         method: method,
        // url: "http://192.168.0.145:8989/"+route,
        url: URL+route,
         //host:"http://192.168.0.145:8081",
        host: location.hostname,
        headers: {'Accept':'application/json', "Authorization": 'Bearer '+ token},

         data: data
       }).then(response =>{return  response}).catch(error => { return error});

         //  return rez;
     },

    async  check_a(userq) {
        const token = await this.getToken();
        return await axios({
            method: 'GET',
         //   url: "http://192.168.0.145:8989/rest/user/auth",
            url: URL+"rest/user/auth",
        //   host:"http://192.168.0.145:8081",
           host: location.hostname,
            headers: {'Accept':'application/json', "Authorization": 'Bearer '+ token},

            params: {userId : userq}
        }).then(response =>{ /*alert("reponse "+response.data[0].email);*/
            return   response.data}).catch(() => { return null});

        //  return rez;
    },

    async refresh(){
        const token = await this.getToken();
       let newdata = await axios({
           method: 'GET',
          // url: "http://192.168.0.145:8989/rest/user/auth",
           url: URL+"rest/user/auth",
           //host:"http://192.168.0.145:8081",
           host: location.hostname,
           headers: {'Accept':'application/json', "Authorization": 'Bearer '+ token},

           data: {}
       }).then(response =>{/* alert(response.data[0].email);*/
           return  response.data[0].email ==  store.state.LOGIN? response.data: null;}).catch(() => { return null});

       if (newdata){
           await store.commit('change',{ login: store.state.LOGIN,
               password : store.state.PASSWORD,
               data_arr: newdata});
           await store.commit('subscribe')

       }
    },

    async getToken() {

        try {
            const accessToken = await getTokenSilently();
            console.log("accessToken =\n "+accessToken );
            return accessToken;

        } catch (e) {
            console.log(e.message);
        }

    }
}
export default dataService;
