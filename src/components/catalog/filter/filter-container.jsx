 
import Filter from './filter'
import {connect} from 'react-redux';

let mapStateToProps = (state) =>{
    return{
  
    }
  }
  
  let mapDispatchToProps = (dispatch) =>{
    return{ 
    }
  }
  
  const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);
  
  export default FilterContainer
