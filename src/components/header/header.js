import React from 'react';
import Navigation from './navigation/navigation';
import Slider from './slider/slider';
import styles from './header.module.css';
// import Modal from './modal/modal';


const Header = (props) => {
    return (
        <div>
            <header className={styles.header}>
                <Navigation dispatch={props.dispatch} state={props.state} />
                <Slider />
                {/* <Modal dispatch={props.dispatch} state={props.state} /> */}
            </header>
        </div>
    )

}

export default Header;