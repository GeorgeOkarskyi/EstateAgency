import React from 'react';
import styles from './navigation.module.css';

const Navigation = () => {
    return (
        <div >
            <div className="container">
                <nav className={styles.navigation}>
                    <div className={styles.navigation__logo}><span>logo</span></div>
                    <ul className={styles.navigation_nav}>
                        <li className={styles.navigation_nav}>first</li>
                        <li>dfgfds</li>
                        <li>first</li>
                        <li>first</li>
                        <li>first</li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Navigation