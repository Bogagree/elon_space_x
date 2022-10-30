import React, {useState} from 'react';
import {useFormik} from "formik";
import {useAppDispatch} from '../../../app/store';
import {setIsLogged} from '../auth-reducer';
import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField} from '@mui/material';

type RegistrationErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    const dispatch = useAppDispatch()

    const [formErr, setFormErr] = useState('')

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: (values) => {

            const errors: RegistrationErrorType = {}

            if (!values.email) {
                errors.email = 'Email is required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }

            if (!values.password) {
                errors.password = 'Password is required'
            } else if (values.password.length <= 2) {
                errors.password = 'Password should be more then 2 symbols'
            }
            return errors
        },
        onSubmit: values => {

            if( values.email === 'elon@roskosmos.gov' && values.password == 'Polkovnik_Mask') {
                dispatch(setIsLogged(true))
            } else {
                setFormErr('Elon you typed wrong email & password! Tap hint above!')
            }
            formik.resetForm()
        },
    });

    return (
            <Grid container justifyContent={'center'}>
                <Grid item justifyContent={'center'}>
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl>
                            <FormLabel>
                                <p>Elon if you forgot password, just tap this
                                    <a href={'https://github.com/Bogagree/elon_space_x'}
                                       target={'_blank'}> hint
                                    </a><br/>
                                    (RUS: Илон, если забыл логин/пароль кликай по ссылке)
                                </p>
                            </FormLabel>
                            <FormGroup>
                                <TextField label="Email"
                                           margin="normal"
                                           {...formik.getFieldProps('email')}
                                />
                                {formik.touched.email && formik.errors.email &&
                                    <div style={{color: "red"}}>{formik.errors.email}</div>}

                                <TextField type="password"
                                           label="Password"
                                           margin="normal"
                                           {...formik.getFieldProps('password')}
                                />

                                {formik.touched.password && formik.errors.password &&
                                    <div style={{color: "red"}}>{formik.errors.password}</div>}

                                {formErr && <div style={{color: "red"}}>{formErr}</div>}

                                <FormControlLabel
                                    label={'Remember me'}
                                    control={<Checkbox
                                        checked={formik.values.rememberMe}
                                        {...formik.getFieldProps('rememberMe')}
                                    />}/>
                                <Button type={'submit'} variant={'contained'} color={'primary'}>
                                    Login
                                </Button>
                            </FormGroup>
                        </FormControl>
                    </form>
                </Grid>
            </Grid>
    )
}