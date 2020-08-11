import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './Components/Layout/NavigationBar';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import LogOut from './Components/Auth/LogOut';
import Feeds from './Components/HomePage/Feeds';
import PostDetails from './Components/Posts/PostDetails';
import CreateNewPost from './Components/Posts/CreateNewPost';

const App = () => {
  return (
    <>
      <Router>
        <NavigationBar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Feeds} />
          <Route path="/logout" component={LogOut} />
          <Route path="/post/:id" component={PostDetails} />
          <Route path="/create" component={CreateNewPost} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
