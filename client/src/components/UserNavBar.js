import React from "react";
import {logoutUser} from "./jwt";
import { Link } from "react-router-dom";

function UserNavBar() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <Link className="navbar-brand" to="/"><img src="images/logo.png" alt="homepage" width="100" height="30"/></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/user">Account</Link>
        </li>
      </ul>
      
      <button onClick={logoutUser} className="btn btn-danger ml-3">Logout</button>
      
      
    </div>
  </nav>
}


export default UserNavBar;