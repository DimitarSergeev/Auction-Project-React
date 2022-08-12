import styles from './Auction.module.css'
import { useState , useEffect } from "react";


import { AuctionItem } from './AuctionItem';
import { Pagination } from './Pagination';

import * as auctionService from '../../services/auctionService'
import { useNavigate } from 'react-router-dom';

export const Auction = () => {
    const [searchValue, setSearchValue] = useState('')
    const [, setOption] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(8)
    const [offerts, setOfferts] = useState([])
   
    const navigate = useNavigate()
    useEffect(() => {

        auctionService.getAll()
          .then(result => {
            setOfferts(result)
          })
          .catch(() => {
            navigate('/404')
          })
    
      }, [navigate])

    let offertsS = offerts.filter(x => x.title.toLowerCase().includes(searchValue.toLowerCase()))

    const searchHandler = (e) => {
        setSearchValue(e.target.value)
    }
    const optionHandler = (e) => {
        setOption(e.target.value)
        if (e.target.value === 'Increase') {
            return offertsS = offerts.sort((a, b) => a.startPrice - b.startPrice)
        } else if (e.target.value === 'Decrease') {
            return offertsS = offerts.sort((a, b) => b.startPrice - a.startPrice)
        } else if (e.target.value === 'Increase Time') {
            return offertsS = offerts.sort((a, b) => Date.parse(a.timer) - Date.parse(b.timer))
        } else if (e.target.value === 'Decrease Time') {
            return offertsS = offerts.sort((a, b) => Date.parse(b.timer) - Date.parse(a.timer))
        }
    }

    const indexOfLastPost = currentPage * postPerPage
    const indexOfFirstPost = indexOfLastPost - postPerPage

    const paginate = pageNumber => setCurrentPage(pageNumber);
    offertsS = offertsS.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <section className={styles.mainBox}>
            <div className={styles.cardBox}>
                <h2 className={styles.title}>Current Deals</h2>
                <div className={styles.searchBox}>
                    <div className={styles.searchHolder}>
                        <input type="text" placeholder='Search...' value={searchValue} onChange={searchHandler} />


                        <div className={styles.select}>
                            <h3>Filter by</h3>
                            <select name="Option" id="Option" onChange={optionHandler} >
                                <option value=""></option>
                                <option value="Increase">Increase Price</option>
                                <option value="Decrease">Decrease Price</option>
                                <option value="Increase Time">Increase time</option>
                                <option value="Decrease Time">Decrease time</option>
                            </select>
                        </div>

                    </div>
                </div>

                <div className={styles.cardHolder}>
                    {offerts.length > 0
                        ? offertsS.map(x => <AuctionItem key={x._id} auctionItem={x} />)
                        : <h2 className={styles.noOffers}>No Offerts for Now </h2>
                    }
                </div>

                <Pagination postPerPage={postPerPage} totalPosts={offerts.length} paginate={paginate} />

            </div>
        </section>
    )

}