import React, { Component } from 'react';
import Canvas from './Canvas';

class Game extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const { moveObjects } = this.props;

        document.addEventListener("keydown", e => {
            moveObjects(e.keyCode);
        });
    }

    render() {
        return (
              <Canvas canvasRef={this.canvasRef} width={1000} height={650} {...this.props} />
        );
    }
}

export default Game;
