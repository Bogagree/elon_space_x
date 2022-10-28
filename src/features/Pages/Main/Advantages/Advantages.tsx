import React from 'react';
import {AdvantageBlock} from '../../../../common/Components/AdvantageBlock/AdvantageBlock';
import style from './Advantages.module.scss'

export const Advantages = () => {
    return (
        <div className={style.advantages}>
            <AdvantageBlock upText={'мы'} middleText={'1'} downText={'на рынке'} />
            <AdvantageBlock upText={'гарантируем'} middleText={'50%'} downText={'безопасность'} />
            <AdvantageBlock upText={'календарик за '} middleText={'2001'} downText={'в подарок'} year={'г.'}/>
            <AdvantageBlock upText={'путешествие'} middleText={'597'} downText={'дней'} />
        </div>
    );
};