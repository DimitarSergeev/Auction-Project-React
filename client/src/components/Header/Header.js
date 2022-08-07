import styles from './Header.module.css'
import { useContext } from 'react'

import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'

export const Header = () => {
    const { userInfo } = useContext(AuthContext)
    return (
        <div className={styles.navigation}>

            <NavLink to='/'

            >
                <img src="/images/logo.jpg" alt="Logo" className={styles.logo} />

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
                {userInfo.token
                    ? <>
                        <li className={styles.list}>
                            <NavLink to='/offer/create' 
                                className={({ isActive }) => (isActive ? styles.active : styles.text)}
                            >
                                Offer
                            </NavLink>
                        </li>
                        <li className={styles.list}>
                            <NavLink to='/auth/logout'
                                className={({ isActive }) => (isActive ? styles.active : styles.text)}
                            >
                                Logout
                            </NavLink>
                        </li>
                    </>
                    : <>
                        <li className={styles.list}>
                            <NavLink to='/auth/login'
                                className={({ isActive }) => (isActive ? styles.active : styles.text)}
                            >
                                Login
                            </NavLink>
                        </li>

                    </>
                }


            </ul>
        </div>
    )

}