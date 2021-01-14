import React, { Component } from 'react';
import Canvas from './Canvas';
class Game extends Component {
    constructor(props) {
        super(props);
        this.draw = this.draw.bind(this);
        this.canvasRef = React.createRef();
    }

    draw = (ctx) => {
        const { helicopter } = this.props
        ctx.fillStyle = "green";
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, this.canvasRef.current.width,   
                     this.canvasRef.current.height);           
        ctx.beginPath();
        ctx.arc(helicopter.x, helicopter.y, 
               helicopter.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
    }

    update = (canvasRef) => {
        const { gravity, helicopter, updateObjects } = this.props;
        let newVertVelocity = (helicopter.vertVelocity + gravity) * 0.9;

        updateObjects(canvasRef, newVertVelocity);
    }

    componentDidMount() {
        const { moveObjects } = this.props;

        document.addEventListener("keydown", e => {
            moveObjects(e.keyCode);
        });

    }


    render() {
        return (
              <Canvas canvasRef={this.canvasRef} draw={this.draw} update={this.update} width={1000} height={650} />
        );
    }
}
export default Game;