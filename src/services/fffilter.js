

const service_ffilter={
    do(arr, ff, type){

    if (type ==='t'){
        //  this.fromParent_sort = this.fromParent.filter((task) => task.executor.id == store.state.auth.user.id);
        if (ff.ftype!= null){

            if (!arr[0][0]){
                arr= arr.filter((task)=> task.type.id==ff.ftype)
            }
            else if (arr[0][0]){
            arr[0]= arr[0].filter((task)=> task.type.id==ff.ftype)
            arr[1]= arr[1].filter((task)=> task.type.id==ff.ftype)}
            else {alert("filter error 1   arr.length="+arr.length)}

        }
        if (ff.fprior!= null){

            if (!arr[0][0]){
                arr= arr.filter((task)=> task.priority.id==ff.fprior)
            }
            else if (arr[0][0]){

            arr[0]= arr[0].filter((task)=> task.priority.id==ff.fprior)
            arr[1]= arr[1].filter((task)=> task.priority.id==ff.fprior)}
            else {alert("filter error 2   arr.length="+arr.length)}
        }

        ///    STATUS
        /*   if (this.ff.fstatus!= null){
             arr[0]= arr[0].filter((task)=> task.fstatus.id==this.ff.fstatus)
             arr[1]= arr[1].filter((task)=> task.fstatus.id==this.ff.fstatus)
           }*/


        if (ff.ftext!= null){

            let filterText=ff.ftext.toLowerCase();

            if (!arr[0][0]){
                arr= arr.filter((task)=> task.name.toLowerCase().includes(filterText)
                    || task.description.toLowerCase().includes(filterText) || task.code.toLowerCase().includes(filterText))
            }
            else if (arr[0][0]){
            arr[0]= arr[0].filter((task)=> task.name.toLowerCase().includes(filterText)
                || task.description.toLowerCase().includes(filterText) || task.code.toLowerCase().includes(filterText))
            arr[1]= arr[1].filter((task)=> task.name.toLowerCase().includes(filterText)
                || task.description.toLowerCase().includes(filterText) || task.code.toLowerCase().includes(filterText))}
            else {alert("filter error 3   arr.length="+arr.length)}
        }

    }

     return  arr;
}}

export default service_ffilter