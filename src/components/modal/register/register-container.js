// import React from 'react';
import {addUserActionCreator, 
    changeNameTextActionCreator, 
    changeEmailTextActionCreator,
    changePasswordTextActionCreator,
    passwordCheckActionCreator} 
    from '../../../redux/reducers/modal-reducer';
import Register from './register';
import {connect} from 'react-redux'
 
let mapStateToProps = (state) =>{
    return{
        regiastation: state.modal.regiastation,
        informWindow: state.modal.infoWindow,
        input: state.modal.input
    }
}
  
  let mapDispatchToProps = (dispatch) =>{
    return{
        addUser: (input) =>{
            dispatch(addUserActionCreator(input));
            dispatch(changePasswordTextActionCreator(''));
            dispatch(changeEmailTextActionCreator(''));
            dispatch(changeNameTextActionCreator(''));
      },
      passwordCheck: (passwordCheck) =>{
            dispatch(passwordCheckActionCreator(passwordCheck))
      },
      passwordChange: (text) =>{
            dispatch(changePasswordTextActionCreator(text));
      },
      emailChange: (text) =>{
            dispatch(changeEmailTextActionCreator(text));
      },
      nameChange: (text) =>{
            dispatch(changeNameTextActionCreator(text));
      }
    }
  }
  
  const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);
  
  export default RegisterContainer