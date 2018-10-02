import React, {Component} from "react";

// class방식
class MyName extends Component {
  static defaultProps = {
    name: "기본이름"
  }
  render() {
    return (
      <div>
        name : <b>{this.props.name}</b>.
      </div>
    );
  }
}

// function방식
// const MyName = ({name}) => {
//   return (
//     <div>
//       {name}.
//     </div>
//   );
// };

export default MyName;
