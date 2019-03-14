import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    // debugger

    this.state = {

      value: "",
      charsLeft: this.props.maxChars
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
      charsLeft: this.props.maxChars - e.target.value.length
    }, () => console.log(this.state.value))
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input value={this.state.value} type="text" onChange={this.handleChange} />
        <div> {this.state.charsLeft} </div>
      </div>
    );
  }
}

export default TwitterMessage;
