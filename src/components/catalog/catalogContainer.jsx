import React from 'react';
import Catalog from './catalog'
import {connect} from 'react-redux';
import {
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
    resetFilterActionCreator,
    getProperties
} from '../../redux/reducers/catalog-reducer'
import {compose} from "redux";
import {
    getAreaSliderData, getCheckboxesData,
    getCurrentPage,
    getFilteredPropertiesSuperSelector,
    getIsLoading, getPostsPerPageData, getPriceSliderData
} from "../../redux/selectors/catalog-selectors";


class catalogContainer extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.props.getProperties();
    }

    render() {
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

let mapStateToProps = (state) => {
    console.log("RENDER")
    return {
        properties: getFilteredPropertiesSuperSelector(state),
        isLoading: getIsLoading(state),
        currentPage: getCurrentPage(state),
        postsPerPage: getPostsPerPageData(state),
        checkboxes: getCheckboxesData(state),
        priceSlider: getPriceSliderData(state),
        areaSlider: getAreaSliderData(state)

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageActionCreator(currentPage));
        },
        sortingProperties: (selectedOption) => {
            dispatch(sortingPropertiesActionCreator(selectedOption));
        },
        filterByCheckboxes: (name, value, type) => {
            dispatch(setCheckboxActionCreator(name, value, type));
            dispatch(filterPropertiesBedroomsActionCreator());
        },
        filterByPrice: (from, to) => {
            dispatch(filterByPriceActionCreator(from, to));
        },
        filterByArea: (from, to) => {
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
        changeAreaFromText: (textTo, textFrom) => {
            if (textTo - textFrom < 1) {
                dispatch(changeAreaToTextActionCreator(Number(textFrom) + 1));
            }
            dispatch(changeAreaFromTextActionCreator(textFrom));
        },
        changeAreaToText: (textTo, textFrom) => {
            if (textTo - textFrom < 1) {
                dispatch(changeAreaFromTextActionCreator(Number(textTo) - 1));
            }
            dispatch(changeAreaToTextActionCreator(textTo));
        },
        resetFilter: () => {
            dispatch(resetFilterActionCreator());
        },
        getProperties: () => {
            dispatch(getProperties());
        }
    }
}

export default  compose(
    connect(mapStateToProps, mapDispatchToProps)
)(catalogContainer)

