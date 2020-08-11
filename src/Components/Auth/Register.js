import React from 'react';

const Register = () => {
  return (
    <div className="row loginForm">
      <div className="col s12 m4 offset-m4">
        <div className="card z-depth-5 hoverable">
          <div className="card-action teal lighten-1 white-text center-align">
            <h3>Register</h3>
          </div>
          <div className="card-content">
            <div className="input-field">
              <input id="first_name" type="text" className="validate" />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field">
              <input id="last_name" type="text" className="validate" />
              <label htmlFor="last_name">Last Name</label>
            </div>
            <div className="input-field">
              <input id="email" type="email" className="validate" />
              <label htmlFor="email">Email</label>
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
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
