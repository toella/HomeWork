import React from 'react';
import div1 from './div1';

class app extends React.Component{
  render(){
    return(
      <div>
        <div1
          text={this.props.text}
          />
      </div>
    );
  }
}
export default App;

// export default class App extends Component{
//   state = {
//     tardis: {
//       name: 'Time and Relative Dimension in Space',
//       caps: false,}
//     }

//   changeIt = (text) => {
//     if (this.state.tardis.caps) {
//       this.setState({
//         tardis: {
//           name: text.toLowerCase(),
//           caps: false
//         }
//       })
//     } else {
//       this.setState({
//         tardis: {
//           name: text.toUpperCase(),
//           caps: true
//         }
//       })
//     }
//   }
//   render(){
//     return(
//       <div>
//         <h3 onClick={() => this.changeIt(this.state.tardis.name)}>{this.state.tardis.name}</h3>
        
//       </div>
//     )
//   }
  
// }
// export default App
