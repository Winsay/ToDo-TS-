import React, { useEffect, useRef, useState } from 'react';
import style from './todo.module.scss';

interface IToDoFormProps {
  addNewTask: (text: string) => void;
}

const TodoForm: React.FC<IToDoFormProps> = (props) => {
  const [text, setNewText] = useState('');

  const changeText: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewText(e.target.value);
  };

  const submit = () => {
    props.addNewTask(text);
    setNewText('');
  };

  const handleAddToDo: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      submit();
    }
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className={style.formWrapp}>
      <input
        ref={inputRef}
        maxLength={100}
        onChange={changeText}
        onKeyDown={(e) => handleAddToDo(e)}
        placeholder="Enter text..."
        className={style.formInput}
        value={text}
        type="text"
      />
      <button onClick={submit} className={style.formSumbit}>
        Добавить Задачу
      </button>
    </div>
  );
};

export default TodoForm;
