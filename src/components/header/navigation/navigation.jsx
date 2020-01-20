import React, { useState } from 'react';
import styles from './navigation.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import {  NavLink} from 'react-router-dom';





const Navigation = (props) => {
    const [showServices, setServices] = useState(true);
    const [showInformation, setInformation] = useState(true);


    let onOpenModal = () => {
        props.openModal()
    }
    let checkbox = React.createRef();

    let close = () => {
        checkbox.current.checked = false;
    }


    return (
        <div className="container">
            <div className={styles.wrapper}>
                <nav className={styles.navigation}>
                    <div className={styles.navigation__logo}>
                        <NavLink  to='/'>the<span>agency</span></NavLink>
                    </div>
                    <input ref={checkbox} type="checkbox" className={styles.toggler}></input>
                    <div className={styles.hamburger}>
                        <div></div>
                    </div>
                    <ul className={styles.navigation__list}>
                        <li className={styles.navigation__list__home} onClick={close} >
                            <NavLink   className={styles.navigation__item} to='/'>Home</NavLink>
                        </li>
                        <li onClick={close}>
                            <NavLink activeClassName={styles.active} className={styles.navigation__item} to='/catalog'>Catalog</NavLink>
                        </li>
                        <li>
                            <div onClick={() => { showServices ? setServices(false) : setServices(true) }}
                                
                                className={`${styles.navigation__item}`}  ><span>Services</span> <i className="fa fa-caret-down"></i></div>

                            <ul onClick={close} className={`${styles.navigation__list__dropdown}  ${showServices ? styles.navigation__list__dropdown__open : ''} `}>
                                <li> 
                                    <NavLink to='/services/apartments-for-rent'>Apartments For Rent</NavLink>

                                </li>
                                <li>
                                    <NavLink to='/services/apartments-for-sale'>Apartments For Sale</NavLink>

                                </li>
                                <li> 
                                    <NavLink to='/services/selling-property'>Selling a property</NavLink>

                                </li>
                            </ul>
                        </li>
                        <li>
                            <div onClick={() => { showInformation ? setInformation(false) : setInformation(true) }}
                                 className={styles.navigation__item}  ><span>Information</span> <i className="fa fa-caret-down"></i></div>

                            <ul onClick={close} className={`${styles.navigation__list__dropdown}   ${showInformation ? styles.navigation__list__dropdown__open : ''}`}>
                                <li >
                                    <NavLink to='/information/longterm-apartments'>Longterm Apartments FAQ</NavLink>

                                </li>
                                <li> 
                                    <NavLink to='/information/agency-fees'>Agency Fees</NavLink>

                                </li>
                                <li>
                                    <NavLink to='/information/bying-property'>Bying Property FAQ</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li onClick={close}>
                            <NavLink activeClassName={styles.active} className={styles.navigation__item} to='/contacts'>Contacts</NavLink>

                        </li>
                        <li onClick={close}>
                            <button  onClick={onOpenModal} className={styles.signIn}>
                            <i className="fa fa-sign-in" /><span>Sign in</span>
                            </button>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Navigation