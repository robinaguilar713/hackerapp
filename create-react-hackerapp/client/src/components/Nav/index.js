import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
import { Link } from "react-router-dom";


const NavBar = () => {

  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

    return (
      <nav>
        <div className="nav-wrapper #455a64 blue-grey darken-2">
          {
            !isAuthenticated && 
            (<button onClick={() => loginWithRedirect({})}>Log in</button>)
          }
          {
            isAuthenticated && <button onClick={() => logout()}>Log out</button>
          }
          {
            isAuthenticated && (
            <span>
              <Link to="/">Home</Link>&nbsp;
              <Link to="/profile">Profile</Link>
            </span>)
          }
        </div>
      </nav>
    );
  }

export default NavBar;
