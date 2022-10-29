import React from 'react';
import {AdvantageBlock} from '../../../../common/Components/AdvantageBlock/AdvantageBlock';
import style from './Advantages.module.scss'
import {CmsDataType} from '../../ElonMaskCMS/cms-reducer';


export const Advantages: React.FC<CmsDataType> = (props) => {

    console.log(props)

    return (
        <div className={style.advantages}>
            <AdvantageBlock upText={'мы'} middleText={props.marketPosition} downText={'на рынке'} />
            <AdvantageBlock upText={'гарантируем'} middleText={props.guaranty} downText={'безопасность'} />
            <AdvantageBlock upText={'календарик за '} middleText={props.year} downText={'в подарок'} year={'г.'}/>
            <AdvantageBlock upText={'путешествие'} middleText={props.travellingDuration} downText={'дней'} />
        </div>
    );
};