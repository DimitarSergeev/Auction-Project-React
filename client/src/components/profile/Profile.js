import styles from './Profile.module.css'

import { useEffect, useState } from 'react'

import * as authService from '../../services/authService'
import { ProfileItem } from './ProfileItem'
export const Profile = ({ userInfo }) => {
    const [user, setUser] = useState({})

    useEffect(() => {
        authService.getOneUser(userInfo.userId, userInfo.token)
            .then(result => {
                setUser(result)
            })
            .catch(error => console.log(error))
    }, [userInfo.userId, userInfo.token])
    return (
        <>
            <div className={styles.userInfo}>
                <h1>UserName : {user.userName}</h1>
                <h1>Email : {user.email}</h1>
                <h2>Owns: {user.Mycollection ? user.Mycollection.length : 0} offers</h2>
            </div>
            <h3 className={styles.colecction}>Collection</h3>
            <h3 className={styles.colecction}>*********</h3>

            <div className={styles.cardHolder}>
                {user.Mycollection
                    ? user.Mycollection.map(x => <ProfileItem offer={x} key={x._id}/>)
                    : <h2>Noting in collection</h2>
                }

            </div>
        </>
    )

}