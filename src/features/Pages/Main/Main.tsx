import React from 'react';
import style from './Main.module.scss'
import {SiteButton} from '../../../common/Components/SiteButton/SiteButton';
import {Advantages} from './Advantages/Advantages';

export const Main = () => {
    return (
        <section className={style.main}>

            <div className={style.container}>

                <div className={style.textBlock}>
                    <h1><span>Путешествие</span><br/>
                        <span className={style.subtitle}>на красную планету</span>
                    </h1>
                    <SiteButton>Начать путешествие</SiteButton>
                </div>

                <Advantages/>

            </div>

        </section>
    );
};