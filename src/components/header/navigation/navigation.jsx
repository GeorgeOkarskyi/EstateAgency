import React from 'react';
import styles from './navigation.module.scss';
 
import 'font-awesome/css/font-awesome.min.css';


function target(e){
    e.preventDefault(); 
    e.target.classList.toggle(styles.ttt);
};




const Navigation = () => {

    return (
        <div >
            <div className="container">
                <div className={styles.wrapper}>
                    <nav className={styles.navigation}>
                        <div className={styles.navigation__logo}>
                            <a href="#">the<span>agency</span></a>
                        </div>
                        <input type="checkbox" className={styles.toggler}></input>
                        <div class={styles.hamburger}>
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
                                        <a href="#">House <i className="fa fa-caret-right"></i></a>
                                        <ul>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Apartment</a></li>
                                            <li><a href="#">Residential</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Office <i className="fa fa-caret-right"></i></a>
                                        <ul>
                                            <li><a >Office</a></li>
                                            <li><a href="#">Apartment</a></li>
                                            <li><a href="#">Residential</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Apartment <i className="fa fa-caret-right"></i></a>
                                        <ul>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Apartment</a></li>
                                            <li><a href="#">Residential</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Residential <i className="fa fa-caret-right"></i></a>
                                        <ul>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Apartment</a></li>
                                            <li><a href="#">Residential</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.navigation__item}>
                                <a href="">Agents <i className="fa fa-caret-down"></i></a>
                                <ul>
                                    <li>
                                        <a href="#">House <i className="fa fa-caret-right"></i></a>
                                        <ul>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Apartment</a></li>
                                            <li><a href="#">Residential</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Office <i className="fa fa-caret-right"></i></a>
                                        <ul>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Apartment</a></li>
                                            <li><a href="#">Residential</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Apartment <i className="fa fa-caret-right"></i></a>
                                        <ul>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Apartment</a></li>
                                            <li><a href="#">Residential</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Residential <i className="fa fa-caret-right"></i></a>
                                        <ul>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Apartment</a></li>
                                            <li><a href="#">Residential</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.navigation__item}>
                                <a href="">Pages <i className="fa fa-caret-down"></i></a>
                                <ul>
                                    <li>
                                        <a href="#">House <i className="fa fa-caret-right"></i></a>
                                        <ul>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Apartment</a></li>
                                            <li><a href="#">Residential</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Office <i className="fa fa-caret-right"></i></a>
                                        <ul>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Apartment</a></li>
                                            <li><a href="#">Residential</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Apartment <i className="fa fa-caret-right"></i></a>
                                        <ul>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Apartment</a></li>
                                            <li><a href="#">Residential</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Residential <i className="fa fa-caret-right"></i></a>
                                        <ul>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Apartment</a></li>
                                            <li><a href="#">Residential</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className={styles.navigation__item}>
                                <a href="">Blog <i className="fa fa-caret-down"></i></a>
                                <ul>
                                    <li>
                                        <a href="#">House <i className="fa fa-caret-right"></i></a>
                                        <ul>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Apartment</a></li>
                                            <li><a href="#">Residential</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Office <i className="fa fa-caret-right"></i></a>
                                        <ul>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Apartment</a></li>
                                            <li><a href="#">Residential</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Apartment <i className="fa fa-caret-right"></i></a>
                                        <ul>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Apartment</a></li>
                                            <li><a href="#">Residential</a></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">Residential <i className="fa fa-caret-right"></i></a>
                                        <ul>
                                            <li><a href="#">Office</a></li>
                                            <li><a href="#">Apartment</a></li>
                                            <li><a href="#">Residential</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    <a className={styles.signIn}><i className="fa fa-sign-in"></i> Sign in</a>
                </div>
            </div>
        </div>
    )
}

export default Navigation