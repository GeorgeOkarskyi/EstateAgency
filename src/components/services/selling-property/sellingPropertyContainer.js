import React from 'react';
import SellingProperty from './sellingProperty'
import {compose} from "redux";
import {connect} from "react-redux";
import {addProperty} from "../../../redux/reducers/adding-property-reducer2";

class sellingPropertyContainer extends  React.Component{

    render() {
        return <SellingProperty addProperty={this.props.addProperty}/>
    }
}
let mapStateToProps = (state) => {
    return{
    }
}


export default  compose(
    connect(mapStateToProps, {addProperty})
)(sellingPropertyContainer)
