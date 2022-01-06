import { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate , Link } from "react-router-dom";

class HeaderComponent extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div><a href="http://www.todo-app.com" className="navbar-brand">Todo-app</a></div>
            <ul className="navbar-nav">
                <li ><Link className="nav-link" to="/welcome/todo-app">Home</Link></li>
                <li ><Link className="nav-link" to="/todos">Todos</Link></li>
            </ul>
            <ul className="navbar-nav navbar-collapse justify-content-end">
                <li ><Link className="nav-link" to="/login">Login</Link></li>
                <li ><Link className="nav-link" to="/logout">Logout</Link></li>
            </ul>
        </nav>
      </header>
    );
  }
}

export default HeaderComponent;