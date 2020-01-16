import React from 'react'; 
import styles from './header.module.css';
import NavigationContainer from './navigation/navigationContainer'

const Header = () => {
    return (
        <div>
            <header className={styles.header}>
                <NavigationContainer /> 
            </header>
        </div>
    )
}

export default Header;