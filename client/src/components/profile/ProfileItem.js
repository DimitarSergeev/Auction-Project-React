import styles from './Profile.module.css'


export const ProfileItem = ({userInfo}) => {

    return (
        <div className={styles.card}>
            <img src='https://imgs.search.brave.com/3nfyyscZGNFVSIwy-oXwBCz78LzSfbRwrstMQD-nZc4/rs:fit:355:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/ekVHSF9tbDRBWlJJ/elcxenlIaURRSGFK/NCZwaWQ9QXBp' alt="nqma" />
            <div className={styles['card-text']}>
                <h2>noja na ahil</h2>
                <p>Nqma koi znae kakwo da se kaje, objo vzeto baq e dobro  tegavfa rabota brat . Dano pak da vzema ot tezi </p>
                <h2>Year: 1899</h2>
            </div>
            <div className={styles['card-stats']}>

                <div className={styles.stat}>
                    <div className={styles.value}>bought for 350$</div>
                </div>
            </div>
        </div>
    )

}