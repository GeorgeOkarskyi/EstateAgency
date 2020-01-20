import React from 'react'
import styles from './basic-info.module.scss' 


const BasicInfo = ({item}) => {
    function isEmpty(obj) {
        for(var prop in obj) {
            if(obj.hasOwnProperty(prop))
                return false;
        }
        return true;
    } 

   if(isEmpty(item)){
    return null
   }

    return (
        <div className={styles.info}> 
            <ul className={styles.info_top}>
                <li className={styles.info_top__item}>
                    <h4 className={styles.info_top__item__title}>Layout</h4>
                    <p className={styles.info_top__item__info}>{item.layout}</p>
                </li>
                <li className={styles.info_top__item}>
                    <h4 className={styles.info_top__item__title}>Total area {item.area.totalArea} </h4>
                    <p className={styles.info_top__item__info}>
                        <span>{item.area.kitchen}kitchen</span>
                        <span>{item.area.bedroom} living room</span>
                    </p>
                </li>
                <li className={styles.info_top__item}>
                    <h4 className={styles.info_top__item__title}>Price {item.price} </h4>
                    <p className={styles.info_top__item__info}>For 1 м2 25 $</p>
                </li>
            </ul>
            <div className={styles.info_description}>
                <h4 className={styles.info_description__title}>Description</h4>
                <p>{item.description}</p>
            </div>
            <ul className={styles.info_top}>
                <li className={styles.info_top__item}>
                    <h4 className={styles.info_top__item__title}>Building</h4>
                    <p className={styles.info_top__item__info}>{item.building}</p>
                </li>
                <li className={styles.info_top__item}>
                    <h4 className={styles.info_top__item__title}>Layout</h4>
                    <p className={styles.info_top__item__info}>{item.layoutType}</p>
                </li>
                <li className={styles.info_top__item}>
                    <h4 className={styles.info_top__item__title}>Renovation</h4>
                    <p className={styles.info_top__item__info}>{item.renovation}</p>
                </li>
            </ul>
        </div>
    )
}

export default BasicInfo