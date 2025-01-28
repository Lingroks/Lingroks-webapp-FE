import React from 'react';
import style from './loader.module.scss';

const BoxLoader: React.FC = () => {
  return (
    <div className={style.loader__container}>
      <div className={style.box} />
      <div className={style.box} />
      <div className={style.box} />
    </div>
  );
};

export default BoxLoader;
