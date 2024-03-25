import { useState } from "react"

function useEditTodo ( data , allTodo , updateTodo) {
    const [edit , setEdit] = useState(false);
    const [inputValList ,updateInputVal] = useState(data.name);
    


    const handleClickEdit = () => {
        if (edit === true){
            setEdit(false)
            // console.log(allTodo)
            const index = allTodo.findIndex((eachTodo) =>{
                return eachTodo.name=== data.name
            });
            allTodo[index].name=inputValList;
            updateTodo([...allTodo]);
        }else{
            setEdit(true )
        }
    };

    const handleClickComplete=() => {
        const index = allTodo.findIndex((eachTodo) =>{
            return eachTodo.name=== data.name
        });
        allTodo[index].iscomplete = (data.isComplete === true) ? false : true;
        updateTodo([...allTodo]);
    };
   
    return{
        handleClickEdit,
        handleClickComplete,
        updateInputVal,
        
    }

}

export default useEditTodo;