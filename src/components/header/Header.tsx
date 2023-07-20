import React from 'react';
import style from './header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <h1 className={style.todoTitle}>ToDo list</h1>
    </header>
  );
};

export default Header;
