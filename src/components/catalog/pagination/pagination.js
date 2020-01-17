import React from 'react';
import styles from './pagination.module.scss'  


const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, loading }) => {
  if (loading) {
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
            <a onClick={(e) => {e.preventDefault(); paginate(number)}} 
                href='!#' 
                className={`${styles.pagination_page__link}  ${currentPage === number ? styles.pagination_page__link__active: ''}`}
                >
              {number}
            </a>
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