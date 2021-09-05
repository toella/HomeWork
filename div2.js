import React from "react"
import div3 from './div3';

class div2 extends React.Component {
    render() {
        return (
            <div>
                <div3
                    text={this.props.text}
                />
                <div
                    text={this.props.text}
                />
            </div>
        );
    }
}
export default div2;

// export default class div2 extends Component {
//     render() {
//         return (
//             <div>
//                 <h3 onClick={() => this.changeIt(this.state.tardis.name)}>{this.state.tardis.name}</h3>

//             </div>
//         )
//     }

// }
