import React from 'react';
import './normalize/Normalize.css'
import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Contacts from './components/contacts/contacts';
import CatalogContainer from './components/catalog/catalogContainer';
import SliderView from './components/header/slider/slider' ;
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App(props){
  return (
    <div>
        <Header   />
        <Route path='/contacts' render={() =>
          <Contacts ></Contacts>}>
        </Route>
        <Route path='/catalog' render={() =>
          <CatalogContainer  ></CatalogContainer>}>
        </Route>
        <Route exact path='/' render={() =>
          <SliderView ></SliderView>}>
        </Route>
  
      <Footer></Footer>
    </div>
  );
}

export default App;
