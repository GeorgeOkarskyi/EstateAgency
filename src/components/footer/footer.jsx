import React from 'react';
import styles from './footer.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import { NavLink } from 'react-router-dom';


const Footer = (props) => {
    return (
        <div className={styles.footer_fixed}>
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footer_container}>
                        <div className={styles.footer__item}>
                            <div className={styles.footer__logo}>
                                <a href="/#">the<span>agency</span></a>
                            </div>
                         <ul className={styles.footer_social}>
                                <li className={styles.footer_social__item}><a href="/#"><i className="fa fa-facebook-square"></i></a></li>
                                <li className={styles.footer_social__item}><a href="/#"><i className="fa fa-instagram"></i></a></li>
                                <li className={styles.footer_social__item}><a href="/#"><i className="fa fa-telegram"></i></a></li>
                            </ul>

                        </div>

                        <div className={styles.footer__item}>
                            {/* <h3 className={styles.footer__title}>information</h3> */}
                            <ul className={styles.footer_list}>
                                <li className={`${styles.footer_list__item} ${styles.footer_list__item_padding}`}>
                                    <i className="fa fa-map-marker"></i><span>Vasyl Poryk Street 47, Vishenka 21000, Vinnytsia</span>
                                </li>
                                <li className={`${styles.footer_list__item} ${styles.footer_list__item_padding}`}>
                                    <i className="fa fa-phone"></i><span>Tel. +1 2123431725</span>
                                </li>
                                <li className={`${styles.footer_list__item} ${styles.footer_list__item_padding}`}>
                                    <i className="fa fa-envelope-square"></i><span>theagency@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                        {/* <div className={styles.footer__item}>
                            <h3 className={styles.footer__title}>links</h3>
                            <ul className={styles.footer_list}>
                                <li className={styles.footer_list__item}>
                                <NavLink activeClassName={styles.active} exact to='/'>Home</NavLink>
                                </li>
                                <li className={styles.footer_list__item}>
                                <NavLink activeClassName={styles.active} to='/catalog'>Catalog</NavLink>
                                </li>
                                <li className={styles.footer_list__item}>
                                    <a href="/#">Apartments For Rent</a>
                                </li>
                                <li className={styles.footer_list__item}>
                                    <a href="/#">Apartments For Sale</a>
                                </li>
                                <li className={styles.footer_list__item}>
                                <NavLink activeClassName={styles.active} to='/contacts'>Contacts</NavLink>
                                </li>
                            </ul>
                        </div> */}
                    </div>
                </div>
            </footer>
        </div>
    )

}

export default Footer;




