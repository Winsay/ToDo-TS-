import React, { useState } from 'react';
import style from './toDoItem.module.scss';
import deleteIco from '../../../assets/img/delete.svg';
import passiveChange from '../../../assets/img/change.svg';
import activeChange from '../../../assets/img/active_change.svg';
import lockIco from '../../../assets/img/lock.svg';
import unlockIco from '../../../assets/img/unlock.svg';

import { IToDoItemsProps } from '../TodoItems';

interface IToDoItemProps extends IToDoItemsProps {
  key: number;
  text: string;
  id: number;
  status: string;
}

const TodoItem: React.FC<Omit<IToDoItemProps, 'toDos'>> = (props) => {
  const onTaskDelete = () => {
    props.taskDelete(props.id);
  };

  const onChangeText = () => {
    if (textChange.length > 0) {
      props.changeText(props.id, textChange);
      setIsChanged(!isChanged);
    } else {
      alert('Минимальная длина 1 символ');
    }
  };
  //  остановился тут
  const onOpenCloseToggle = () => {
    props.openCloseToggle(props.status, props.id);
    setIsChanged(false);
  };

  const toggleChange = () => {
    setIsChanged((prev) => !prev);
    setTextChange(props.text);
  };
  const [textChange, setTextChange] = useState(props.text);
  const [isChanged, setIsChanged] = useState(false);
  return (
    <div className={`${style.toDoItem} ${props.status === 'closed' ? style.toDoItem__closed : ''}`}>
      {isChanged ? (
        <div className={style.textInput}>
          <input
            autoFocus={true}
            onChange={(e) => setTextChange(e.target.value)}
            type="text"
            value={textChange}
          />
          <button onClick={onChangeText}>change</button>
        </div>
      ) : (
        <p className={style.toDoText}>{props.text}</p>
      )}
      <div className={style.actionWithText}>
        <button data-clue="Удалить таску" onClick={onTaskDelete} className={style.delete}>
          <img src={deleteIco} alt="delete" />
        </button>
        <button
          disabled={props.status === 'closed'}
          data-clue="Изменить текст"
          onClick={toggleChange}
          className={style.changeValue}>
          <img src={isChanged ? activeChange : passiveChange} alt="changeValue" />
        </button>
        <button data-clue="закрыта/отркыта" onClick={onOpenCloseToggle} className={style.toggle}>
          <img src={props.status === 'closed' ? lockIco : unlockIco} alt="toggle" />
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
