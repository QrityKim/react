import React, { Component } from 'react';
import Counter from "./Counter";
import MyName from "./MyName";
import logo from './logo.svg';
import './App.css';
import PhoneForm from "./components/PhoneForm";
import PhoneInfoList from "./components/PhoneInfoList";
import ValidationSample from "./components/ValidationSample";
import ScrollBox from "./components/ScrollBox";
import IterationSample from "./components/IterationSample";

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
  id = 2
  state = {
    information: [
      {
        id: 0,
        name: "k",
        phone: "010-0000-0000"
      },
      {
        id: 1,
        name: "l",
        phone: "010-0000-0001"
      }
    ],
    keyword: ""
  }
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  }
  handleCreate = (data) => {
    const { information } = this.state;
    this.setState({
      information: information.concat({ id: this.id++, ...data })
    })
    // console.log(data);
  }
  handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }
  handleUpdate = (id, data) => {
    const { information } = this.state;
    this.setState({
      information: information.map(
        info => id === info.id ?
        { ...info, ...data } : info
      )
    })
  }
  render() {
    const { information, keyword } = this.state;
    const filteredList = information.filter(
      info => info.name.indexOf(keyword) !== -1
    );

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
          <p>
            <input
              placeholder="검색 할 이름을 입력하세요"
              onChange={this.handleChange}
              value={keyword}
            />
          </p>
          <hr />
          <PhoneInfoList
            data={filteredList}
            onRemove={this.handleRemove}
            onUpdate={this.handleUpdate}
          />
        </div>
        <ValidationSample />
        <div>
          <ScrollBox ref={(ref) => this.scrollBox=ref}/>
          <button onClick={() => this.scrollBox.scrollToBottom()}>
            맨 밑으로
          </button>
        </div>
        <IterationSample />
      </div>
    );
  }
}

export default App;
