import React from 'react';
import LongtermApartments from './agency-fees/agency-fees';
import ByingProperty from './bying-property/bying-property';
import AgencyFees from './longterm-apartments/longterm-apartments';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, useRouteMatch, Switch } from 'react-router-dom';



const Information = () => {
    let { path, url } = useRouteMatch();

    return (
        <div className="container">
            <nav>
                <ul>
                    <li>
                        <Link to={`longterm-apartments`}>Longterm Apartments FAQ</Link>
                    </li>
                    <li>
                        <Link to={`agency-fees`}>Agency Fees</Link>
                    </li>
                    <li>
                        <Link to={`bying-property`}>Bying Property FAQ</Link>
                    </li>
                </ul>
            </nav>
            <Switch>
                <Route path={`${path}/longterm-apartments`} render={() =>
                    <LongtermApartments ></LongtermApartments>}>
                </Route>
                <Route path={`${path}/bying-property`} render={() =>
                    <ByingProperty ></ByingProperty>}>
                </Route>
                <Route path={`${path}/agency-fees`} render={() =>
                    <AgencyFees ></AgencyFees>}>
                </Route>
            </Switch>



        </div>
    )
}


export default Information;