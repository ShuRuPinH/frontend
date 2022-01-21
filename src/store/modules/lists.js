const lists= {
    namespaced: true,
    state: () =>( {
        TASK_TYPES: [],
        PRIORITY: [],
        USERS: [],
        ALLPROJECTS: [],
        STATUS: []
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
            state.STATUS=a[5];
        },
        clear(state ){
            state.TASK_TYPES= null;
            state.PRIORITY= null;
            state.USERS=null;
            state.ALLPROJECTS=null;
            state.STATUS=null;
        }
    }
};

export default lists