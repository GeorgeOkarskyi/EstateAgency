import React from 'react';
import Login from './log-in/log-in.jsx'
import Register from './register/register'
import styles from './modal.module.scss';
import {closeModalActionCreator} from '../../../../redux/state';
import {Route, NavLink} from 'react-router-dom';



export default class Modal extends React.Component {

  render() {
    if (!this.props.state.modal.show) {
      return null;
    }
    let closeModal = (e) => { 
      e.stopPropagation();  
      this.props.dispatch(closeModalActionCreator())
    }
    return (
      <div onClick={closeModal} className={styles.wrapper}>
        <div onClick={(e)=>e.stopPropagation()}  className={styles.modal}>
          <button onClick={closeModal} className={styles.close} >
            X
          </button>

          <div className={styles.top}>
            <NavLink to='/login' className={styles.top_item} activeClassName={styles.top_item_active}>login</NavLink>
            <NavLink to='/register'className={styles.top_item} activeClassName={styles.top_item_active}>registration</NavLink>
          </div>
          <Route path='/login' render={() =>
            <Login></Login>}>
          </Route>
          <Route path='/register' render={() =>
            <Register></Register>}>
          </Route> 
        </div> 
      </div>
    );
  }
}

