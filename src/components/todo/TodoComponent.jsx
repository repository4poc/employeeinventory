import React,{ Component } from "react";

import LoginComponent from "../login/LoginComponent";
import WelcomeComponent from "../welcome/WelcomeComponent";
import ErrorComponent from "../error/ErrorComponent";
import { BrowserRouter as Router, Routes, Route, Navigate , Link } from "react-router-dom";
import ListTodosComponent from "../listtodos/ListTodosComponent";
import HeaderComponent from "../header/HeaderComponent";
import FooterComponent from "../footer/FooterComponent";

class TodoComponent extends Component {
  render() {
    return (
      <div>
        {/* Routes are used to navigate from one component to another*/}
        <Router>
        <HeaderComponent/>
            <Routes>
              <Route path="/" element={<LoginComponent />}></Route>
              <Route path="/login" element={<LoginComponent />}></Route>
              <Route path="/welcome" element={<WelcomeComponent />}></Route>
              <Route path="/todos" element={<ListTodosComponent />}></Route>
              <Route path="/404" element={<ErrorComponent />}></Route>
              <Route path="*" element={<Navigate replace to="/404" />} />
            </Routes>
            <FooterComponent/>
        </Router>

      </div>
    );
  }
}



export default TodoComponent;
