import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import TodoForm from './components/todoForm/TodoForm';
import TodoItems from './components/todoItems/TodoItems';

import { IToDo } from './modules/toDoInterface';

const App: React.FC = () => {
  const IS_OPENED = 'opened';
  const IS_CLOSED = 'closed';

  const [toDos, setToDos] = useState<IToDo[]>([]);

  const addNewTask = (text: string): void => {
    if (text.length > 0) {
      const newTask = {
        id: toDos.length + 1,
        text,
        status: IS_OPENED,
      };
      setToDos((prev) => [newTask, ...prev]);
    }
  };

  const openCloseToggle = (status: string, id: number): void => {
    setToDos((prev) => {
      const newArr = prev.map((i) =>
        i.id === id ? { ...i, status: status === IS_OPENED ? IS_CLOSED : IS_OPENED } : i,
      );
      console.log(newArr);
      const sortedArr = newArr.sort((a, b) => a.id - b.id);
      return sortedArr.sort((a, b) => (b.status === IS_CLOSED ? -1 : 0));
    });
  };

  const changeText = (id: number, text: string): void => {
    setToDos((prev) => prev.map((i) => (i.id === id ? { ...i, text: text } : i)));
  };

  const taskDelete = (id: number): void => {
    setToDos((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="App">
      <Header />
      <TodoForm addNewTask={addNewTask} />
      <TodoItems
        openCloseToggle={openCloseToggle}
        changeText={changeText}
        taskDelete={taskDelete}
        toDos={toDos}
      />
    </div>
  );
};

export default App;
