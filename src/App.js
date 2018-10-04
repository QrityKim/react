import React, { Component } from 'react';
import Counter from "./Counter"
import MyName from "./MyName"
import logo from './logo.svg';
import './App.css';
import PhoneForm from "./components/PhoneForm";
// 이렇게 import할 수 있는 이유는 webpack
// 을 사용하기 때문인데 webpack은 나중에 빌드
// 단계에서 파일의 확장자별로 다른 동작을 한다.
// css를 import 할 때에는 나중에 프로젝트에서
// 사용한 프로젝트를 한 파일에 모두 결합해주는
// 작업을 진행하고 자바스크립트 파일을 불러오게 되면
// 코드들이 제대로 로딩되게끔 순서를 설정하고 하나의
// 파일로 합쳐준다. svg처럼 사전에 따로 설정을 하지않은
// 확장자의 경우 그냥 파일로서 불러온다음에 나중에 특정
// 경로에 사본을 만들어주게되고 그 사본의 경로를
// 텍스트로 받아오게 된다.
//

class App extends Component {
  handleCreate = (data) => {
    console.log(data);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input type="text" name="" value="d" />
        <button type="submit">submit</button>
        <MyName name="react" />
        <Counter />
        <div>
          <PhoneForm
            onCreate={this.handleCreate}
          />
        </div>
      </div>
    );
  }
}

export default App;
