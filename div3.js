import React from 'react';
import div3 from './div3';

class div2 extends React.Component {

    constructor(props){
        super(props);
        this.state={
            caps:false,
        };
    }

    changeIt(){
        this.setState(
            {
                caps: !this.state.caps,
            }
        )
    }
    
    render() {
        return (
            <div>
                <h3 onClick={() => this.changeIt()}>
                    {this.state.caps ?
                        this.props.text.toUpperCase():
                        this.props.text.toLowerCase}
                    
                    </h3>
                    </div>
        )
    }
}
export default App;

// export default class div3 extends Component {
//     render() {
//         return (
//             <div>
//                 <h3 onClick={() => this.changeIt(this.state.tardis.name)}>{this.state.tardis.name}</h3>

//             </div>
//         )
//     }

// }
