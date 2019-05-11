import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Characters from './components/Characters';
import CustomCharacter from './components/CustomCharacter';
import Equipment from './components/Equipment';
import Abilities from './components/Abilities';
import LoginScreen from './components/LoginScreen';
import store from './redux/Store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Route exact path="/" component={Home}/>
          <Route exact path="/characters" component={Characters}/>
          <Route path="/characters/custom" component={CustomCharacter} />
          <Route path="/equipment" component={Equipment}/>
          <Route path="/abilities" component={Abilities}/>
          <Route path="/login" component={LoginScreen}/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
