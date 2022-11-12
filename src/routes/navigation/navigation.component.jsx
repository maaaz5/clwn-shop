import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLg } from "../../asssets/crown.svg";
import "./navigation.styles.scss";

const Nav = () => {
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
          <Link to={"/auth"} className="nav-link">
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;
