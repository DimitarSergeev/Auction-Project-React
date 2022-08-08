import styles from './Home.module.css'

import { Link } from 'react-router-dom'
export const Home = () => {

    return (
        <div className={styles.box}>
            <h2 className={styles.title}>Last Deals :</h2>
            <div className={styles.card}>
                <img src='https://imgs.search.brave.com/7pQSGtpulnIN2cryMAqyVXxBy_6M83dSdAy2Szk5MvY/rs:fit:777:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/a2xXUWljb2s4NXBU/MU41NmIwQzdnSGFF/aCZwaWQ9QXBp' alt="nqma" />
                <div className={styles['card-text']}>
                    <h2>Noja na Ahil</h2>
                </div>
                <div className={styles['card-stats']}>

                    <div className={styles.stat}>
                        <div className={styles.value}>24:00</div>
                    </div>
                    <div className={styles.detailBox}>
                        <Link to='/auth/login' className={styles.details}>See More</Link>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <img src='https://imgs.search.brave.com/7pQSGtpulnIN2cryMAqyVXxBy_6M83dSdAy2Szk5MvY/rs:fit:777:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/a2xXUWljb2s4NXBU/MU41NmIwQzdnSGFF/aCZwaWQ9QXBp' alt="nqma" />
                <div className={styles['card-text']}>
                    <h2>Noja na Ahil</h2>
                </div>
                <div className={styles['card-stats']}>

                    <div className={styles.stat}>
                        <div className={styles.value}>24:00</div>
                    </div>
                    <div className={styles.detailBox}>
                        <Link to='/auth/login' className={styles.details}>See More</Link>
                    </div>
                </div>
            </div>
            <div className={styles.card}>
                <img src='https://imgs.search.brave.com/7pQSGtpulnIN2cryMAqyVXxBy_6M83dSdAy2Szk5MvY/rs:fit:777:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5v/a2xXUWljb2s4NXBU/MU41NmIwQzdnSGFF/aCZwaWQ9QXBp' alt="nqma" />
                <div className={styles['card-text']}>
                    <h2>Noja na Ahil</h2>
                </div>
                <div className={styles['card-stats']}>

                    <div className={styles.stat}>
                        <div className={styles.value}>24:00</div>
                    </div>
                    <div className={styles.detailBox}>
                        <Link to='/auth/login' className={styles.details}>See More</Link>
                    </div>
                </div>
            </div>
            <div className={styles['btn-box']}>
                <Link className={styles.viewMore} to='/' >Go to Auction</Link>

            </div>

        </div>
    )

}
