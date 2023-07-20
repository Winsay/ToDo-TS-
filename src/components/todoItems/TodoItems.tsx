import React from 'react';
import style from './toDoItems.module.scss';
import TodoItem from './todoItem/TodoItem';
import sadFace from '../../assets/img/sadFace.svg';
import { IToDo } from '../../modules/toDoInterface';

export interface IToDoItemsProps {
  openCloseToggle: (status: string, id: number) => void;
  changeText: (id: number, text: string) => void;
  taskDelete: (id: number) => void;
  toDos: IToDo[];
}

const TodoItems: React.FC<IToDoItemsProps> = (props) => {
  const toDos = props.toDos.map((item, index) => (
    <TodoItem
      openCloseToggle={props.openCloseToggle}
      changeText={props.changeText}
      taskDelete={props.taskDelete}
      key={item.id}
      text={item.text}
      id={item.id}
      status={item.status}
    />
  ));

  return (
    <div className={style.toDoItems}>
      {toDos.length > 0 ? (
        toDos
      ) : (
        <>
          <img className={style.sadFace} src={sadFace} alt="EmptyToDos" />
          <h2 className={style.emptyArr}>Список пуст...</h2>
        </>
      )}
    </div>
  );
};

export default TodoItems;
