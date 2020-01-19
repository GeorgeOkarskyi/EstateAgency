import React from 'react';
import axios from 'axios';
import Catalog from './catalog'
import {connect} from 'react-redux';
import {setPropertiesActionCreator, setLoadingActionCreator, setCurrentPageActionCreator} from '../../redux/reducers/catalog-reducer'


class catalogAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setLoading(true);
        axios.get('https://georgeokarskyi.github.io/users/properties.json')
            .then(res => {  
                this.props.setProperties(res.data);
                this.props.setLoading(false);
            })
    }
    render() {
        return <Catalog 
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
      properties: state.catalog.current,
      isLoading: state.catalog.isLoading,
      currentPage: state.catalog.currentPage,
      postsPerPage: state.catalog.postsPerPage 
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
      } 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(catalogAPIComponent);
