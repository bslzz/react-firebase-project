import React, { useState } from 'react';

const Register = () => {
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [registerField, setRegisterField] = useState('');

  const { firstName, lastName, email, password } = newUser;

  const registerChange = (e) => {
    setNewUser({
      ...newUser,
      [e.target.name]: e.target.value,
    });
  };

  const submitRegister = (e) => {
    e.preventDefault();
    setRegisterField(newUser);
    console.log(registerField);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m6 offset-m3">
          <form onSubmit={submitRegister} className="card z-depth-5 hoverable">
            <div className="card-action teal lighten-1 white-text center-align">
              <h3>Register</h3>
            </div>
            <div className="card-content">
              <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="first_name"
                  type="text"
                  className="validate"
                  onChange={registerChange}
                  name="firstName"
                  value={firstName}
                />
                <label htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">account_circle</i>
                <input
                  id="last_name"
                  type="text"
                  className="validate"
                  onChange={registerChange}
                  name="lastName"
                  value={lastName}
                />
                <label htmlFor="last_name">Last Name</label>
              </div>
              <div className="input-field">
                <i className="material-icons prefix">mail</i>
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
                <i className="material-icons prefix">vpn_key</i>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
