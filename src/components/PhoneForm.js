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
    // submit버튼의 기본동작(페이지 새로고침)
    // 을 방지한다.
    this.props.onCreate(this.state);
    // 부모 컴포넌트로부터 받아온 함수에 자식컴포넌트
    // 즉 현재 컴포넌트의 state를 전달한다.
    this.setState({
      name: '',
      phone: ''
    })
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }
  render() {
    console.log("render");
    return (
      <form onSubmit={this.handleSubmit}>
      {/*submit 함수를 따로 만들어 바인딩*/}
        <input
          placeholder="이름"
          value={this.state.name}
          onChange={this.handleChange}
          name="name" // state로 보내지는
          // 객체의 프로퍼티명
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
