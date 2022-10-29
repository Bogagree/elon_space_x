import React from 'react';
import style from './Main.module.scss'
import {SiteButton} from '../../../common/Components/SiteButton/SiteButton';
import {Advantages} from './Advantages/Advantages';
import {Header} from '../Header/Header';
import {useAppSelector} from '../../../app/store';

export const Main = () => {

    const data = useAppSelector(state => state.cms)

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

                <Advantages guaranty={data.guaranty}
                            year={data.year}
                            marketPosition={data.marketPosition}
                            travellingDuration={data.travellingDuration}/>

            </div>

        </section>
    );
};