import { NavLink } from "react-router-dom";
import styles from './Login.module.css'

export const Login = () => {

    return (
        <div id='login-form' className={styles['login-page']}>
            <div className={styles['form-box']}>
                <div className={styles['button-box']}>
                    <button type='button'  className={styles['toggle-btn']}><NavLink to='/auth/login'>Login </NavLink> </button>
                    <button type='button'  className={styles['toggle-btn']}><NavLink to='/auth/register'>Register </NavLink> </button>
                </div>
                <form id='login' className={styles['input-group-login']}>
                    <input type='text' className={styles['input-field']} placeholder='Email'/>
                    <input type='password' className={styles['input-field']} placeholder='Enter Password'/>
                   
                    <button type='submit' className={styles['submit-btn']}>Log in</button>
                </form>
            </div>
        </div>
    )

}