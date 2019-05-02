import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import store from './redux/Store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
