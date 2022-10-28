import React from 'react';
import style from './AdvantageBlock.module.scss'

type AdvantageBlockPropsType = {
    upText: string
    middleText: string
    year?: string
    downText: string
}

export const AdvantageBlock: React.FC<AdvantageBlockPropsType> = (

    {upText, middleText, year, downText}) => {

    return (

        <div className={style.advantageBlock}>

            <p className={style.upText}>{upText}</p>

            <div className={style.year}>
                <p className={style.middleText}>{middleText}</p>
                <p className={style.middleTextYear}>{year}</p>
            </div>

            <p className={style.downText}>{downText}</p>

        </div>
    );
};