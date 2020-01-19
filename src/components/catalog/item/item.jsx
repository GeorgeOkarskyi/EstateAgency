import React from 'react';
import { useParams, NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import styles from './item.module.scss';
import BasicInfo from './basic-info/basic-info'
import Comments from './coments/coments'
import MapContainer from '../../map/map'
import Gallery from './gallery/gallery'


const Item = (element) => {
    let { id } = useParams();
    let { path } = useRouteMatch();
 
    // let element =  props.current.find(element => element > props.id )

    // console.log(props)
    return (
        <div className='container'>
            {element.id}   
            <div className={styles.item}>

                <div className={styles.item_top}>
                    <nav className={styles.item_about_nav}>
                        <li>
                            <NavLink activeClassName={styles.active} className={styles.item_about_nav__item} to="basic-info">Basic info</NavLink>

                        </li>
                        <li>
                            <NavLink activeClassName={styles.active} className={styles.item_about_nav__item} to="details">Coments</NavLink>

                        </li>
                        <li>
                            <NavLink activeClassName={styles.active} className={styles.item_about_nav__item} to="location">Location</NavLink>

                        </li>
                    </nav>
                    <div className={styles.item_buy}>
                        <button className={styles.item_buy__button}>BUY</button>
                    </div>
                </div>
                <div className={styles.item_block}>
                    <div className={styles.item_about}>
                        <Switch>
                            <Route  path={`${path}/${id}/`} render={() =>
                                <BasicInfo ></BasicInfo>}>
                            </Route>
                            <Route path={`${path}/details`} render={() =>

                                <Comments ></Comments>

                            }>
                            </Route>
                            <Route path={`${path}/location`} render={() =>
                                <div className={styles.map}>
                                    <MapContainer location={{ lat: 49.233772, lng: 28.41100 }}></MapContainer>
                                </div>
                            }>
                            </Route>
                        </Switch>
                    </div>
                    <div className={styles.item_gallery}>
                        <Gallery image={element.image}></Gallery>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Item;