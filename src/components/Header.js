import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import SearchIcon from "@material-ui/icons/Search";
import { useStateValue } from "../StateProvider";
import { authentication } from "../firebase";

function Header() {
  const [{ basket, user }] = useStateValue();

  const login = () => {
    if (user) {
      authentication.signOut();
    }
  };

  console.log(user);

  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        />
      </Link>
      <div className="header__mainsearch">
        <input className="header__search" />
        <SearchIcon className="header__searchicon" />
      </div>
      <div className="header__options">
        <Link to={!user && "/login"} className="header__loginlink">
          <div onClick={login} className="header__option">
            <span className="headeroption__line1">Hello {user?.email} </span>
            <span className="headeroption__line2">
              {user ? "SignOut" : "SignIn"}
            </span>
          </div>
        </Link>
        <Link to="/" className="header__loginlink">
          <div className="header__option">
            <span className="headeroption__line1">Returns</span>
            <span className="headeroption__line2">Orders</span>
          </div>
        </Link>
        <Link to="/checkout">
          <div className="header__bacskey">
            <ShoppingBasketIcon />
            <span className="headeroption__line2 headeroptionbasket__count ">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
