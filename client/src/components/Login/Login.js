import { useState, useContext } from 'react'
import { NavLink, useNavigate } from "react-router-dom";

import styles from './Login.module.css'
import * as authService from '../../services/authService'
import { AuthContext } from '../../contexts/AuthContext';

export const Login = () => {
    const { userLogin } = useContext(AuthContext);
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        password: '',
    })
    const [errors, setErrors] = useState({});

    const submitHandler = (e) => {
        e.preventDefault()
        const allGood = Object.values(errors).some(x => x !== true)
        if (allGood) {
        authService.login(user)
            .then(result => {
                userLogin(result)
                navigate('/')
            })
            .catch(error => {
                setErrors(state => ({
                    ...state,
                    error: error.message
                }))
            })
        }
    }

    const validate = (e) => {
        if (e.target.name === 'email') {
            setErrors(state => ({
                ...state,
                [e.target.name]: !user.email.match(/^[a-zA-Z0-9]{4,}@[a-zA-Z]+.[a-zA-Z]{2,}/)
            }))
        } else {
            setErrors(state => ({
                ...state,
                [e.target.name]: user.password.length < 6
            }))
        }
    }

    const changeHandler = (e) => {
        setUser(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <div id='login-form' className={styles['login-page']}>
            {errors.error &&
                <div className={styles.errorBox}>
                    <p>{errors.error}</p>
                </div>
            }
            <div className={styles['form-box']}>
                <div className={styles['button-box']}>
                    <NavLink className={({ isActive }) => isActive ? styles['active-btn'] : styles['toggle-btn']} to='/auth/login'>Login </NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles['active-btn'] : styles['toggle-btn']} to='/auth/register'>Register </NavLink>
                </div>
                <form onSubmit={submitHandler} className={styles['input-group-login']}>
                    {errors.email &&
                        <label htmlFor="email" className={styles.error}>Email need lock like @abv.bg</label>
                    }
                    <input type='text' className={styles['input-field']} placeholder='Email' name='email' onChange={changeHandler} onBlur={(e) => validate(e)} />
                    {errors.password &&
                        <label htmlFor="password" className={styles.error}>Password must be at least 6 symbols ! </label>
                    }
                    <input type='password' className={styles['input-field']} placeholder='Enter Password' name='password' onChange={changeHandler} onBlur={(e) => validate(e)} />

                    <button type='submit' className={styles['submit-btn']}>Log in</button>
                </form>
            </div>
        </div>
    )

}