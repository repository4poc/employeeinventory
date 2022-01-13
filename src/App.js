import React, { component } from "react";
import "./App.css";
import "./Bootstrap.css";
import WithNavigate from "./components/login/LoginComponent";
import WelcomeComponent from "./components/welcome/WelcomeComponent";
import ErrorComponent from "./components/error/ErrorComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EmployeesComponent from "./components/employees/EmployeesComponent";
import HeaderComponent from "./components/header/HeaderComponent";
import FooterComponent from "./components/footer/FooterComponent";
import LogoutComponent from "./components/logout/LogoutComponent";

function App() {
  return (
    <div className="App">
      <div>
        <BrowserRouter>
          <HeaderComponent />
          <Routes>
            <Route path="/" element={<WithNavigate />}></Route>
            <Route path="login" element={<WithNavigate />}></Route>
            <Route path="welcome" element={<WelcomeComponent />}></Route>
            <Route path="employees" element={<EmployeesComponent />}></Route>
            <Route path="logout" element={<LogoutComponent />}></Route>
            <Route path="*" element={<ErrorComponent />}></Route>
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
