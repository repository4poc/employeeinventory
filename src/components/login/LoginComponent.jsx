import { Component } from "react";
import AuthenticationService from "../../services/authentication/AuthenticationService.js";
import "./LoginComponent.css";
import { useNavigate } from "react-router-dom";
import WelcomeComponent from "../welcome/WelcomeComponent.jsx";

// ---Class Component
class LoginComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "administrator",
      password: "password",
      hasLoginFailed: false,
      showFailedMessage: true,
    };

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <div className="container">
          <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
          {/* State Components */}
          <label>User Name:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleUserNameChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <button className="btn btn-success" onClick={this.loginClicked}>
            Login
          </button>
        </div>
      </div>
    );
  }

  // Below is arrow function so no bindiShowInvalidCredentialsng required in constructor
  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  loginClicked(event) {
    if (
      this.state.username === "administrator" &&
      this.state.password === "password"
    ) {
      this.setState({ hasLoginFailed: false });
      AuthenticationService.registerSuccessfulLogin(
        this.state.username,
        this.state.password
      );
      this.props.navigate("/employees");
      window.location.reload(false);
    } else {
      this.setState({ hasLoginFailed: true });
    }
  }

  handleUserNameChange(event) {
    console.log(event.target.value);
    this.setState({
      username: event.target.value,
    });
  }

  handleUserPasswordChange = (event) => {
    console.log(event.target.value);
    this.setState({
      password: event.target.value,
    });
  };
}

function ShowInvalidCredentials(props) {
  if (props.hasLoginFailed) {
    return <div className="alert alert-warning">Invalid Credentials</div>;
  }
  return null;
}

function WithNavigate(props) {
  let navigate = useNavigate();
  return <LoginComponent {...props} navigate={navigate} />;
}

export default WithNavigate;
