import React from 'react'; 
import './normalize/Normalize.css'
import './App.css';
import Header from './components/header/header'

function App(props) {
  return (
    <div>
      <Header state={props.state} dispatch={props.dispatch} />
    </div>
  );
}

export default App;
