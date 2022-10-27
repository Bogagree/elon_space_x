import React from 'react';
import style from './ElonMaskCMS.module.scss'

export const ElonMaskCms = () => {

    return (
        <div className={style.cms}>
            <input type="text" placeholder="Мы"/>
            <input type="text" placeholder="Гарантируем"/>
            <input type="text" placeholder="Подарок"/>
            <input type="text" placeholder="Путешествие"/>
        </div>
    );
};