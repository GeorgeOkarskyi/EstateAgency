import React from 'react';
import LongtermApartments from './agency-fees/agency-fees';
import ByingProperty from './bying-property/bying-property';
import AgencyFees from './longterm-apartments/longterm-apartments';
import { Link } from 'react-router-dom';
import { Route, useRouteMatch, Switch } from 'react-router-dom';
import styles from './information.module.scss'



const Information = () => {
    let { path  } = useRouteMatch();

    return (
        <div className={`${"container"} `}> 
            <div className={styles.information}>
                <nav >
                    <ul className={styles.navigation}>
                        <li className={styles.navigation_item}>
                            <Link to={`longterm-apartments`}>Longterm Apartments FAQ</Link>
                        </li>
                        <li className={styles.navigation_item}>
                            <Link to={`agency-fees`}>Agency Fees</Link>
                        </li>
                        <li className={styles.navigation_item}>
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
               
 
        </div>
    )
}


export default Information;