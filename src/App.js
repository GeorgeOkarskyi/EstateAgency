import React from 'react';
import './normalize/Normalize.css'
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Contacts from './components/contacts/contacts';
import CatalogContainer from './components/catalog/catalogContainer';
import SliderView from './components/header/slider/slider';
import ModalContainer from './components/modal/modalContainer';
import Information from './components/information/information';
import Services from './components/services/services'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div>
      <ModalContainer />
      <Header />
      <Switch>
        <Route path='/contacts' render={() =>
          <Contacts ></Contacts>}>
        </Route>
        <Route path='/information' render={() =>
          <Information></Information>}>
        </Route>
        <Route path='/services' render={() =>
          <Services></Services>}>
        </Route>
        <Route path='/catalog' render={() =>
          <CatalogContainer  ></CatalogContainer>}>
        </Route>
        <Route exact path='/' render={() =>
          <SliderView ></SliderView>}>
        </Route>
      </Switch>
      <Footer></Footer>
    </div>
  );
}

export default App;
