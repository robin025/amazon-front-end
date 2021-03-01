import React, { useEffect } from "react";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";
import { authentication } from "./firebase";

function App() {
  const [{ basket, user }, dispatch] = useStateValue();
  //from last part
  useEffect(() => {
    const unsubscribe = authentication.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //else user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //Any clean up operations go in here
      unsubscribe();
    };
  }, []);
  //last part

  console.log(user);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <HomePage />
          </Route>
          <Route exact path="/checkout">
            <Header />

            <Checkout />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
