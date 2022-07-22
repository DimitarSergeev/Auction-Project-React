import styles from './Header.module.css'

import { NavLink } from 'react-router-dom'

export const Header = () => {

    return (
        <div className={styles.navigation}>
            
                <NavLink to='/'
                    
                >
                    <img src="/images/logo.jpg" alt="" className={styles.logo} />
                    
                </NavLink>
            
            <ul>
                <li className={styles.list}>
                    <NavLink to='/'
                        className={({ isActive }) => (isActive ? styles.active : styles.text)}
                    >
                        Home
                    </NavLink>
                </li>
                <li className={styles.list}>
                    <NavLink to='/auction'
                        className={({ isActive }) => (isActive ? styles.active : styles.text)}
                    >
                        Auction
                    </NavLink>
                </li>
                <li className={styles.list}>
                    <NavLink to='/about'
                        className={({ isActive }) => (isActive ? styles.active : styles.text)}
                    >
                        About
                    </NavLink>
                </li>
                <li className={styles.list}>
                    <NavLink to='/auth/login'
                        className={({ isActive }) => (isActive ? styles.active : styles.text)}
                    >
                        Login
                    </NavLink>
                </li>
          
            </ul>
        </div>
    )

}