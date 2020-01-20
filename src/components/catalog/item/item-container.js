import React from 'react'
import Item from './item.jsx'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {setPropertyActionCreator, setLoadingActionCreator, setComentsActionCreator } from '../../../redux/reducers/property-reducer'

 
class ItemContainer extends React.Component{
  componentDidMount() {
    this.props.setLoading(true);
    axios.get(`http://localhost:3000/properties?id=${this.props.match.params.id}`)
        .then(res => {    
            this.props.setProperty(res.data);
            setTimeout(() => this.props.setLoading(false), 1000);
            
        })
    axios.get(`http://localhost:3000/coments?propertyId=${this.props.match.params.id}`)
    .then(res => {    
        this.props.setComents(res.data);
        setTimeout(() => this.props.setLoading(false), 1000);
        
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
      isLoading: state.propertyPage.isLoading,
      coments: state.propertyPage.coments
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
      setProperty: (property) =>{ 
        dispatch(setPropertyActionCreator(property));
      },
      setComents: (coments) =>{ 
        dispatch(setComentsActionCreator(coments));
      },
      setLoading: (isLoading) => {
        dispatch(setLoadingActionCreator(isLoading));
      }
    }
}
let  WithUrlDataContainer = withRouter(ItemContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainer);
 

 