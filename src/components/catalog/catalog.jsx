import React from 'react'; 
// import CatalogPanel from './catalog-panel/catalog-panel';
import Item from './item/item';
import Pagination from './pagination/pagination';
import styles from './catalog.module.scss';
import FilterContainer from './filter/filter-container'

const Catalog = (props) =>{
    let properties = props.state.current.map((el)=> <Item key={el.id} element={el}></Item>)
    return(
        <div className="container">
            <div className={styles.catalog_container}>
                <div className={styles.filter}>
                    <FilterContainer ></FilterContainer>
                </div>
                <div className={styles.right}>
                    {/* <CatalogPanel  ></CatalogPanel> */}
                    {properties} 
                    <Pagination></Pagination>
                </div>
            </div>
        </div>
    )
}

export default Catalog;
