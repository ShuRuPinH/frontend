const find ={
    inAbyNwithX(arr,name, id){
      return   arr.find(function(item){

            if(item[name] == id ){
               // alert("json find "+ JSON.stringify(item))
                return item;
            }
    });
   //     return null;
    }


}
export default find;