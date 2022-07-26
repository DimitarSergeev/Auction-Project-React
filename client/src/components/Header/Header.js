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
                {userInfo.userName &&
                    <p className={styles.userName}>Wellcome, {userInfo.userName}</p>
                }
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
                {userInfo.token
                    ? <>
                        <li className={styles.list}>
                            <NavLink to={`/auth/profile/${userInfo.userId}`}
                                className={({ isActive }) => (isActive ? styles.active : styles.text)}
                            >
                                Profile
                            </NavLink>
                        </li>
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