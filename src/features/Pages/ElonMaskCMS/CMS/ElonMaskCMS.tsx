import React, {ChangeEvent, useState} from 'react';
import style from './ElonMaskCMS.module.scss'
import {AppRootStateType, useAppDispatch, useAppSelector} from '../../../../app/store';
import {CmsDataType, setCmsData} from '../cms-reducer';
import {Login} from '../../../Auth/Login/Login';
import {useSelector} from 'react-redux';
import {Button, Container, Grid, IconButton, InputAdornment, Paper, Stack, TextField} from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import {setIsLogged} from '../../../Auth/auth-reducer';

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
    };

    const logOut = () => {
        dispatch(setIsLogged(false))
    }

    return (
        <section className={style.cms}>

                <Paper style={{padding: '10px'}}>
                    <Container fixed>
                    <Stack
                        direction="row"
                        justifyContent={'center'}
                        alignItems={'center'}
                        spacing={2}
                        style={{marginBottom: '25px'}}
                    >
                        <h2>Elon Mask CMS</h2>
                        {isLogged && <IconButton onClick={logOut}><LogoutIcon/></IconButton>}
                    </Stack>

                    {isLogged
                        ?
                        <Grid container
                              justifyContent={'center'}
                              spacing={3}
                              >

                            <Grid container
                                  spacing={3}
                                  justifyContent={'center'}

                            >
                                <Grid item xs={6}>

                                    <TextField id="outlined-basic"
                                               label="Мы на рынке"
                                               variant="outlined"
                                               type="number"
                                               defaultValue="Мы"
                                               fullWidth
                                               value={marketPosition}
                                               size="small"
                                               onChange={marketPositionHandler}
                                    />

                                </Grid>
                                <Grid item xs={6}>
                                    <TextField id="outlined-basic"
                                               label="Гарантии безопасности"
                                               variant="outlined"
                                               type="number"
                                               size="small"
                                               fullWidth
                                               InputProps={{
                                                   endAdornment: <InputAdornment position="end">%</InputAdornment>,
                                               }}
                                               value={guaranty}
                                               onChange={guarantyHandler}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField id="outlined-basic"
                                               label="За какой год дарим календарик"
                                               variant="outlined"
                                               type="number"

                                               defaultValue="2001"
                                               size="small"
                                               fullWidth
                                               InputProps={{
                                                   startAdornment: <InputAdornment position="start">за</InputAdornment>,
                                                   endAdornment: <InputAdornment position="end">год</InputAdornment>,
                                               }}
                                               value={year} onChange={yearHandler}
                                    />
                                </Grid>
                                <Grid item  xs={6}>
                                    <TextField id="outlined-basic"
                                               label="Длительность полета"
                                               variant="outlined"
                                               type="text"
                                               size="small"
                                               fullWidth
                                               InputProps={{
                                                   endAdornment: <InputAdornment position="end">дней</InputAdornment>,
                                               }}
                                               value={travellingDuration}
                                               onChange={travellingDurationHandler}
                                    />
                                </Grid>

                            </Grid>

                            <Grid item>
                                <Button variant="outlined" onClick={updateData}>update data</Button>
                            </Grid>

                        </Grid>

                        : <Login/>
                    }

            </Container>
                </Paper>
        </section>
    );
};