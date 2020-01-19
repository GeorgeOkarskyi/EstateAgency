import React from 'react'
import Item from './item.jsx'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';



class ItemContainer extends React.Component{
  constructor(props){  
    super(props);   
     
  }  
  render (){ 
    return(
      <div>
         
        <Item  {...this.props.state.current.find(element => element > this.props.match.params.id)}   ></Item>
      </div>
    )
    
  }
}



let mapStateToProps = (state) =>{

    return{
      state: state.catalog
    }
}
  

let mapDispatchToProps = (dispatch) =>{
    return{
    
    }
}

let  WithUrlDataContainer = withRouter(ItemContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainer);
 

 