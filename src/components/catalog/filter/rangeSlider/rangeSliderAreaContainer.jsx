 
import RagneSlider from "./rangeSlider"
import {
    changeAreaFromTextActionCreator,
    changeAreaToTextActionCreator 
} from '../../../../redux/reducers/filter-reducer';
import {connect} from 'react-redux'



let mapStateToProps = (state) =>{
 
    return{
      state: state.filter.inputs.areaSlider
    }
  }
  
  let mapDispatchToProps = (dispatch) =>{
    return{
        changeFromText: (textTo, textFrom) =>{
            if (textTo - textFrom < 1) {
                dispatch(changeAreaToTextActionCreator(Number(textFrom) + 1));
            }
            dispatch(changeAreaFromTextActionCreator(textFrom));
      },
      changeToText: (textTo, textFrom) =>{
        if (textTo - textFrom < 1) {
            dispatch(changeAreaFromTextActionCreator(Number(textTo) - 1));
        }
        dispatch(changeAreaToTextActionCreator(textTo));
      }
    }
  }
  
  const RagneSliderAreaContainer = connect(mapStateToProps, mapDispatchToProps)(RagneSlider);
  
  export default RagneSliderAreaContainer