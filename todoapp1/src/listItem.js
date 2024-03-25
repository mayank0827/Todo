import { useState } from "react"


export default ({ allTodo, data, updateTask }) => {
    const [edit, setEdit] = useState(false);
    const [inputVal, setInputVal] = useState(data.name);
    return (
        <li>
            {edit ? <input value={inputVal} onChange={(e) => {
                setInputVal(e.target.value)
            }} />
                :
                <span style={{ color: data.isComplete ? 'green' : 'red' }}>{data.name}</span>
            }
            <button
                onClick={() => {
                    if (edit === true) {
                        setEdit(false);
                        // find the index of Array that needs to be updated
                        const index = allTodo.findIndex((eachTodo) => {
                            return eachTodo.name === data.name
                        });
                        // go to the index of the array and then update the required key... in this case key was name
                        allTodo[index].name = inputVal;
                        updateTask([...allTodo]);
                    } else {
                        setEdit(true)
                    }
                }}>
                {edit ? 'done' : 'edit'}
            </button>
            <button
                onClick={() => {
                    const index = allTodo.findIndex((eachTodo) => {
                        return eachTodo.name === data.name
                    });
                    allTodo[index].isComplete = (data.isComplete === true) ? false : true;
                    
                    updateTask([...allTodo]);
                }}
            >Is Complete</button>
           { /* <button 
            onClick={() => {
                const index = allTodo.filter(( eachTodo) => {
                    return eachTodo.name === data.name
                });
                console.log(index)
            }}
            >Delete</button> */} 
        </li>
    )
}