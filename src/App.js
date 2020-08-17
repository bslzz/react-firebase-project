import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavigationBar from './Components/Layout/NavigationBar';
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import LogOut from './Components/Auth/LogOut';
import Feeds from './Components/HomePage/Feeds';
import PostDetails from './Components/Posts/PostDetails';
import CreateNewPost from './Components/Posts/CreateNewPost';
import Firebase from 'firebase';
import './FirebaseInit';

const App = () => {
  const [uid, setUid] = useState(null);
  useEffect(() => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user && uid === null) {
        setUid({
          uid: user.uid,
        });
      } else if (!user && uid !== null) {
        setUid({
          uid: null,
        });
      }
    });
  }, [uid]);

  return (
    <>
      <Router>
        <NavigationBar uid={uid} />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route
            exact
            path="/"
            render={() => {
              return <Feeds uid={uid} />;
            }}
          ></Route>
          <Route
            path="/logout"
            render={() => {
              return <LogOut uid={uid} />;
            }}
          ></Route>
          <Route path="/post/:id" component={PostDetails} />
          <Route
            path="/create"
            render={() => {
              return <CreateNewPost uid={uid} />;
            }}
          ></Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
