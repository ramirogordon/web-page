import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Characters from './components/Characters';
import Equipment from './components/Equipment';
import Abilities from './components/Abilities';
import store from './redux/Store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/characters" component={Characters}/>
          <Route path="/equipment" component={Equipment}/>
          <Route path="/abilities" component={Abilities}/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
