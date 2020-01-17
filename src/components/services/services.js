import React from 'react';
import {Route, Switch, Link, useRouteMatch} from 'react-router-dom';
import ApartmentsForRent from './apartments-for-rent/apartments-for-rent';
import ApartmentsForSale from './apartments-for-sale/apartments-for-sale';
import SellingProperty from './selling-property/selling-property';

const Services = () =>{
    let { path } = useRouteMatch();

    return(
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <Link to={`apartments-for-rent`}>Apartments For Rent</Link>
                    </li>
                    <li>
                        <Link to={`apartments-for-sale`}>Apartments For Sale</Link>
                    </li>
                    <li>
                        <Link to={`selling-property`}>Selling a property</Link>
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
                    <SellingProperty ></SellingProperty>}>
                </Route>
            </Switch>
        </div>
    )
}


export default Services;