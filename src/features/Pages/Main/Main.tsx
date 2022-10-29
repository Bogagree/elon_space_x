import React from 'react';
import style from './Main.module.scss'
import {SiteButton} from '../../../common/Components/SiteButton/SiteButton';
import {Advantages} from './Advantages/Advantages';
import {Header} from '../Header/Header';

export const Main = () => {
    return (
        <section className={style.main}>
            <Header/>

            <div className={style.container}>

                <div className={style.textBlock}>
                    <h1><span>Путешествие</span><br/>
                        <span className={style.subtitle}>на красную планету</span>
                    </h1>
                    <SiteButton children={'Начать путешествие'}/>
                </div>

                <Advantages/>

            </div>

        </section>
    );
};