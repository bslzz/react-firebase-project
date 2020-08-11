import React, { useState } from 'react';

const Register = () => {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const { firstName, lastName, email, password } = newUser;

  const registerChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };
  console.log(newUser);
  return (
    <div className="row loginForm">
      <div className="col s12 m4 offset-m4">
        <div className="card z-depth-5 hoverable">
          <div className="card-action teal lighten-1 white-text center-align">
            <h3>Register</h3>
          </div>
          <div className="card-content">
            <div className="input-field">
              <input
                id="first_name"
                type="text"
                className="validate"
                onChange={registerChange}
                name="firstName"
                value={firstName}
              />
              <label htmlFor="firstName">First Name</label>
            </div>
            <div className="input-field">
              <input
                id="last_name"
                type="text"
                className="validate"
                onChange={registerChange}
                name="lastName"
                value={lastName}
              />
              <label htmlFor="lastName">Last Name</label>
            </div>
            <div className="input-field">
              <input
                id="email"
                type="email"
                className="validate"
                onChange={registerChange}
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
                onChange={registerChange}
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
