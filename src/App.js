import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import client from "./apollo";
import Home from "./components/Home";
import {getSignInPagePath,getProtectedPagePath} from './utils/paths';
import './App.css'
import PrivateRoute from './utils/private-route'
import MyDrive from './components/MyDrive';

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <Route
        path={getSignInPagePath()}
        exact
        component={Home}
      />
      <PrivateRoute
        path={getProtectedPagePath()}
        exact
        component={MyDrive}
      />
    </Router>
  </ApolloProvider>

  );
}

export default App;
