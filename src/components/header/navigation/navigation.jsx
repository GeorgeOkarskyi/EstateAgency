import React, { useState } from 'react';
import styles from './navigation.module.scss';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';





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
                        <a href="/#">the<span>agency</span></a>
                    </div>
                    <input ref={checkbox} type="checkbox" className={styles.toggler}></input>
                    <div className={styles.hamburger}>
                        <div></div>
                    </div>
                    <ul className={styles.navigation__list}>
                        <li onClick={close} >
                            <Link activeClassName={styles.active} className={styles.navigation__item} exact to='/'>Home</Link>
                        </li>
                        <li onClick={close}>
                            <Link activeClassName={styles.active} className={styles.navigation__item} to='/catalog'>Catalog</Link>
                        </li>
                        <li>
                            <div onClick={() => { showServices ? setServices(false) : setServices(true) }}
                                activeClassName={styles.active}
                                className={`${styles.navigation__item}`}  ><span>Services</span> <i className="fa fa-caret-down"></i></div>

                            <ul onClick={close} className={`${styles.navigation__list__dropdown}  ${showServices ? styles.navigation__list__dropdown__open : ''} `}>
                                <li> 
                                    <Link to='/services/apartments-for-rent'>Apartments For Rent</Link>

                                </li>
                                <li>
                                    <Link to='/services/apartments-for-sale'>Apartments For Sale</Link>

                                </li>
                                <li> 
                                    <Link to='/services/selling-property'>Selling a property</Link>

                                </li>
                            </ul>
                        </li>
                        <li>
                            <div onClick={() => { showInformation ? setInformation(false) : setInformation(true) }}
                                activeClassName={styles.active} className={styles.navigation__item}  ><span>Information</span> <i className="fa fa-caret-down"></i></div>

                            <ul onClick={close} className={`${styles.navigation__list__dropdown}   ${showInformation ? styles.navigation__list__dropdown__open : ''}`}>
                                <li >
                                    <Link to='/information/longterm-apartments'>Longterm Apartments FAQ</Link>

                                </li>
                                <li> 
                                    <Link to='/information/agency-fees'>Agency Fees</Link>

                                </li>
                                <li>
                                    <Link to='/information/bying-property'>Bying Property FAQ</Link>
                                </li>
                            </ul>
                        </li>
                        <li onClick={close}>
                            <Link activeClassName={styles.active} className={styles.navigation__item} to='/contacts'>Contacts</Link>

                        </li>
                        <button onClick={close} onClick={onOpenModal} className={styles.signIn}>
                            <i className="fa fa-sign-in" /><span>Sign in</span>
                        </button>
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default Navigation