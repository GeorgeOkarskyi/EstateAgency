import React from 'react';
import './normalize/Normalize.css'
import './App.css';
import {Route} from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Contacts from './components/contacts/contacts';
import Catalog from './components/catalog/catalog';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App(props) {
  return (
    <div>
      <Header state={props.state} dispatch={props.dispatch} />
      <Route path='/contacts' render={() =>
        <Contacts ></Contacts>}>
      </Route>
      <Route path='/catalog' render={() =>
        <Catalog ></Catalog>}>
      </Route>

      <Footer></Footer>
    </div>
  );
}

export default App;
