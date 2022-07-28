import { NavLink } from "react-router-dom";
import styles from './Login.module.css'

export const Login = () => {

    return (
        <div id='login-form' className={styles['login-page']}>
            <div className={styles['form-box']}>
                <div className={styles['button-box']}>
                    <NavLink className={({isActive})=> isActive ? styles['active-btn'] : styles['toggle-btn']} to='/auth/login'>Login </NavLink>
                    <NavLink className={({isActive})=> isActive ? styles['active-btn'] : styles['toggle-btn']} to='/auth/register'>Register </NavLink>
                </div>
                <form className={styles['input-group-login']}>
                    <input type='text' className={styles['input-field']} placeholder='Email' name='email'/>
                    <input type='password' className={styles['input-field']} placeholder='Enter Password' name='password'/>

                    <button type='submit' className={styles['submit-btn']}>Log in</button>
                </form>
            </div>
        </div>
    )

}