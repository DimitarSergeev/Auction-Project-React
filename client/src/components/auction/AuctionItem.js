import styles from './Auction.module.css'
import { Link } from 'react-router-dom'
import { Timer } from '../../util/timer';

export const AuctionItem = ({ auctionItem }) => {
    console.log(auctionItem);
    const timeData = Timer(auctionItem)
    return (
        <div className={styles.card}>
            <img src={auctionItem.imageUrl} alt="nqma" />
            <div className={styles['card-text']}>
                <div className={styles.time}>
                    <span>{timeData.hours}</span>:<span>{timeData.minutes}</span>:
                    <span>{timeData.seconds}</span>
                </div>
                <h2>{auctionItem.title}</h2>
            </div>
            <div className={styles['card-stats']}>

                <div className={styles.stat}>
                    <div className={styles.value}>{auctionItem.startPrice} $</div>
                </div>
                <div className={styles.detailBox}>
                    <Link to={`/offer/${auctionItem._id}/details`} className={styles.details}>See More</Link>
                </div>
            </div>
        </div>
    )

}