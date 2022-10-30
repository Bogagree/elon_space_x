import React, {ChangeEvent, useState} from 'react';
import style from './ElonMaskCMS.module.scss'
import {AppRootStateType, useAppDispatch, useAppSelector} from '../../../app/store';
import {CmsDataType, setCmsData} from './cms-reducer';
import {Login} from '../../Auth/Login/Login';
import {useSelector} from 'react-redux';
import {Button, Grid, Icon, TextField} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export const ElonMaskCms = () => {

    const dispatch = useAppDispatch()
    const data = useAppSelector(state => state.cms)
    const isLogged = useSelector((state: AppRootStateType) => state.auth.isLogged)


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
            <Grid container justifyContent={'center'}>
                <Grid item justifyContent={'center'}>
                    <h2>Elon Mask CMS</h2>
                </Grid>

                {isLogged
                    ?
                    <Grid container justifyContent={'center'}>
                        <Grid item justifyContent={'center'}>

                            {/*<div className={style.container}>*/}

                            <TextField id="outlined-basic"
                                       label="Market position"
                                       variant="outlined"
                                       type="text"
                                       defaultValue="Мы"
                                       value={marketPosition}
                                       onChange={marketPositionHandler}
                            />

                            <TextField id="outlined-basic"
                                       label="Гарантии безопасности"
                                       variant="outlined"
                                       type="text"
                                       defaultValue="Мы"
                                       value={guaranty}
                                       onChange={guarantyHandler}
                            />
                            <TextField id="outlined-basic"
                                       label="За какой год дарим календарик"
                                       variant="outlined"
                                       type="text"
                                       defaultValue="Мы"
                                       value={year} onChange={yearHandler}
                            />

                            <TextField id="outlined-basic"
                                       label="Длительность полета"
                                       variant="outlined"
                                       type="text"
                                       value={travellingDuration}
                                       onChange={travellingDurationHandler}
                            />

                            <Grid container justifyContent={'center'}>
                                <Grid item justifyContent={'center'}>
                                    <Button variant="outlined" onClick={updateData}>update data</Button>
                                </Grid>
                            </Grid>

                            {/*</div>*/}
                        </Grid>
                    </Grid>
                    : <Login/>
                }

            </Grid>
        </section>
    );
};