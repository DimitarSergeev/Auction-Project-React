import styles from './Profile.module.css'


export const ProfileItem = ({offer}) => {

    return (
        <div className={styles.card} >
            <img src={offer.imageUrl} alt="nqma" />
            <div className={styles['card-text']}>
                <h2>{offer.title}</h2>
                <p>{offer.description}</p>
                <h2>Year: {offer.createOn}</h2>
            </div>
            <div className={styles['card-stats']}>

                <div className={styles.stat}>
                    <div className={styles.value}>{`bought for ${offer.buyNow}$`}</div>
                </div>
            </div>
        </div>
    )

}