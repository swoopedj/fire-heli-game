import React, { Component } from 'react';
import helicopterImage1 from './heli_hover_1.png';
import helicopterImage2 from './heli_hover_2.png';
// import Helicopter from './Helicopter';

class Canvas extends Component {

    constructor(props) {
        super(props);
        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);
    }

    draw = (ctx) => {
        const { canvasRef, helicopter } = this.props
        ctx.fillStyle = "green";
        ctx.fillStyle = "grey";
        ctx.fillRect(0, 0, canvasRef.current.width,   
                     canvasRef.current.height);           
        var heli = new Image();
        heli.src = helicopter.imageState === 1 ? helicopterImage1 : helicopterImage2;
        
        // Draw helicopter
        ctx.drawImage(heli, helicopter.x, helicopter.y, 60, 25);
        // ctx.drawImage(<Helicopter />, helicopter.x, helicopter.y, 60, 25);

        // Need to find a way to move React components around the screen, animating them

        // Draw ground
        ctx.fillStyle = '#33cc33';
        ctx.fillRect(0, 640, 550, 10);
        ctx.fillRect(600, 640, 550, 10);
        // ctx.fillRect(0, 0, 150, 75);

        // Draw underbrush/tree trunks

        // Draw tree tops

        // Draw fire

    }

    update = () => {
        const { canvasRef, gravity, helicopter, updateObjects } = this.props;
        let newVertVelocity = (helicopter.vertVelocity + gravity) * 0.9;

        updateObjects(canvasRef, newVertVelocity);
    }

    componentDidMount() {
        const { canvasRef, changeHeliState } = this.props;
        const ctx = canvasRef.current.getContext("2d");

        setInterval(() => {
            this.draw(ctx);
            this.update(canvasRef);
        }, 1000 / 50);

        setInterval(() => {
            changeHeliState();
        }, 200);

    }

    render() {
        const { canvasRef, height, width } = this.props;

        return (
            <div>
                <canvas ref={canvasRef} width={width} height={height} />
            </div>
        );
    }

}

export default Canvas