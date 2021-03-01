import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { authentication } from "../firebase";
function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();

  const login = (event) => {
    event.preventDefault();
    authentication
      .signInWithEmailAndPassword(email, password)
      .then((authentication) => {
        history.push("/");
      })
      .catch((event) => alert(event.message));
  };
  const register = (event) => {
    event.preventDefault();
    authentication
      .createUserWithEmailAndPassword(email, password)
      .then((authentication) => {
        history.push("/");
      })
      .catch((event) => alert(event.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt="amazon logo"
        />
      </Link>

      <div className="login__form">
        <h1>Login</h1>
        <form>
          <h4>Emaill or mobile phone number</h4>
          <input
            value={email}
            onChange={(event) => setemail(event.target.value)}
            type="email"
          />
          <h4>password</h4>
          <input
            value={password}
            onChange={(event) => setpassword(event.target.value)}
            type="password"
          />
          <br />
          <button onClick={login} type="submit" className="login__mainsignin">
            Sign In
          </button>
          <p>
            By signing-in you agree to Amazon;s conditions of use and
            sale.Please see our privacy notice,our cookies notice and our
            intrest-based Ads notice
          </p>
          <p className="login__signUp">New to Amazon?</p>
          <button onClick={register} type="submit">
            Create your Amazon account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
