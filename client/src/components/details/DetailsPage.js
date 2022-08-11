import styles from './DetailsPage.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import * as auctionService from '../../services/auctionService'
import { Timer } from '../../util/timer';


export const DetailsPage = ({userId}) => {
    const { offerId } = useParams()
    const [currOffer, setCurrOffer] = useState({})

    // const timeData = Timer(currOffer)
    useEffect(() => {
        auctionService.getOne(offerId)
            .then(result => {
                setCurrOffer(result)
            })
    }, [offerId])
    let certificate = ''
    if (currOffer.nameCert) {
        certificate = currOffer.nameCert
    }else{
        certificate = currOffer.certificate
    }

    const isOwner = currOffer.owner === userId
    return (
        <div className={styles.box}>

            <div className={styles.card}>
                <div className={styles.thumbnail}>
                    <img
                        className={styles.left}
                        src={currOffer.imageUrl}
                    />
                </div>
                <div className={styles.time}>
                    {/* <span>{timeData.hours}</span>:<span>{timeData.minutes}</span>:
                    <span>{timeData.seconds}</span> */}
                </div>
                <div className={styles.certificate}>
                    <span>Certificate: {certificate} </span>
                </div>
                <div className={styles.btnBox}>
                    <div className={styles.bet}>
                        <input type="number" placeholder="Enter amount..." />
                        <button>Bet</button>
                    </div>
                </div>

                <button className={styles.buyNow}>Buy Now {currOffer.buyNow}$</button>

                <div className={styles.right}>
                    <h1>{currOffer.title}</h1>
                    <div className={styles.author}>
                        <h2>OwnerId: {currOffer.owner}</h2>
                    </div>
                    <div className={styles.separator} />

                    <div className={styles.year}>
                        <h2>Year: {currOffer.createOn}</h2>
                    </div>
                    <div className={styles.separator} />
                    <p>
                        {currOffer.description}
                    </p>
                    {isOwner &&
                    <div className={styles.ownerBtn}>
                        <button className={styles.edit}>Edit</button>
                        <button className={styles.delete}>Delete</button>
                    </div>
                    }
                </div>
            </div>
        </div>
    )

}