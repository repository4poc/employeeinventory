import { Component } from "react";
import { Link } from "react-router-dom";

class WelcomeComponent extends Component {
  render() {
    return (
      <div>
          <h1>Welcome!</h1>
          <div className="container">
                Click here to go to todo list <Link to="/todos">here</Link>
          </div>
      </div>
    );
  }
}

export default WelcomeComponent;
