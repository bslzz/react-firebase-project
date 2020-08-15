import React, { useState } from 'react';
import Firebase from 'firebase';

const Login = () => {
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userInput;

  const loginChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = (e) => {
    e.preventDefault();
    const M = window.M;
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Login Success');
        M.toast({ html: 'Login Success', classes: 'green darken-2' });
      })
      .catch((err) => {
        console.log(err);

        !email || !password
          ? M.toast({
              html: 'Enter all fields',
              classes: 'deep-orange lighten-1',
            })
          : M.toast({
              html: 'Login Failed',
              classes: 'deep-orange lighten-1',
            });
      });
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <form onSubmit={submitLogin} className="card z-depth-5 hoverable">
            <div className="card-action teal lighten-1 white-text center-align">
              <h3>Login</h3>
            </div>
            <div className="card-content">
              <div className="input-field">
                <i className="material-icons prefix">mail</i>
                <input
                  id="email"
                  type="email"
                  className="validate"
                  onChange={loginChange}
                  name="email"
                  value={email}
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">vpn_key</i>
                <input
                  id="password"
                  type="password"
                  className="validate"
                  onChange={loginChange}
                  name="password"
                  value={password}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field">
                <button
                  className="btn-large waves-effect waves-dark"
                  style={{ width: '100%' }}
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
