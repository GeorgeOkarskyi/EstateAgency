import React from 'react';
import styles from './footer.module.scss';
import 'font-awesome/css/font-awesome.min.css';


const Footer = (props) => {
    return (
        <div>
            <footer className={styles.footer}>
                <div className="container">
                    <div className={styles.footer_container}>
                        <div className={styles.footer__item}>
                            <div className={styles.footer__logo}>
                                <a href="#">the<span>agency</span></a>
                            </div>
                            <ul className={styles.footer_social}>
                                <li className={styles.footer_social__item}><a href="#"><i class="fa fa-facebook-square"></i></a></li>
                                <li className={styles.footer_social__item}><a href="#"><i class="fa fa-instagram"></i></a></li>
                                <li className={styles.footer_social__item}><a href="#"><i class="fa fa-telegram"></i></a></li>
                            </ul>
                        </div>
                        <div className={styles.footer__item}>
                            <h3 className={styles.footer__title}>information</h3>
                            <ul className={styles.footer_list}>
                                <li className={`${styles.footer_list__item} ${styles.footer_list__item_padding}`}>
                                    <i class="fa fa-map"></i><span>Vasyl Poryk Street 47, Vishenka 21000, Vinnytsia</span>
                                </li>
                                <li className={`${styles.footer_list__item} ${styles.footer_list__item_padding}`}>
                                    <i className="fa fa-phone"></i><span>Tel. +1 2123431725</span>
                                </li>
                                <li className={`${styles.footer_list__item} ${styles.footer_list__item_padding}`}>
                                    <i className="fa fa-envelope"></i><span>theagency@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                        <div className={styles.footer__item}>
                            <h3 className={styles.footer__title}>links</h3>
                            <ul className={styles.footer_list}>
                                <li className={styles.footer_list__item}>
                                    <a href="#">Home</a>
                                </li>
                                <li className={styles.footer_list__item}>
                                    <a href="#">Catalog</a>
                                </li>
                                <li className={styles.footer_list__item}>
                                    <a href="#">Apartments For Rent</a>
                                </li>
                                <li className={styles.footer_list__item}>
                                    <a href="#">Apartments For Sale</a>
                                </li>
                                <li className={styles.footer_list__item}>
                                    <a href="#">FAQ</a>
                                </li>
                                <li className={styles.footer_list__item}>
                                    <a href="#">Contacts</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )

}

export default Footer;




