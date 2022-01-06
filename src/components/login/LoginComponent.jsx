import { Component } from 'react';
import "./LoginComponent.css";
// ---Class Component
class LoginComponent extends Component {

  constructor(props){
    super(props);

    this.state = {
      username: "administrator",
      password: "password",
      hasLoginFailed: false,
      showFailedMessage: true
    }

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.loginClicked = this.loginClicked.bind(this);
  }


  render(){
    return (
      <div>
        <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>
        {/* State Components */}
        User Name:: <input type="text" name="username" value={this.state.username} onChange={this.handleUserNameChange}/>
        Password:: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        <button onClick={this.loginClicked}>Login</button>
      </div>
    );
  }  

  // Below is arrow function so no binding required in constructor
  handleChange = (event) => {
    console.log(event.target.value);
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    );
  }

  loginClicked(event) {
    if(this.state.username === "administrator" && this.state.password === "password"){
      //this.props.history.push("/welcome");

    } else {
      this.setState(
        {hasLoginFailed: true}
      );
    }
  }

  handleUserNameChange(event){
    console.log(event.target.value);
    this.setState(
      {
        username: event.target.value
      }
    );
  }

  handleUserPasswordChange = (event) => {
    console.log(event.target.value);
    this.setState(
      {
        password: event.target.value
      }
    );
    }

}


function ShowInvalidCredentials(props){
  if(props.hasLoginFailed){
    return  <div>Invalid Credentials</div>
  }
  return null
}

export default LoginComponent;