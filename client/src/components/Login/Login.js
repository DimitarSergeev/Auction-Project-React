import { useState } from 'react'
import { NavLink } from "react-router-dom";

import styles from './Login.module.css'
import * as authService from '../../services/authService'


export const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    })

    const submitHandler = (e) => {
        e.preventDefault()
        authService.login(user)
        .then(result => console.log(result))
    }

    const changeHandler = (e) => {
        setUser(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div id='login-form' className={styles['login-page']}>
            <div className={styles['form-box']}>
                <div className={styles['button-box']}>
                    <NavLink className={({isActive})=> isActive ? styles['active-btn'] : styles['toggle-btn']} to='/auth/login'>Login </NavLink>
                    <NavLink className={({isActive})=> isActive ? styles['active-btn'] : styles['toggle-btn']} to='/auth/register'>Register </NavLink>
                </div>
                <form onSubmit={submitHandler} className={styles['input-group-login']}>
                    <input type='text' className={styles['input-field']} placeholder='Email' name='email' onChange={changeHandler}/>
                    <input type='password' className={styles['input-field']} placeholder='Enter Password' name='password' onChange={changeHandler}/>

                    <button type='submit' className={styles['submit-btn']}>Log in</button>
                </form>
            </div>
        </div>
    )

}