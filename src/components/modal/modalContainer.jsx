import Modal from './modal';
import { closeModalActionCreator, showLoginActionCreator, showRegistActionCreator } from '../../redux/reducers/modal-reducer';
import {connect} from 'react-redux';


let mapStateToProps = (state) =>{
  return{
    state: state.modal
  }
}

let mapDispatchToProps = (dispatch) =>{
  return{
    showRegistration: () =>{
      dispatch(showRegistActionCreator());
    },
    showLogin: () =>{
      dispatch(showLoginActionCreator());
    },
    closeModal: () =>{
      dispatch(closeModalActionCreator());
    }
  }
}

const ModalContainer = connect(mapStateToProps, mapDispatchToProps)(Modal);

export default ModalContainer