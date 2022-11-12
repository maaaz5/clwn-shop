import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user-context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrownLg } from "../../asssets/crown.svg";
import "./navigation.styles.scss";

const Nav = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  };
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
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link to={"/auth"} className="nav-link">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
