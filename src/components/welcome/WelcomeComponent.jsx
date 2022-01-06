import { Component } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate , Link } from "react-router-dom";

class WelcomeComponent extends Component {
  render() {
    return (
      <div>
        Welcome.
        <Link to="/todos">here</Link>
      </div>
    );
  }
}

export default WelcomeComponent;
