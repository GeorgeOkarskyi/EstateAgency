import React from 'react'
import Item from './item.jsx'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {setPropertyActionCreator, setLoadingActionCreator } from '../../../redux/reducers/property-reducer'

 
class ItemContainer extends React.Component{
  componentDidMount() {
    this.props.setLoading(true);
    axios.get('https://georgeokarskyi.github.io/users/properties.json')
        .then(res => {    
          console.log(this.props.match.params.id)
            this.props.setProperty(res.data.find(element => element.id == this.props.match.params.id));
            this.props.setLoading(false);
        })
}
  render (){   
    return(
      <div>
        <Item {...this.props}></Item>
      </div>
    )
    
  }
}

let mapStateToProps = (state) =>{
    return{
      item: state.propertyPage.property,
      isLoading: state.propertyPage.isLoading
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
      setProperty: (property) =>{ 
        dispatch(setPropertyActionCreator(property));
      },
      setLoading: (isLoading) => {
        dispatch(setLoadingActionCreator(isLoading));
      }
    }
}
let  WithUrlDataContainer = withRouter(ItemContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainer);
 

 