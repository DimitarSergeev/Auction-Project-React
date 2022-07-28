import { NavLink } from 'react-router-dom'

import styles from './Register.module.css'

export const Register = () => {

    return (
        <div id='login-form' className={styles['register-page']}>
            <div className={styles['form-box']}>
                <div className={styles['button-box']}>
                    <NavLink className={({ isActive }) => isActive ? styles['active-btn'] : styles['toggle-btn']} to='/auth/login'>Login </NavLink>
                    <NavLink className={({ isActive }) => isActive ? styles['active-btn'] : styles['toggle-btn']} to='/auth/register'>Register </NavLink>
                </div>
                <form id='login' className={styles['input-group-register']}>
                    <input type='text' className={styles['input-field']} placeholder='Email' name='email'/>
                    <input type='text' className={styles['input-field']} placeholder='Username' name='username'/>
                    <input type='password' className={styles['input-field']} placeholder='Enter Password' name='password'/>
                    <input type='password' className={styles['input-field']} placeholder='Repeat Password' name='repeatPass'/>
                       
                        <div className={styles.checkbox}>
                            <input type="checkbox" id='18' name='needAge' />
                            <label htmlFor="18" >I am 18 years old</label>
                        </div>
 
                    <button type='submit' className={styles['submit-btn']}>Register</button>
                </form>
            </div>
        </div>
    )

}