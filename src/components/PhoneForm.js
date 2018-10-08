import React, { Component } from "react";

class PhoneForm extends Component {
  constructor() {
    super();
    console.log("constructor");
  }
  state = {
    name: '',
    phone: ''
  }

  componentDidMount() {
    console.log("componentDidMount");
  }



  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onCreate(this.state);
    this.setState({
      name: '',
      phone: ''
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log(prevState);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name"
        />
        <input
          placeholder="전화번호"
          value={this.state.phone}
          onChange={this.handleChange}
          name="phone"
        />
        <div>{this.state.name} {this.state.phone}</div>
        <button type="submit">등록</button>
      </form>
    );
  }
}

export default PhoneForm;
