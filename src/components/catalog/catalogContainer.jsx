 
import Catalog from './catalog';
import {connect} from 'react-redux';


 

let mapStateToProps = (state) =>{
    return{
      state: state.properties,
      
    }
}
  

let mapDispatchToProps = (dispatch) =>{
    return{
      
    }
}

const CatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Catalog);

export default CatalogContainer;
