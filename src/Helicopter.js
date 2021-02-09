import React, { Component } from 'react';
import helicopterImage1 from './heli_hover_1.png';
import helicopterImage2 from './heli_hover_2.png';

// class Helicopter extends Component {

//     componentDidMount() {
//         const { changeHeliState } = this.props
//         setInterval(() => {
//             changeHeliState();
//         }, 200);
//     }

//     render() {
//         const { helicopter } = this.props;

//         return (
//             <img ref="heli_sprite" alt="helicopter" src={helicopter.imageState === 1 ? helicopterImage1 : helicopterImage2} />
//         )
//     }
// }

function Helicopter (props) {

    const { helicopter } = props;

    return (
        <img ref="heli_sprite" alt="helicopter" src={helicopter.imageState === 1 ? helicopterImage1 : helicopterImage2} />
    )
}

export default Helicopter;
