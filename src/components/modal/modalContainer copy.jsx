import React from 'react';
import Modal from './modal'
import { closeModalActionCreator, showLoginActionCreator, showRegistActionCreator } from '../../redux/reducers/modal-reducer';
 
 



let ModalContainer = (props) => {
  if (!props.state.modal.show) {
    return null;
  }
  let closeModal = () => {
    props.dispatch(closeModalActionCreator());
  }
  let showLogin = () => { 
    props.dispatch(showLoginActionCreator());
  }
  let showRegistration = () => {
    props.dispatch(showRegistActionCreator());
  }
  return (
      <Modal showRegistration={showRegistration} 
              showLogin={showLogin}
              closeModal={closeModal}
              dispatch={props.dispatch} state={props.state}/>
  );
}


export default ModalContainer