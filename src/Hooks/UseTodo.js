import { useState } from "react";

function useTodo () {
    const [inputVal, setInputVal] = useState('');
    const [todos, setTodos] = useState([]);

    const handleClickAdd = () => {
        if (inputVal.trim('')){  
        setTodos([...todos, inputVal])
        setInputVal('');
        }
      }
    
    return{
        handleClickAdd ,todos,setTodos , setInputVal,inputVal  
    }
}

export default useTodo;