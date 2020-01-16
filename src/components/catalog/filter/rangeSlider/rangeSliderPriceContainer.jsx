 
import RagneSlider from "./rangeSlider"
import {
    changePriceFromTextActionCreator,
    changePriceToTextActionCreator
} from '../../../../redux/reducers/filter-reducer';
import {connect} from 'react-redux'



let mapStateToProps = (state) =>{
    return{
      state: state.filter.inputs.priceSlider
    }
  }
  let mapDispatchToProps = (dispatch) =>{
    return{
      changeFromText: (textTo, textFrom) =>{
            if (textTo - textFrom < 1) {
                dispatch(changePriceToTextActionCreator(Number(textFrom) + 1));
            }
            dispatch(changePriceFromTextActionCreator(textFrom));
      },
      changeToText: (textTo, textFrom) =>{
        if (textTo - textFrom < 1) {
            dispatch(changePriceFromTextActionCreator(Number(textTo) - 1));
        }
        dispatch(changePriceToTextActionCreator(textTo));
      }
    }
  }
  
  const RagneSliderPriceContainer = connect(mapStateToProps, mapDispatchToProps)(RagneSlider);
  
  export default RagneSliderPriceContainer