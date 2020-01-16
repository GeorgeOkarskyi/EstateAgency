import React from 'react';
import styles from './navigation.module.scss'; 
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom';
import ModalContainer from '../../modal/modalContainer';
 




const Navigation = (props) => {
 
    let onOpenModal = () => { 
        props.openModal()
    }
    function target(e) {
        e.preventDefault();
    };



    return (
        <div >
 
            <ModalContainer/>

            <div className="container">
                <div className={styles.wrapper}>
                    <nav className={styles.navigation}>
                        <div className={styles.navigation__logo}>
                            <a href="/#">the<span>agency</span></a>
                        </div>
                        <input type="checkbox" className={styles.toggler}></input>
                        <div className={styles.hamburger}>
                            <div></div>
                        </div>
                             <ul onClick={target} className={styles.navigation__list}>
                                <li  >
                                    <NavLink activeClassName={styles.active} className={styles.navigation__item} exact to='/'>Home</NavLink>
                                </li>
                                <li >
                                    <NavLink activeClassName={styles.active} className={styles.navigation__item} to='/catalog'>Catalog</NavLink>

                                </li>
                                <li >
                                    <NavLink activeClassName={styles.active} className={styles.navigation__item} to='bla'><span>Services</span> <i className="fa fa-caret-down"></i></NavLink>

                                    <ul>
                                        <li>
                                            <a href="/#">Apartments For Rent</a>
                                        </li>
                                        <li>
                                            <a href="/#">Apartments For Sale</a>
                                        </li>
                                        <li>
                                            <a href="/#">Selling a property</a>
                                        </li>
                                    </ul>
                                </li>
                                <li  >
                                    <NavLink activeClassName={styles.active} className={styles.navigation__item} to='bla'><span>Information</span> <i className="fa fa-caret-down"></i></NavLink>

                                    <ul>
                                        <li>
                                            <a href="/#">Longterm Apartments FAQ</a>
                                        </li>
                                        <li>
                                            <a href="/#">Agency Fees</a>
                                        </li>
                                        <li>
                                            <a href="/#">Bying Property FAQ</a>
                                        </li>
                                    </ul>
                                </li>
                                <li  >
                                    <NavLink activeClassName={styles.active} className={styles.navigation__item} to='/contacts'>Contacts</NavLink>

                                </li>
                                <button onClick={onOpenModal} className={styles.signIn}>
                                    <i className="fa fa-sign-in"/><span>Sign in</span>
                                </button>
                            </ul>
        

                    </nav>

                </div>
            </div>
        </div>
    )
}

export default Navigation