import styles from './Home.module.css'
import { Link } from 'react-router-dom';

import { Timer } from '../../util/timer';
export const HomeItem = ({ offer }) => {
    // const timeData = Timer(offer)
    // let timeEnd = false
    // if (timeData.hours.includes('-')) {
    //     timeEnd = true
    // }
    const timeEnd = false
    return (
        <div className={styles.card}>
            <img src={offer.imageUrl} alt="nqma" />
            <div className={styles['card-text']}>
                {timeEnd
                    ? <p>Not Sold!</p>
                    : <Timer item={offer} styles={styles}/>
                }

                <h2>{offer.title}</h2>
            </div>
            <div className={styles['card-stats']}>

                <div className={styles.stat}>
                    <div className={styles.value}>{offer.startPrice} $</div>
                </div>
                {!timeEnd &&
                    <div className={styles.detailBox}>
                        <Link to={`/offer/${offer._id}/details`} className={styles.details}>See More</Link>
                    </div>
                }
            </div>
        </div>
    )

}