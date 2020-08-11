import React from 'react';

const Login = () => {
  return (
    <div className="row loginForm">
      <div className="col s12 m4 offset-m4">
        <div className="card z-depth-5 hoverable">
          <div className="card-action teal lighten-1 white-text center-align">
            <h3>Login</h3>
          </div>
          <div className="card-content">
            <div className="input-field">
              <label htmlFor="username">Username</label>
              <input type="text" />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input type="password" />
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
