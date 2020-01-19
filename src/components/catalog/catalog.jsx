 
import CatalogPanel from './catalog-panel/catalog-panel'; 
import Pagination from './pagination/pagination';
import styles from './catalog.module.scss';
import FilterContainer from './filter/filter-container'
import React from 'react';  
import Properties from './properties/properties';


const Catalog = ({postsPerPage , properties, isLoading,  currentPage, setCurrentPage}) => {  

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = properties.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <div className={styles.catalog_container}>
                <div className={styles.filter}>
                    <FilterContainer ></FilterContainer>
                </div>
                <div className={styles.right}>
                    <CatalogPanel isLoading={isLoading} length={`${properties.length}`}></CatalogPanel>
                    <Properties properties={currentPosts} isLoading={isLoading} />
                    <Pagination
                        postsPerPage={postsPerPage}
                        totalPosts={properties.length}
                        paginate={paginate}
                        currentPage={currentPage}
                        isLoading={isLoading}
                    />
                </div>
            </div>
        </div>
    )
}

export default Catalog;
