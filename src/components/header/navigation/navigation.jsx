import React from 'react';
import styles from './navigation.module.scss';
import { showModalActionCreator } from '../../../redux/modal-reducer';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom';
import Modal from './modal/modal';





const Navigation = (props) => {
    let openModal = () => {
        props.dispatch(showModalActionCreator())
    }
    function target(e) {
        e.preventDefault();
        e.target.classList.toggle(styles.ttt);
    };
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
                            <li >
                                <NavLink activeClassName={styles.active} className={styles.navigation__item}  to='/sliderView'>Home</NavLink>
                            </li>
                            <li >
                                <NavLink activeClassName={styles.active} className={styles.navigation__item} to='/catalog'>Catalog</NavLink>

                            </li>
                            <li className={styles.navigation__item}>
                                <a href="">Services <i className="fa fa-caret-down"></i></a>
                                <ul>
                                    <li>
                                        <a href="#">Apartments For Rent</a>
                                    </li>
                                    <li>
                                        <a href="#">Apartments For Sale</a>
                                    </li>
                                    <li>
                                        <a href="#">Selling a property</a>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.navigation__item}>
                                <a href="">Information  <i className="fa fa-caret-down"></i></a>
                                <ul>
                                    <li>
                                        <a href="#">Longterm Apartments FAQ</a>
                                    </li>
                                    <li>
                                        <a href="#">Agency Fees</a>
                                    </li>
                                    <li>
                                        <a href="#">Bying Property FAQ</a>
                                    </li>
                                </ul>
                            </li>
                            <li  >
                            <NavLink activeClassName={styles.active} className={styles.navigation__item} to='/contacts'>Contacts</NavLink>
 
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