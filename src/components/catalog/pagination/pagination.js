import React from 'react';
import styles from './pagination.module.scss'  
import { Link } from 'react-router-dom';


const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, isLoading }) => {
  if (isLoading) {
    return ( null )
  }
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className={styles.pagination}>
        <li className={styles.pagination_page}>
          <a onClick={(e) => {
            e.preventDefault(); 
            currentPage === 1 ? paginate(currentPage) : paginate(currentPage-1)}
            } href='!#' className={styles.pagination_page__link}>
            previous
          </a>
        </li>
        {pageNumbers.map(number => (
          <li key={number} className={styles.pagination_page}>
            <Link  to={`/catalog/${number}`} onClick={(e) => {  paginate(number)}} 
                 
                className={`${styles.pagination_page__link}  ${currentPage === number ? styles.pagination_page__link__active: ''}`}
                >
              {number}
            </Link>
          </li>
        ))  }
        <li className={styles.pagination_page}>
          <a onClick={(e) => {
            e.preventDefault(); 
            currentPage === pageNumbers.length ? paginate(currentPage) : paginate(currentPage+1)}
            } href='!#' className={styles.pagination_page__link}>
          next
          </a>
        </li> 
      </ul>
    </nav>
  );
};

export default Pagination;