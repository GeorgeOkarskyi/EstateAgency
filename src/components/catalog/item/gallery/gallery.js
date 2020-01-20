import React from 'react'

import ImageGallery from 'react-image-gallery';
 

 
export default class Gallery extends React.Component {
  
  render() {
    if(this.props.images == undefined){
      return null
    }
 
    return <ImageGallery   items={this.props.images} />;
  }
}