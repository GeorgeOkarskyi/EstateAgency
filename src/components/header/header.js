import React from 'react';
import Navigation from './navigation/navigation';
import SliderView from './slider/slider';
import styles from './header.module.css';
import {Route} from 'react-router-dom';

// import Modal from './modal/modal';


const Header = (props) => {
    return (
        <div>
            <header className={styles.header}>
                <Navigation dispatch={props.dispatch} state={props.state} />
                <Route path='/sliderView' render={() =>
                    <SliderView ></SliderView>}>
                </Route> 
            </header>
        </div>
    )

}

export default Header;