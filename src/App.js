import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './Components/Layout/NavigationBar';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';

const App = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
