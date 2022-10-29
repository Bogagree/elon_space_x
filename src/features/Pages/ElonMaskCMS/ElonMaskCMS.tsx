import React, {ChangeEvent, useState} from 'react';
import style from './ElonMaskCMS.module.scss'
import {useAppDispatch, useAppSelector} from '../../../app/store';
import {CmsDataType, setCmsData} from './cms-reducer';

export const ElonMaskCms = () => {

    const dispatch = useAppDispatch()
    const data = useAppSelector(state => state.cms)

    const [marketPosition, setMarketPosition] = useState(data.marketPosition)
    const [guaranty, setGuaranty] = useState(data.guaranty)
    const [year, setYear] = useState(data.year)
    const [travellingDuration, setTravellingDuration] = useState(data.travellingDuration)

    const marketPositionHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMarketPosition(e.currentTarget.value)
    }
    const guarantyHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setGuaranty(e.currentTarget.value)
    }
    const yearHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setYear(e.currentTarget.value)
    }
    const travellingDurationHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTravellingDuration(e.currentTarget.value)
    }

    const updateData = () => {
        const newData: CmsDataType = {marketPosition, guaranty, travellingDuration, year}
        dispatch(setCmsData(newData))
        console.log(newData)
    };

    return (
        <section className={style.cms}>

            <div className={style.container}>
                <input type="text" placeholder="Мы" value={marketPosition} onChange={marketPositionHandler}/>
                <input type="text" placeholder="Гарантируем" value={guaranty} onChange={guarantyHandler}/>
                <input type="text" placeholder="Подарок" value={year} onChange={yearHandler}/>
                <input type="text" placeholder="Путешествие" value={travellingDuration}
                       onChange={travellingDurationHandler}/>

                <div style={{color: 'white', margin: '10px'}}>{marketPosition}</div>
                <div style={{color: 'white', margin: '10px'}}>{guaranty}</div>
                <div style={{color: 'white', margin: '10px'}}>{year}</div>
                <div style={{color: 'white', margin: '10px'}}>{travellingDuration}</div>

                <button onClick={updateData}>update data</button>

            </div>


        </section>
    );
};