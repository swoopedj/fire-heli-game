import React, { Component } from 'react';

class Canvas extends Component {

    componentDidMount() {
        const { canvasRef, draw, update } = this.props;
        const ctx = canvasRef.current.getContext("2d");

        setInterval(() => {
            update(canvasRef);
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