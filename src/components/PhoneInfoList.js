import React, { Component } from "react";
import PhoneInfo from "./PhoneInfo";

class PhoneInfoList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.warn("onRemove not defined"),
    onUpdate: () => console.warn("onUpdate not defined"),
  }

  render() {
    console.log("render PhoneInfoList");
    const { data, onRemove, onUpdate } = this.props;
    // 부모 컴포넌트 App으로부터 받아온 data의 요소를
    // 하나하나 꺼내서 각 요소마다 함수를 실행한다.
    // 내용은 data의 요소 하나를 가져와 그 요소에
    // 적용돼있는 속성들을 자식 컴포넌트에게 전달한다.
    // 그리고 렌더링된 각각의 요소(컴포넌트) 들을 배열로
    // 저장한다.
    const list = data.map(
      info => (
        <PhoneInfo
          key={info.id}
          info={info}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )
    );

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default PhoneInfoList;
