import React, { Component } from 'react';
import helicopterImage from './helicopter.svg';

class Canvas extends Component {

    constructor(props) {
        super(props);
        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);
    }

    draw = (ctx) => {
        const { canvasRef, helicopter } = this.props
        ctx.fillStyle = "green";
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvasRef.current.width,   
                     canvasRef.current.height);           
        var heli = new Image();
        heli.src = helicopterImage;
        ctx.drawImage(heli, helicopter.x, helicopter.y, 50, 30);
    }

    update = () => {
        const { canvasRef, gravity, helicopter, updateObjects } = this.props;
        let newVertVelocity = (helicopter.vertVelocity + gravity) * 0.9;

        updateObjects(canvasRef, newVertVelocity);
    }

    componentDidMount() {
        const { canvasRef } = this.props;
        const ctx = canvasRef.current.getContext("2d");

        setInterval(() => {
            this.update(canvasRef);
            this.draw(ctx);
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