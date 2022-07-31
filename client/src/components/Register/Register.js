import { useState } from 'react'
import { NavLink , useNavigate} from 'react-router-dom'

import styles from './Register.module.css'

import * as authService from '../../services/authService'

export const Register = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email: '',
        userName: '',
        password: '',
        repeatPassword: '',
        needAge: ''
    })

    const changeHandler = (e) => {
        setUser(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };
    const checkedHandler = (e)=>{
        setUser(state => ({
            ...state,
            [e.target.name]: !e.target.value
        }));
    }

    const submitHandler = (e) => {
        e.preventDefault()
        authService.register(user)
        .then(navigate('/auth/login'))
    }

    return (
        <div onSubmit={submitHandler} className={styles['register-page']}>
            <div className={styles['form-box']}>
                <div className={styles['button-box']}>
                    <NavLink className={({ isActive }) => isActive ? styles['active-btn'] : styles['toggle-btn']} to='/auth/login'>Login </NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles['active-btn'] : styles['toggle-btn']} to='/auth/register'>Register </NavLink>
                </div>
                <form id='login' className={styles['input-group-register']}>
                    <input type='text' className={styles['input-field']} placeholder='Email' name='email' value={user.email} onChange={changeHandler} />
                    <input type='text' className={styles['input-field']} placeholder='Username' name='userName' value={user.userName} onChange={changeHandler} />
                    <input type='password' className={styles['input-field']} placeholder='Enter Password' name='password' value={user.password} onChange={changeHandler} />
                    <input type='password' className={styles['input-field']} placeholder='Repeat Password' name='repeatPassword' value={user.repeatPassword} onChange={changeHandler} />

                    <div className={styles.checkbox}>
                        <input type="checkbox" id='18' name='needAge' value={user.needAge} onChange={checkedHandler} />
                        <label htmlFor="18" >I am 18 years old</label>
                    </div>

                    <button type='submit' className={styles['submit-btn']}>Register</button>
                </form>
            </div>
        </div>)
}