import React from 'react';
import styles from './catalog-panel.module.scss';





const CatalogPanel = ({length, isLoading, sortingProperties}) => {
    if (isLoading) {
        return ( null )
    }
    let select = React.createRef();

    let onSelectChange = () =>{
        let selectedOption = select.current.value;
        sortingProperties(selectedOption);
    }
    return (
        <div className={styles.sorting}>
            <h3 className={styles.sorting__info}>Available  {length} apartments</h3>
            <div className={styles.sorting_wrapper}>
                <h4 className={styles.sorting__title}>Sort:</h4>
                <select ref={select} onChange={onSelectChange} className={styles.sorting_select}>
                    <option className={styles.sorting_select__option} defaultValue="select">select</option>
                    <option className={styles.sorting_select__option} value="priceMinMax">by price (min - max)</option>
                    <option className={styles.sorting_select__option} value="priceMaxMin">by price (max - min)</option>
                </select>
            </div>
        </div>
    )
}




export default CatalogPanel
