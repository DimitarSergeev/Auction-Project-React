import styles from './Auction.module.css'
import { Link } from 'react-router-dom'
import { Timer } from '../Timer';

export const AuctionItem = ({ auctionItem }) => {

    return (
        <div className={styles.card}>
            <img src={auctionItem.imageUrl} alt="nqma" />
            <div className={styles['card-text']}>
               <Timer item={auctionItem} styles={styles}/>
            

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