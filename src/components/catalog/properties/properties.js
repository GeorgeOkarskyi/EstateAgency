import React from 'react';
import styles from './item.module.scss' 
import { LoopCircleLoading } from 'react-loadingg';

const Properties = ({ properties, loading }) => {
  if (loading) {
    return ( <LoopCircleLoading /> )
  }

  return (
    <ul  >
      {properties.map(property => (
          <div key={property.id} className={styles.item}>
            <img className={styles.item__image} src={property.image} alt="" />
            <div className={styles.item_describtion}>
                <p className={styles.item_describtion__overflow}>{property.description}</p>
                <a className={styles.item_describtion__map} href="/#"><i className="fa fa-map-marker"></i>{property.city}</a>
                <p>{property.location}</p>
            </div>
            <div className={styles.item_describtion}>
                <p className={styles.item_describtion__price}>{property.price}</p>
                <p className={styles.item_describtion__type}>{property.layoutType}</p>
                <p className={styles.item_describtion__area}>{property.totalArea}</p>
            </div>
        </div>
      
      ))}
    </ul>
  );
};

export default Properties;