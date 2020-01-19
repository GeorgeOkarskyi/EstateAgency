import React from 'react'; 
import styles from './header.module.css';
import NavigationContainer from './navigation/navigationContainer'

const Header = () => {
    return (
 
            <header className={styles.header}>
                <NavigationContainer /> 
            </header>
 
    )
}

export default Header;