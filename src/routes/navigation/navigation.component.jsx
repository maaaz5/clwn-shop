import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { UserContext } from "../../contexts/user-context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrownLg } from "../../asssets/crown.svg";
import "./navigation.styles.scss";

const Nav = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to={"/"}>
          <CrownLg className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link to={"/shop"} className="nav-link">
            SHOP
          </Link>

          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link to={"/auth"} className="nav-link">
              SIGN IN
            </Link>
          )}

          <CartIcon />
        </div>
        <CartDropdown />
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
