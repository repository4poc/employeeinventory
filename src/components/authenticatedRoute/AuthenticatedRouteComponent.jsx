import React, { Component } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthenticationService from "../../services/authentication/AuthenticationService";

class AuthenticatedRouteComponent extends Component {
  render() {
    if (AuthenticationService.isUserLoggedIn === true) {
      return (<Outlet />);
    } else {
      return (<Navigate to="/login" replace={true} />);
    }
  }
}

export default AuthenticatedRouteComponent;
