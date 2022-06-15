import React from "react";

const Header = () => {
  return (
    <header>
      <h1>Group-crit</h1>
      <div className="double-border"></div>
      <nav>
        <div>Today's Date</div>
        <ul>
          <li>Login</li>
          <li>SignUp</li>
        </ul>
      </nav>
      <div className="double-border"></div>
    </header>
  );
};

export default Header;
