import React from 'react';
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import styles from './item.module.scss';
import BasicInfo from './basic-info/basic-info'
import ComentsContainer from './coments/comentsContainer'
import MapContainer from '../../map/map'
import Gallery from './gallery/gallery'
import { LoopCircleLoading } from 'react-loadingg';


const Item = (props) => {
    
    if (props.isLoading) {
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
                            <NavLink activeClassName={styles.active} className={styles.item_about_nav__item} to={`${props.match.url}/coments`}>Coments</NavLink>

                        </li>
                        <li>
                            <NavLink activeClassName={styles.active} className={styles.item_about_nav__item} to={`${props.match.url}/location`}>Location</NavLink>

                        </li>
                    </nav>
                    {/* <a href={`http://www.facebook.com/sharer.php?u=http%3A%2F%2Flocalhost%3A3001%2Fitem%2F${props.match.params.id}%2Fbasic-info`} target="_blank">dfdfdf</a> */}
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
                            <Route path={`${props.match.url}/coments`} render={() =>
                                <ComentsContainer id={props.match.params.id}></ComentsContainer>
                            }>
                            </Route>
                            <Route path={`${props.match.url}/location`} render={() =>
                                <div className={styles.map}>
                                    <MapContainer location={props.item.coordinates}></MapContainer>
                                </div>
                            }>
                            </Route>
                        </Switch>
                    </div>
                    <div className={styles.item_gallery}>
                        <Gallery images={props.item.images}></Gallery>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Item;