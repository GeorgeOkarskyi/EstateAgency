import React from 'react';
import axios from 'axios';
import Catalog from './catalog'
import {connect} from 'react-redux';
import {setPropertiesActionCreator, 
        setLoadingActionCreator, 
        setCurrentPageActionCreator, 
        sortingPropertiesActionCreator,
        setCheckboxActionCreator,
        filterPropertiesBedroomsActionCreator,
        filterPropertiesRemovationActionCreator
      } from '../../redux/reducers/catalog-reducer'


class catalogContainer extends React.Component {

    componentDidMount() {
        this.props.setLoading(true); 
        axios.get('http://localhost:3000/properties')
            .then(res => {  
                this.props.setProperties(res.data);
                this.props.setLoading(false);
            })
    }
    render() {
        return <Catalog 
              filterByLastRenovation={this.props.filterByLastRenovation}
              filterByBedrooms={this.props.filterByBedrooms}
              checkboxes={this.props.checkboxes}
              sortingProperties={this.props.sortingProperties}
              postsPerPage={this.props.postsPerPage}
              properties={this.props.properties}
              isLoading={this.props.isLoading}
              currentPage={this.props.currentPage}
              setCurrentPage={this.props.setCurrentPage}
        />
    }
}

let mapStateToProps = (state) =>{
    return{
      properties: state.catalog.filtered,
      isLoading: state.catalog.isLoading,
      currentPage: state.catalog.currentPage,
      postsPerPage: state.catalog.postsPerPage ,
      checkboxes: state.catalog.checkboxes
    }
}

let mapDispatchToProps = (dispatch) =>{
    return{
      setProperties: (properties) =>{ 
        dispatch(setPropertiesActionCreator(properties));
      },
      setLoading: (isLoading)=>{
        dispatch(setLoadingActionCreator(isLoading));
      },
      setCurrentPage: (currentPage)=>{
        dispatch(setCurrentPageActionCreator(currentPage));
      },
      sortingProperties: (selectedOption)=>{
        dispatch(sortingPropertiesActionCreator(selectedOption));
      },
      filterByBedrooms: (name, value, type)=>{
        dispatch(setCheckboxActionCreator(name, value, type));
        dispatch(filterPropertiesBedroomsActionCreator());
      },
      filterByLastRenovation: (name, value)=>{
        dispatch(setCheckboxActionCreator(name, value));
        dispatch(filterPropertiesRemovationActionCreator());
      },
      

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(catalogContainer);
