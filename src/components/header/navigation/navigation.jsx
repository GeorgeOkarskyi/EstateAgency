import React from 'react';
import styles from './navigation.module.scss';
import { showModalActionCreator } from '../../../redux/state';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom';
import Modal from './modal/modal';


function target(e) {
    e.preventDefault();
    e.target.classList.toggle(styles.ttt);
};


const Navigation = (props) => {
    let openModal = () => {
        props.dispatch(showModalActionCreator())
    }


    return (
        <div >
            <Modal dispatch={props.dispatch} state={props.state} />
            <div className="container">
                <div className={styles.wrapper}>
                    <nav className={styles.navigation}>
                        <div className={styles.navigation__logo}>
                            <a href="#">the<span>agency</span></a>
                        </div>
                        <input type="checkbox" className={styles.toggler}></input>
                        <div className={styles.hamburger}>
                            <div></div>
                        </div>
                        <ul onClick={target} className={styles.navigation__list}>
                            <li className={`${styles.navigation__item} ${styles.active}`}>
                                <a href="#" >Home </a>
                            </li>
                            <li className={styles.navigation__item}>
                                <a href="">Properties <i className="fa fa-caret-down"></i></a>
                                <ul>
                                    <li>
                                        <a href="#">House</a>
                                    </li>
                                    <li>
                                        <a href="#">Office</a>
                                    </li>
                                    <li>
                                        <a href="#">Apartment</a>
                                    </li>
                                    <li>
                                        <a href="#">Residential</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.navigation__item}>
                                <a href="">Agents <i className="fa fa-caret-down"></i></a>
                                <ul>
                                    <li>
                                        <a href="#">House</a>
                                    </li>
                                    <li>
                                        <a href="#">Office</a>
                                    </li>
                                    <li>
                                        <a href="#">Apartment</a>
                                    </li>
                                    <li>
                                        <a href="#">Residential</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.navigation__item}>
                                <a href="">Pages <i className="fa fa-caret-down"></i></a>
                                <ul>
                                    <li>
                                        <a href="#">House</a>
                                    </li>
                                    <li>
                                        <a href="#">Office</a>
                                    </li>
                                    <li>
                                        <a href="#">Apartment</a>
                                    </li>
                                    <li>
                                        <a href="#">Residential</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.navigation__item}>
                                <a href="">Blog <i className="fa fa-caret-down"></i></a>
                                <ul>
                                    <li>
                                        <a href="#">House</a>
                                    </li>
                                    <li>
                                        <a href="#">Office</a>
                                    </li>
                                    <li>
                                        <a href="#">Apartment</a>
                                    </li>
                                    <li>
                                        <a href="#">Residential</a>
                                    </li>
                                </ul>
                            </li>
                            <NavLink onClick={openModal} className={styles.signIn}
                                to='/login' activeClassName={styles.active}>
                                <i className="fa fa-sign-in">
                                </i>Sign in</NavLink>
                        </ul>
                    </nav>

                </div>
            </div>
        </div>
    )
}

export default Navigation