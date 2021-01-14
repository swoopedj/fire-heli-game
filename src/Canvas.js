import React, { Component } from 'react';
// import useCanvas from './useCanvas';
import Helicopter from './Helicopter';

// const _predraw = (context) => {};
// const _postdraw = () => {};

class Canvas extends Component {
    // const { draw, predraw = _predraw, postdraw = _postdraw, x, y, ...rest } = props
    // const canvasRef = useCanvas(draw, {predraw, postdraw, x, y})

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { canvasRef, draw, update } = this.props;
        const ctx = canvasRef.current.getContext("2d");

        setInterval(() => {
            update();
            draw(ctx);
        }, 1000 / 60);
    }

    render() {
        const { canvasRef, height, width } = this.props;

        return (
            <canvas ref={canvasRef} width={width} height={height} />
        );
    }

}

export default Canvas