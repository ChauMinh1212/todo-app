import logo from './logo.svg';
import './App.css';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';
import { useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState([]);

  function handleFormSubmitAdd(input){
    if(!input.title || /^\s*$/.test(input.title)) return;
    const newToDoList = [...toDoList];
    newToDoList.push(input);
    setToDoList(newToDoList);
  }

  function hadleFormSubmitUpdate(todo){
    if(!todo.title || /^\s*$/.test(todo.title)) return;
    const index = toDoList.findIndex(x => x.id === todo.id);
    const newToDoList = [...toDoList];
    newToDoList[index].title = todo.title;
    setToDoList(newToDoList);
  }

  function handleToDoDelete(todo){
    const index = toDoList.findIndex(x => x.id === todo.id);
    if(index < 0) return;
    const newToDoList = [...toDoList];
    newToDoList.splice(index, 1);
    setToDoList(newToDoList);
  }

  return (
    <div className="App">
      <ToDoForm onSubmit={handleFormSubmitAdd}/>
      {toDoList != 0 ? <h3 className="todos">{toDoList.length} To Do</h3> : null}
      <ToDoList todos={toDoList} onToDoDeleteClick={handleToDoDelete} onToDoUpdateClick={hadleFormSubmitUpdate}/>
    </div>
  );
}

export default App;
