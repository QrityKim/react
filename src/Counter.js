import React, { Component } from "react";

// non-class_fields
// class Counter extends Component {
//  constructor(props) {
//    super(props);
//    super를 호출하는 이유는 우리가 Component
//    를 상속받고 constructor를 작성하게되면
//    기존의 클래스생성자가 덮어지기 때문이다 그래서
//    super를 호출하여 기존의 Component생성자를
//    호출 시켜주는 것이다.
//    this.state = {
//      number: 0
//    }
//    tihs.handleIncrease = this.handleIncrease.bind(this);
//    this.handleDecrease = this.handleDecrease.bind(this);
//  }
//  handleIncrease() {
//    this.setState({
//      number: this.state.number + 1
//    });
//  }
//  handleDecrease() {
//    this.setState({
//      number: this.state.number - 1
//    });
//  }
// }
class Counter extends Component {
  state = {
    number: 0
  }

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  // componentWillMount() {
  //   console.log("componentWillMount (deprecated)");
  // }

  componentDidMount() {
    console.log("componentDidMount");
  } // 브라우저에 component가 나타난 후에
  // 호출됨.

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    if (nextState.number % 5 === 0) return false;
    return true;
  } //부모 컴포넌트가 랜더링되어도 현재 컴포넌트는 랜더링 되지 않는다. (false 일때)

  // componentWillUpdate(nextProps, nextState) {
  //   console.log("componentWillUpdate (deprecated)");
  // }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    if (prevState.number !== this.state.number) {
      return prevState;
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate"+prevState.number+snapshot.number);
  }

  handleIncrease = () => {
    //destructuring 방식
    this.setState(
      ({number}) => ({
        number: number + 1
      })
    );

    // 기본적인 방식
    // this.setState({
    //   number: this.state.number + 1
    // });
  }

  handleDecrease = () => {
    // const { number } = this.state;
    // this.setState({
    //   number: number - 1
    // });

    // this.setState(
    //   ({ number }) => ({
    //     number: number - 1
    //   })
    // );

    this.setState(
      (state) => ({
        number: state.number - 1
      })
    );

    // this.setState({
    //   number: this.state.number - 1
    // });
    //this.setState는 객체를 이용하여 전달되는 값만
    //업데이트 시켜준다.
  } // class fileds방식으로 작성하면 버튼의 클릭 이벤트로 넘어갈때
// this 바인딩이 끊기게되는데 그걸 막아주기위해
// constructor에서 bind해주거나 지금처럼 화살표
// 함수로 작성하면 된다.
  render() {
    return (
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;
