const auth = {
    namespaced: true,
    state: () => ({
        user: null,}),
    mutations: {        change(state, a ){


          //  alert('mutation CHANGE  '+JSON.stringify(a[0]))
           if(a) state.user= a[0];

        },
        clear(state ){
            state.user= null;
        },},
    actions: {

    },
    getters: {  }
}

export default auth