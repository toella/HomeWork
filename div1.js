import React from 'react';
import div2 from './div2';

class div1 extends React.Component {
    render() {
        return (
            <div>
                <div2
                    text={this.props.text}
                />
            </div>
        );
    }
}
export default div1;

// export default class div1 extends Component {
//     render() {
//         return (
//             <div>
//                 <h3 onClick={() => this.changeIt(this.state.tardis.name)}>{this.state.tardis.name}</h3>

//             </div>
//         )
//     }

// }
