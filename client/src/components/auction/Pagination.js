import styles from './Auction.module.css'

import { Link } from 'react-router-dom'
export const Pagination = ({postPerPage,totalPosts,paginate}) => {
const pageNumbers = []
for (let i = 0; i < Math.ceil(totalPosts/postPerPage); i++) {
    pageNumbers.push(i+1)
}
return (
    <nav>
        <ul className={styles.pageItemS}>
        {pageNumbers.map(number=>(
            <li key={number} className={styles.pageItem}>
             <Link to='' onClick={()=> paginate(number)} >{number}</Link>
            </li>
        ))}
        </ul>
    </nav>
)

}