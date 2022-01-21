import {createStore} from 'vuex';

import auth from "@/store/modules/auth";
import list from "@/store/modules/lists";
import clientService from "@/services/axios_req";


const store= createStore({
    modules: {
        auth,
        list
    },
    actions: {

        async  getState(state, userId) {

            let arr =  await clientService.check_a(userId);
            store.commit('auth/change', arr)
            store.commit('list/change', arr)

        },
        clear(){
            store.commit('auth/clear');
            store.commit('list/clear');
        }
    },
    mutations: {


        initialiseStore(state) {
            // Check if the ID exists
            if (localStorage.getItem('store')) {
                // Replace the state object with the stored item
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('store')))
                );

                return true;
            }
            return false;
        },
        subscribe(state) {
            // Store the state object as a JSON string
            localStorage.setItem('store', JSON.stringify(state));

        }
    }
});

export default store;