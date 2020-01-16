import React from 'react';
import styles from './item.module.scss';
import 'font-awesome/css/font-awesome.min.css';





const List = (props) => {
    return (
        <div className={styles.item}>
            <img className={styles.item__image} src={props.element.image} alt="" />
            <div className={styles.item_describtion}>
                <p className={styles.item_describtion__overflow}>{props.element.description}</p>
                <a className={styles.item_describtion__map} href="/#"><i className="fa fa-map-marker"></i>{props.element.city}</a>
                <p>{props.element.location}</p>
            </div>
            <div className={styles.item_describtion}>
                <p className={styles.item_describtion__price}>{props.element.price}</p>
                <p className={styles.item_describtion__type}>{props.element.layoutType}</p>
                <p className={styles.item_describtion__area}>{props.element.totalArea}</p>
            </div>
        </div>
    )
}




export default List
