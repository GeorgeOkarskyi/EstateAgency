import React from 'react';
import {Route, Switch, Link, useRouteMatch, NavLink} from 'react-router-dom';
import ApartmentsForRent from './apartments-for-rent/apartments-for-rent';
import ApartmentsForSale from './apartments-for-sale/apartments-for-sale';
import SellingPropertyContainer from './selling-property/sellingPropertyContainer.js';
import styles from './services.module.scss'

const Services = () =>{
    let { path } = useRouteMatch();

    return(
        <div className="container">
        <div className={styles.services}>
            <nav>
                <ul className={styles.navigation}>
                    <li className={styles.navigation_item}>
                        <NavLink className={styles.navigation_item_ref} activeClassName={styles.navigation_item_active} to={`apartments-for-rent`}>Apartments For Rent</NavLink>
                    </li>
                    <li className={styles.navigation_item}>
                        <NavLink className={styles.navigation_item_ref} activeClassName={styles.navigation_item_active} to={`apartments-for-sale`}>Apartments For Sale</NavLink>
                    </li>
                    <li className={styles.navigation_item}>
                        <NavLink className={styles.navigation_item_ref} activeClassName={styles.navigation_item_active} to={`selling-property`}>Selling a property</NavLink>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path={`${path}/apartments-for-rent`} render={() =>
                    <ApartmentsForRent ></ApartmentsForRent>}>
                </Route>
                <Route path={`${path}/apartments-for-sale`} render={() =>
                    <ApartmentsForSale ></ApartmentsForSale>}>
                </Route>
                <Route path={`${path}/selling-property`} render={() =>
                    <SellingPropertyContainer></SellingPropertyContainer>}>
                </Route>
            </Switch>
        </div>
        </div>
    )
}


export default Services;
