const lists= {
    namespaced: true,
    state: () =>( {
        TASK_TYPES: [],
        PRIORITY: [],
        USERS: [],
        ALLPROJECTS: []
    }),
    getters :{},
    actions:{


    },
    mutations: {
        change(state, a ){
            state.TASK_TYPES= a[1];
            state.PRIORITY= a[2];
            state.USERS=a[3];
            state.ALLPROJECTS=a[4];
        },
    }
};

export default lists