import styles from './DetailsPage.module.css'

import { useParams, useNavigate, Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'

import * as auctionService from '../../services/auctionService'
import { Timer } from '../../util/timer';
import { AuthContext } from '../../contexts/AuthContext';

export const DetailsPage = ({ userId }) => {
    const { offerId } = useParams()
    const [currOffer, setCurrOffer] = useState({})
    const [bet, setBet] = useState(currOffer.startPrice)
    const { userInfo } = useContext(AuthContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        auctionService.getOne(offerId)
        .then(result => {
            setCurrOffer(result)
            console.log(currOffer);
        })
    }, [offerId])

    const timeData = []
    console.log(currOffer.timer);
   
    const sendbet = () => {
        auctionService.bet(offerId, { startPrice: bet, token: userInfo.token, winBet: userInfo.userId })
            .then(result => {
                setCurrOffer(result)
            })
    }

    const addBet = (e) => {
        setBet(e.target.value)
    }

    const buyNowhandler = () => {
        auctionService.buyNow(offerId, userInfo.userId)
            .then(() => {
                auctionService.del(offerId)
                    .catch(() => navigate('/404'))
            })
            .then(() => navigate('/about'))
            .catch(() => navigate('/404'))
    }

    const deleteItem = () => {
        try {
            auctionService.del(offerId)
            navigate('/')
        } catch (error) {
            navigate('/404')
        }
    }
    let certificate = ''
    let winning = ''
    if (currOffer.nameCert) {
        certificate = currOffer.nameCert
    } else {
        certificate = currOffer.certificate
    }
    if (currOffer.winBet === userInfo.userId) {
        winning = true
    } else {
        winning = false
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
                    <span>{timeData.hours}</span>:<span>{timeData.minutes}</span>:
                    <span>{timeData.seconds}</span>
                </div>
                <div className={styles.certificate}>
                    <span>Certificate: {certificate} </span>
                </div>
                {winning &&
                    <label className={styles.winning}>You Leading </label>
                }
                <div className={styles.btnBox}>
                    <div className={styles.bet}>
                        <input type="number" placeholder={`Min ${currOffer.startPrice + 10} $`} onChange={addBet} />
                        <button onClick={() => sendbet()}>Bet</button>
                    </div>
                </div>

                <button className={styles.buyNow} onClick={() => buyNowhandler()}>Buy Now {currOffer.buyNow}$</button>

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
                            <Link to={`/edit/offer/${currOffer._id}`} className={styles.edit}>Edit</Link>
                            <button className={styles.delete} onClick={() => deleteItem()}>Delete</button>
                        </div>
                    }
                </div>
            </div>
        </div>
    )

}