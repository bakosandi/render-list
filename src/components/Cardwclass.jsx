import { Component } from "react";
// function Card(props) {
//     return (
//       <div>
//         <h1>{props.name}</h1>
//         <p>{props.details}</p>
//       </div>
//     );
//   }

//   export default Card;
class Cardwithclass extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>{this.props.details}</p>
      </div>
    );
  }
}
export default Cardwithclass;
