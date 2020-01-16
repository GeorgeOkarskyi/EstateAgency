import React from 'react';
import Login  from './log-in/log-in.jsx'
import RegisterContainer from './register/register-container'
import styles from './modal.module.scss';

 
 


let Modal = (props) => {   
  if (!props.state.show) {
    return null;
  }
  let onCloseModal = (e) => {
    e.stopPropagation();
    props.closeModal();
  }
  let onShowLogin = (e) => {
    e.stopPropagation();
    props.showLogin();
  }
  let onShowRegistration = (e) => {
    e.stopPropagation();
    props.showRegistration();
  }

  return (
 
      <div onClick={onCloseModal} className={`${styles.wrapper} ` } >
        <div onClick={(e) => e.stopPropagation()} className={styles.modal}>
          <button onClick={onCloseModal} className={styles.close} >
            X
        </button>

          <div className={styles.top}>
            <div onClick={onShowLogin} className={styles.top_item}  >login</div>
            <div onClick={onShowRegistration} className={styles.top_item} >registration</div>
          </div>
          <Login state={props.state}  ></Login>
          <RegisterContainer state={props.state} ></RegisterContainer>
        </div>
      </div>
 

  );

}


export default Modal