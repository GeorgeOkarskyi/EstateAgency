import React from 'react';
import Filter from './filter/filter';
import CatalogPanel from './catalog-panel/catalog-panel';
import List from './list/list';
import Pagination from './pagination/pagination';
import styles from './catalog.module.scss';







const Catalog = (props) =>{
    return(
        <div className="container">
            <div className={styles.catalog_container}>
                <div> 
                <Filter></Filter>
                </div>
                <div>
                    <CatalogPanel></CatalogPanel>
                    <List></List>
                    <Pagination></Pagination>
                </div>

            </div>

        </div>
    )
}




export default Catalog;
