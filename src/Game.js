import React, { Component } from 'react';
import Canvas from './Canvas';

class Game extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const { moveObjects, onKeyDown, onKeyUp } = this.props;

        document.addEventListener("keydown", moveObjects);
        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("keyup", onKeyUp);
    }

    render() {
        return (
              <Canvas canvasRef={this.canvasRef} width={1000} height={650} {...this.props} />
        );
    }
}

export default Game;
