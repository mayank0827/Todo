import ListItem from "./listItem";
import './App.css'
import useTodo from "./Hooks/UseTodo";

function App() {
  const{handleClickAdd , inputVal, setInputVal , todos} = useTodo()

  return (
    <div className="container">
      <h1>ToDo's</h1>
      <div>
        <input value={inputVal} onChange={(event) => setInputVal(event.target.value)} />
        <button
          onClick={handleClickAdd}>Add</button>

        <ul className="list">
          {todos.map((each, index) => {
            return (
              <ListItem todoList={todos} key={index} data={each}/>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

 export default App;

 