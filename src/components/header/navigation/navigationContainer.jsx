import { showModalActionCreator } from '../../../redux/reducers/modal-reducer';
import Navigation from './navigation'
import {connect} from 'react-redux';



let mapStateToProps = (state) =>{
    return{
       state: state.modal
    }
  }
  
let mapDispatchToProps = (dispatch) =>{
    return{
        openModal: () =>{ 
            dispatch(showModalActionCreator());
      } 
    }
  }
  
const NavigationContainer = connect(mapStateToProps, mapDispatchToProps)(Navigation);
  


 

export default NavigationContainer