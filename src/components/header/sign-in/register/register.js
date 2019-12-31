import React from 'react';
import Navigation from './navigation/navigation';
import Slider from './slider/slider';
import styles from './header.module.css';

const Header = () => {
    return (
        <div>
            <header className= {styles.header}>
                <Navigation />
                <Slider />
            </header>
        </div>
    )

}

export default Header;