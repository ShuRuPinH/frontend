import axios from "axios";
import store from '@/store';
import keycloak from "@/main";


//const URL= "http://localhost:8080/";

const dataService ={
   async  text_req(data ,route, method) {
     // let rez = null;
   return await axios({
        method: method,
        url: "http://localhost:8989/"+route,
        host:"http://localhost:8081",
       headers: {'Accept':'application/json', "Authorization": 'Bearer '+ this.token()},

        data: JSON.parse(data)
      }).then(response =>{return  response.data;}).catch(error => { return error});

        //  return rez;
    },
    async  data_req(data ,route, method) {
      // let rez = null;
    return await axios({
         method: method,
         url: "http://localhost:8989/"+route,
         host:"http://localhost:8081",
        headers: {'Accept':'application/json', "Authorization": 'Bearer '+ this.token()},

         data: data
       }).then(response =>{return  response}).catch(error => { return error});

         //  return rez;
     },

    async  check_a(userq) {
        // let rez = null;
        return await axios({
            method: 'GET',
            url: "http://localhost:8989/rest/user/auth",
            host:"http://localhost:8081",
            headers: {'Accept':'application/json', "Authorization": 'Bearer '+ this.token()},

            params: {userId : userq}
        }).then(response =>{ /*alert("reponse "+response.data[0].email);*/
            return   response.data}).catch(() => { return null});

        //  return rez;
    },

    async refresh(){
       let newdata = await axios({
           method: 'GET',
           url: "http://localhost:8989/rest/user/auth",
           host:"http://localhost:8081",
           headers: {'Accept':'application/json', "Authorization": 'Bearer '+ this.token()},

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

     token (){
    /*   alert(keycloak.token)*/
       return  keycloak.token
    }

}
export default dataService;
