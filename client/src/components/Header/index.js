import React from "react";
import { Link } from "react-router-dom";
import Auth from "../../utils/auth";

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header>
      <div>
        <Link to="/" className="text-decoration-none text-body">
          <h1>Art Work</h1>
        </Link>
        <div className="double-border"></div>
        <div className="d-flex flex-row justify-content-between">
          <span className="english-font px-3 py-2"></span>
          <nav className="d-flex flex-row justify-content-end">
            {Auth.loggedIn() ? (
              <>
                <Link className="btn btn-lg btn-info m-2" to="/">
                  {Auth.getProfile().data.username}'s profile
                </Link>
                <button className="btn btn-lg btn-light m-2" onClick={logout}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-lg btn-info m-2" to="/login">
                  Login
                </Link>
                <Link className="btn btn-lg btn-light m-2" to="/signup">
                  Signup
                </Link>
              </>
            )}
          </nav>
        </div>

        <div className="double-border"></div>
      </div>
    </header>
  );
};

export default Header;
