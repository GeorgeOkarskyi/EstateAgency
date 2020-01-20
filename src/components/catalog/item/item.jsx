import React from 'react';
import {NavLink, Switch, Route, Redirect } from "react-router-dom";
import styles from './item.module.scss';
import BasicInfo from './basic-info/basic-info'
import Comments from './coments/coments'
import MapContainer from '../../map/map'
import Gallery from './gallery/gallery'
import { LoopCircleLoading } from 'react-loadingg';


const Item = (props) => { 
    console.log(props)
    if(props.isLoading){
        return <div className={styles.loading}><LoopCircleLoading></LoopCircleLoading></div> 
    }
    return (

        <div className='container'>    
            <div className={styles.item}>
                <div className={styles.item_top}>
                    <nav className={styles.item_about_nav}>
                        <li>
                            <NavLink activeClassName={styles.active} className={styles.item_about_nav__item} to={`${props.match.url}/basic-info`}>Basic info</NavLink>

                        </li>
                        <li>
                            <NavLink activeClassName={styles.active} className={styles.item_about_nav__item} to={`${props.match.url}/details`}>Coments</NavLink>

                        </li>
                        <li>
                            <NavLink activeClassName={styles.active} className={styles.item_about_nav__item} to={`${props.match.url}/location`}>Location</NavLink>

                        </li>
                    </nav>
                    <div className={styles.item_buy}>
                        <button className={styles.item_buy__button}>BUY</button>
                    </div>
                </div>
                <div className={styles.item_block}>
                    <div className={styles.item_about}>
                        <Switch>
                            <Redirect exact from={`${props.match.url}/`} to={`${props.match.url}/basic-info`} />
                            <Route path={`${props.match.url}/basic-info`} render={() =>
                                <BasicInfo item={props.item} ></BasicInfo>}>
                            </Route>
                            <Route path={`${props.match.url}/details`} render={() =>
                                <Comments ></Comments>
                            }>
                            </Route>
                            <Route path={`${props.match.url}/location`} render={() =>
                                <div className={styles.map}>
                                    <MapContainer location={{ lat: 49.233772, lng: 28.41100 }}></MapContainer>
                                </div>
                            }>
                            </Route>
                        </Switch>
                    </div>
                    <div className={styles.item_gallery}>
                        <Gallery image={props.item.image}></Gallery>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Item;