import React from 'react'
import styles from './basic-info.module.scss'


const BasicInfo = () => {
    return (
        <div className={styles.info}> 
            <ul className={styles.info_top}>
                <li className={styles.info_top__item}>
                    <h4 className={styles.info_top__item__title}>Layout</h4>
                    <p className={styles.info_top__item__info}>Living Room
                        Master Bedroom 1
                        Children's Bedroom / Playroom
                        Children's Bedroom / Playroom
                        2 Bathrooms
                    </p>
                </li>
                <li className={styles.info_top__item}>
                    <h4 className={styles.info_top__item__title}>Total area 120 m2</h4>
                    <p className={styles.info_top__item__info}>60 m2   living room
                        15 m2   kitchen
                    </p>
                </li>
                <li className={styles.info_top__item}>
                    <h4 className={styles.info_top__item__title}>Price  3,000 $</h4>
                    <p className={styles.info_top__item__info}>For 1 м2 25 $</p>
                </li>
            </ul>
            <p className={styles.info_description}>
                <h4 className={styles.info_description__title}>Description</h4>
                Modern three-bedroom apartment (120 m2) in the living complex Novopecherskie Lipki. Fully renovated, dining room, 3 bedrooms, 2 bathrooms, jacuzzi, heated floor. Elevator access directly to the underground parking. Security.
            </p>
            <ul className={styles.info_top}>
                <li className={styles.info_top__item}>
                    <h4 className={styles.info_top__item__title}>Building</h4>
                    <p className={styles.info_top__item__info}>10 floor of 30
2000's - up
                    </p>
                </li>
                <li className={styles.info_top__item}>
                    <h4 className={styles.info_top__item__title}>Layout</h4>
                    <p className={styles.info_top__item__info}>Studio</p>
                </li>
                <li className={styles.info_top__item}>
                    <h4 className={styles.info_top__item__title}>Renovation</h4>
                    <p className={styles.info_top__item__info}>1-2 Years Old</p>
                </li>
            </ul>
        </div>
    )
}

export default BasicInfo