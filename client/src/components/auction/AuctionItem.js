import styles from './Auction.module.css'
import { Link } from 'react-router-dom'
import { useEffect, useState, } from 'react';

export const AuctionItem = ({ auctionItem }) => {
    const [timeData, setTimeData] = useState({
        seconds: '',
        minutes: '',
        hours: ''
    })
    let currEndDate = Date.parse(auctionItem.timer)
    const [currentEdnTime, setCurrentEndTime] = useState(currEndDate)

    useEffect(() => {
        const intervalId = setInterval(() => {
            let leftTime = 86400000 - (Date.now() - currentEdnTime)
            let seconds = Math.floor(leftTime / 1000)
            let minutes = Math.floor(seconds / 60)
            let hours = Math.floor(minutes / 60)
            minutes = Math.floor(minutes % 60)
            seconds = Math.floor(seconds % 60)
            const time = { seconds, minutes, hours }
            setCurrentEndTime(oldcurrTime => oldcurrTime - 1000)
            setTimeData(time)
        }, 1000)
        return () => clearInterval(intervalId)
    }, [currentEdnTime])
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
                    <Link to='/auth/login' className={styles.details}>See More</Link>
                </div>
            </div>
        </div>
    )

}