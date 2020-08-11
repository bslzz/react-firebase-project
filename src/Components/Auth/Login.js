import React, { useState } from 'react';

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const { email, password } = user;

  const loginChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };
  console.log(user);
  return (
    <div className="row loginForm">
      <div className="col s12 m4 offset-m4">
        <div className="card z-depth-5 hoverable">
          <div className="card-action teal lighten-1 white-text center-align">
            <h3>Login</h3>
          </div>
          <div className="card-content">
            <div className="input-field">
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
        </div>
      </div>
    </div>
  );
};

export default Login;
