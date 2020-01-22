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
        filterByPriceActionCreator,
        filterByAreaActionCreator,
        changePriceFromTextActionCreator,
        changePriceToTextActionCreator,
        changeAreaFromTextActionCreator,
        changeAreaToTextActionCreator,
        resetFilterActionCreator
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
      console.log()
        return <Catalog 
              resetFilter={this.props.resetFilter}
              changeAreaToText={this.props.changeAreaToText}
              changeAreaFromText={this.props.changeAreaFromText}
              areaSlider={this.props.areaSlider}
              priceSlider={this.props.priceSlider}
              changeToText={this.props.changeToText}
              changeFromText={this.props.changeFromText}
              filterByPrice={this.props.filterByPrice}
              filterByArea={this.props.filterByArea}
              filterByCheckboxes={this.props.filterByCheckboxes}
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
      checkboxes: state.catalog.checkboxes,
      priceSlider: state.catalog.inputs.priceSlider,
      areaSlider: state.catalog.inputs.areaSlider

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
      filterByCheckboxes: (name, value, type)=>{
        dispatch(setCheckboxActionCreator(name, value, type));
        dispatch(filterPropertiesBedroomsActionCreator());
      },
      filterByPrice: (from, to)=>{ 
        dispatch(filterByPriceActionCreator(from, to));
      },
      filterByArea: (from, to)=>{
        dispatch(filterByAreaActionCreator(from, to));
      },
      changeFromText: (textTo, textFrom) => {
        if (textTo - textFrom < 1) {
          dispatch(changePriceToTextActionCreator(Number(textFrom) + 1));
        }
        dispatch(changePriceFromTextActionCreator(textFrom));
      },
      changeToText: (textTo, textFrom) => {
        if (textTo - textFrom < 1) {
          dispatch(changePriceFromTextActionCreator(Number(textTo) - 1));
        }
        dispatch(changePriceToTextActionCreator(textTo));
      },
      changeAreaFromText: (textTo, textFrom) =>{
        if (textTo - textFrom < 1) {
            dispatch(changeAreaToTextActionCreator(Number(textFrom) + 1));
        }
        dispatch(changeAreaFromTextActionCreator(textFrom));
      },
      changeAreaToText: (textTo, textFrom) =>{
        if (textTo - textFrom < 1) {
            dispatch(changeAreaFromTextActionCreator(Number(textTo) - 1));
        }
        dispatch(changeAreaToTextActionCreator(textTo));
      },
      resetFilter: () => {
        dispatch(resetFilterActionCreator());
      }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(catalogContainer);
