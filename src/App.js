import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';

const Homepage = () => (
  <Home />
);

const Loginpage = () => (
  <Login />
);


function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={Loginpage} />
    </div>
  </Router>
  );
}

export default App;
