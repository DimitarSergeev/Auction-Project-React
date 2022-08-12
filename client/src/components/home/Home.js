import styles from './Home.module.css'
import { useEffect, useState } from "react";

import * as auctionService from '../../services/auctionService'
import { HomeItem } from './HomeItem';

import { Link, useNavigate } from 'react-router-dom'
export const Home = () => {
    const [lastOfferts, setLastOfferts] = useState([])

    const navigate = useNavigate()
    useEffect(() => {

        auctionService.getLastOfferts()
            .then(result => {
                setLastOfferts(result)
            })
            .catch(() => {
                navigate('/404')
            })

    }, [navigate])

    return (
        <div className={styles.box}>
            <h2 className={styles.title}>Last Deals :</h2>
            {lastOfferts.length > 0
                ? lastOfferts.map(x => <HomeItem key={x._id} offer={x} />)
                : <h2 className={styles.noOffers}>No Offerts for Now </h2>
            }

            <div className={styles['btn-box']}>
                <Link className={styles.viewMore} to='/auction' >Go to Auction</Link>

            </div>

        </div>
    )

}
