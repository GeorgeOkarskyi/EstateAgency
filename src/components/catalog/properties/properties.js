import React from 'react';
import styles from './item.module.scss' 
import { LoopCircleLoading } from 'react-loadingg';
import { Link } from 'react-router-dom';

const Properties = ({ properties, isLoading }) => {
  if (isLoading) {
    return ( <LoopCircleLoading /> )
  }

  return (
    <ul  >
      {properties.map(property => (
          <Link to={`/item/${property.id}`} property={property}   key={property.id} className={styles.item}>
            <img className={styles.item__image} src={property.images[0].thumbnail} alt={property.location} />
            <div className={styles.item_describtion}>
                <p className={styles.item_describtion__overflow}>{property.description}</p>
                <p className={styles.item_describtion__map} href="/#"><i className="fa fa-map-marker"></i>{property.city}</p>
                <p>{property.location}</p>
            </div>
            <div className={styles.item_describtion}>
                <p className={styles.item_describtion__price}>{property.price}</p>
                <p className={styles.item_describtion__type}>{property.layoutType}</p>
                <p className={styles.item_describtion__area}>{property.totalArea}</p>
            </div>
        </Link>
      ))}
    </ul>
  );
};

export default Properties;