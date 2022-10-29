import React, {ChangeEvent, useState} from 'react';
import style from './ElonMaskCMS.module.scss'
import {useDispatch} from 'react-redux';

export const ElonMaskCms = () => {

    const dispatch = useDispatch()

    const [marketPosition, setMarketPosition] = useState('')
    const [guaranty, setGuaranty] = useState('')
    const [year, setYear] = useState('')
    const [travellingDuration, setTravellingDuration] = useState('')

    const marketPositionHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setMarketPosition(e.currentTarget.value)
    }
    const guarantyHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setGuaranty(e.currentTarget.value)
    }
    const yearHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setYear(e.currentTarget.value)
    }
    const travellingDurationHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTravellingDuration(e.currentTarget.value)
    }


    const updateData = () => {
        // dispatch()
        console.log(marketPosition, guaranty, year, travellingDuration)
    };

    return (
        <section className={style.cms}>

            <div className={style.container}>
                <input type="text" placeholder="Мы" value={marketPosition} onChange={marketPositionHandler}/>
                <input type="text" placeholder="Гарантируем" value={guaranty} onChange={guarantyHandler}/>
                <input type="text" placeholder="Подарок" value={year} onChange={yearHandler}/>
                <input type="text" placeholder="Путешествие" value={travellingDuration} onChange={travellingDurationHandler}/>

                <div style={{color: 'white', margin: '10px'}}>{marketPosition}</div>
                <div style={{color: 'white', margin: '10px'}}>{guaranty}</div>
                <div style={{color: 'white', margin: '10px'}}>{year}</div>
                <div style={{color: 'white', margin: '10px'}}>{travellingDuration}</div>

                <button onClick={updateData}>update data</button>

            </div>


        </section>
    );
};