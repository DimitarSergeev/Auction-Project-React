import styles from './Auction.module.css'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import * as auctionService from '../../services/auctionService'

export const Auction = () => {

    return (
        <section className={styles.mainBox}>
            <div className={styles.cardBox}>
                <h2 className={styles.title}>Current Deals</h2>
                <div className={styles.searchBox}>
                    <input type="text" placeholder='Search...'/>
                    <button>Search</button>
                </div>
                <div className={styles.cardHolder}>
                    <div className={styles.card}>
                        <img src='https://imgs.search.brave.com/XwvOSFEI6RTHV7mp8g-VHinemqr5Uu3pjHiVXOAiNp0/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/MlUzM0dFN0xkUTRt/VHoyVmhkMlJ3SGFG/aiZwaWQ9QXBp' alt="nqma" />
                        <div className={styles['card-text']}>
                            <h2>asdasd</h2>
                        </div>
                        <div className={styles['card-stats']}>

                            <div className={styles.stat}>
                                <div className={styles.value}>123 $</div>
                            </div>
                            <div className={styles.detailBox}>
                                <Link to='/auth/login' className={styles.details}>See More</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src='https://imgs.search.brave.com/XwvOSFEI6RTHV7mp8g-VHinemqr5Uu3pjHiVXOAiNp0/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/MlUzM0dFN0xkUTRt/VHoyVmhkMlJ3SGFG/aiZwaWQ9QXBp' alt="nqma" />
                        <div className={styles['card-text']}>
                            <h2>asdasd</h2>
                        </div>
                        <div className={styles['card-stats']}>

                            <div className={styles.stat}>
                                <div className={styles.value}>123 $</div>
                            </div>
                            <div className={styles.detailBox}>
                                <Link to='/auth/login' className={styles.details}>See More</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src='https://imgs.search.brave.com/XwvOSFEI6RTHV7mp8g-VHinemqr5Uu3pjHiVXOAiNp0/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/MlUzM0dFN0xkUTRt/VHoyVmhkMlJ3SGFG/aiZwaWQ9QXBp' alt="nqma" />
                        <div className={styles['card-text']}>
                            <h2>asdasd</h2>
                        </div>
                        <div className={styles['card-stats']}>

                            <div className={styles.stat}>
                                <div className={styles.value}>123 $</div>
                            </div>
                            <div className={styles.detailBox}>
                                <Link to='/auth/login' className={styles.details}>See More</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src='https://imgs.search.brave.com/XwvOSFEI6RTHV7mp8g-VHinemqr5Uu3pjHiVXOAiNp0/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/MlUzM0dFN0xkUTRt/VHoyVmhkMlJ3SGFG/aiZwaWQ9QXBp' alt="nqma" />
                        <div className={styles['card-text']}>
                            <h2>asdasd</h2>
                        </div>
                        <div className={styles['card-stats']}>

                            <div className={styles.stat}>
                                <div className={styles.value}>123 $</div>
                            </div>
                            <div className={styles.detailBox}>
                                <Link to='/auth/login' className={styles.details}>See More</Link>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src='https://imgs.search.brave.com/XwvOSFEI6RTHV7mp8g-VHinemqr5Uu3pjHiVXOAiNp0/rs:fit:632:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5Z/MlUzM0dFN0xkUTRt/VHoyVmhkMlJ3SGFG/aiZwaWQ9QXBp' alt="nqma" />
                        <div className={styles['card-text']}>
                            <h2>asdasd</h2>
                        </div>
                        <div className={styles['card-stats']}>

                            <div className={styles.stat}>
                                <div className={styles.value}>123 $</div>
                            </div>
                            <div className={styles.detailBox}>
                                <Link to='/auth/login' className={styles.details}>See More</Link>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>

        </section>
    )

}