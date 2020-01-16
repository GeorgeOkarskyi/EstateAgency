import React from 'react';
import styles from './contacts.module.scss';
import MapContainer from './map/map'
import 'font-awesome/css/font-awesome.min.css';


const Contacts = (props) => {
    return (
        <div className="container">
            <div className={styles.contacts}>
                {/* <h2 className={styles.contacts__title}>Contacts</h2> */}
                <div className={styles.contacts_flex}>
                    <address className={styles.contacts__address}>
                        <div>
                            <i className="fa fa-map-marker"></i><span>
                                Vasyl Poryk Street 47, Vishenka 21000, Vinnytsia
                            </span>
                        </div>
                        <div>
                            <i className="fa  fa-phone"></i><span>
                                Tel. +1 2123431725
                            </span>
                        </div>
                        <div>
                            <i className="fa  fa-envelope-square"></i>
                            <span>
                                Email. info@harutheme.com  
                            </span>
                        </div>
                    </address>
                    <form className={styles.contacts_form}>
                        <p className={styles.contacts_form__title} >Name:</p>
                        <input className={styles.contacts_form__input} type="text" name="fname"></input> 
                        <p className={styles.contacts_form__title} >Email:</p>
                        <input className={styles.contacts_form__input} type="email" name="femail"></input>
                        <p className={styles.contacts_form__title} >Questions/Comments</p>
                        <textarea className={styles.contacts_form__textarea} ></textarea> <br/>
                        <input className={styles.contacts_form__button} type="submit" value="Send Message"></input>
                    </form>
                </div>
                <MapContainer></MapContainer>
            </div>
        </div>
    )
}
export default Contacts;




