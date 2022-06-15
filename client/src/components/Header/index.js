import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1>Group-crit</h1>
      </Link>
      <div className="double-border"></div>
      <nav>
        <div>Today's Date</div>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
      <div className="double-border"></div>
    </header>
  );
};

export default Header;
