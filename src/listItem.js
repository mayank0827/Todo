import React, { useState } from "react";

export default ({ data, todoList }) => {

    const [edit, setEdit] = useState(false);
    const [todo, setTodo] = useState(data);
    const [isComplete, setIsComplete] = useState(false)


    return (
        <li>
            {edit ?
                <input value={todo} onChange={(e) => setTodo(e.target.value)} /> :
                <span style={{ color: isComplete ? 'green' : 'red' }}>{todo}</span>
            }
            <button
                onClick={() => {
                    if (edit === true) {
                        setEdit(false)
                    } else {
                        setEdit(true)
                    }
                }}> {edit ? 'done' : 'edit'}

            </button>
            <button
                onClick={() => {
                    if (isComplete === true) {
                        setIsComplete(false)
                    } else {
                        setIsComplete(true)
                    }
                }}
            >is complete</button>
        </li>
    )
}