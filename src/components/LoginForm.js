import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUsername = (e) => {
    console.log(e.target.value)
    this.setState({
      username: e.target.value,
      // password: this.state.password
    })
  }

  handlePassword = (e) => {
    console.log(e.target.value)
    this.setState({
      password: e.target.value,
      // username: this.state.username
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // debugger
    if(this.state.username !== "" && this.state.password !== ""){
      // console.log("we are here")
      // console.log(this.state)
      // console.log(this.props)
      this.props.onSubmit(this.state)
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleUsername}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
