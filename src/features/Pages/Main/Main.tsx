import React from 'react';
import style from './Main.module.scss'
import {SiteButton} from '../../../common/Components/SiteButton/SiteButton';

export const Main = () => {
    return (
        <section className={style.main}>
            <h1 style={{color: 'white'}}>Путешествие на красную планету</h1>
            <SiteButton>Начать путешествие</SiteButton>
        </section>
    );
};