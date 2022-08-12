import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

import styles from './Register.module.css'

import * as authService from '../../services/authService'

export const Register = () => {
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        email: '',
        userName: '',
        password: '',
        repeatPassword: '',
        needAge: false
    })

    const navigate = useNavigate()

    const changeHandler = (e) => {
        setUser(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };
    const checkedHandler = (e) => {
        setUser(state => ({
            ...state,
            [e.target.name]: !state[e.target.name] 
        }));
    }
    const submitHandler = (e) => {
        e.preventDefault()
        const allGood = Object.values(errors).some(x => x !== true)
        if (allGood) {
            authService.register(user)
                .then(navigate('/auth/login'))
        } 
    }
    console.log(user.needAge);
    const validate = (e) => {
        switch (e.target.name) {
            case 'email':
                setErrors(state => ({
                    ...state,
                    [e.target.name]: !user.email.match(/^[a-zA-Z0-9]{4,}@[a-zA-Z]+.[a-zA-Z]{2,}/)
                }))
                break
            case 'userName':
                setErrors(state => ({
                    ...state,
                    'userName': user.userName.length < 4
                }))
                break
            case 'password':
                setErrors(state => ({
                    ...state,
                    'password': user.password.length < 6
                }))
                break
            case 'repeatPassword':
                setErrors(state => ({
                    ...state,
                    'repeatPassword': user.repeatPassword.length < 6
                }))
                break
            case 'needAge':
                setErrors(state => ({
                    ...state,
                    'needAge': user.needAge
                }))
                
                break
        }
    }

    return (
        <div onSubmit={submitHandler} className={styles['register-page']}>
            <div className={styles['form-box']}>
                <div className={styles['button-box']}>
                    <NavLink className={({ isActive }) => isActive ? styles['active-btn'] : styles['toggle-btn']} to='/auth/login'>Login </NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles['active-btn'] : styles['toggle-btn']} to='/auth/register'>Register </NavLink>
                </div>
                <form id='login' className={styles['input-group-register']}>

                    <div >
                        {errors.email &&
                            <label htmlFor="email" className={styles.error}>Email need lock like @abv.bg</label>
                        }
                        <input type='text' className={styles['input-field']} placeholder='Email' name='email' value={user.email} onChange={changeHandler} onBlur={(e) => validate(e)} />
                    </div>
                    <div>
                        {errors.userName &&
                            <label htmlFor="userName" className={styles.error}>Please fill 4 or more symbols ! </label>
                        }
                        <input type='text' className={styles['input-field']} placeholder='Username' name='userName' value={user.userName} onChange={changeHandler} onBlur={(e) => validate(e)} />
                    </div>
                    <div>
                        {errors.password &&
                            <label htmlFor="password" className={styles.error}>Please fill 6 or more symbols ! </label>
                        }
                        <input type='password' className={styles['input-field']} placeholder='Enter Password' name='password' value={user.password} onChange={changeHandler} onBlur={(e) => validate(e)} />
                    </div>
                    <div>
                        {errors.repeatPassword &&
                            <label htmlFor="repeatPassword" className={styles.error}>Please fill 6 or more symbols ! </label>
                        }
                        <input type='password' className={styles['input-field']} placeholder='Repeat Password' name='repeatPassword' value={user.repeatPassword} onChange={changeHandler} onBlur={(e) => validate(e)} />
                    </div>


                    <div className={styles.checkbox}>
                        <input type="checkbox" id='18' name='needAge' checked={user.needAge} onChange={checkedHandler} onBlur={(e) => validate(e)} />
                        <label htmlFor="18" >I am 18 years old</label>
                    </div>

                    <button type='submit' className={styles['submit-btn']}>Register</button>

                </form>
            </div>
        </div>)
}