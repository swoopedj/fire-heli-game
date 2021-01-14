import React, { Component } from 'react';
import Canvas from './Canvas';
import helicopterSVG from './helicopter.svg';
class Game extends Component {

    state = {
        gravity: 0.1,
        lift: -5,
        helicopter: {
            x: 100,
            y: 100,
            radius: 20,
            vertVelocity: 0,
            horizVelocity: 0,
            horizMomentum: 0,
            image: null
        }
    }

    constructor() {
        super();
        this.draw = this.draw.bind(this);
        this.canvasRef = React.createRef();
      }

    draw = (ctx) => {
        // const ctx = this.canvasRef.current.getContext("2d");
        ctx.fillStyle = "green";
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, this.canvasRef.current.width,   
                     this.canvasRef.current.height);           
        ctx.beginPath();
        ctx.arc(this.state.helicopter.x, this.state.helicopter.y, 
               this.state.helicopter.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        // ctx.drawImage(this.state.helicopter.image, 200, 200);
    }

    update = () => {
        let newVertVelocity = (this.state.helicopter.vertVelocity + this.state.gravity) * 0.9;
        // let newHorizVelocity = (this.state.helicopter.horizVelocity + this.state.gravity) * 0.9;

        console.log('newVertVelocity: ', newVertVelocity)

        this.setState({
            helicopter: {
              x: this.state.helicopter.x,
              y: Math.max(
                Math.min(
                  this.state.helicopter.y + newVertVelocity,
                  this.canvasRef.current.height - this.state.helicopter.radius
                ),
                0
              ),
              vertVelocity: newVertVelocity,
            //   horizVelocity: newHorizVelocity,
              radius: 20
            }
          });
    }

    componentDidMount() {
        // const helicopterImage = new Image();
        // helicopterImage.src = helicopterSVG;
        // helicopterImage.onLoad = () => {
        //     context.drawImage(image, 0, 0, this.canvasA.width, this.canvasA.height);
        // };
        var helicopterState = { ...this.state.helicopter };

        this.setState({helicopterState});

        // setInterval(() => {
        //     this.update();
        //     this.draw();
        // }, 1000 / 60);

        document.addEventListener("keydown", e => {
            console.log('keycode: ', e.keyCode)
            if (e.keyCode === 38) {
                this.setState({ 
                    helicopter: {
                        x: this.state.helicopter.x,
                        y: this.state.helicopter.y,
                        vertVelocity: this.state.helicopter.vertVelocity + this.state.lift,
                        radius: 20
                    }
                });
            }
            if (e.keyCode === 39) {
                this.setState({ 
                    helicopter: {
                        x: this.state.helicopter.x + 5,
                        y: this.state.helicopter.y,
                        vertVelocity: this.state.helicopter.vertVelocity,
                        radius: 20
                    }
                });
            }
            if (e.keyCode === 37) {
                this.setState({ 
                    helicopter: {
                        x: this.state.helicopter.x - 5,
                        y: this.state.helicopter.y,
                        vertVelocity: this.state.helicopter.vertVelocity,
                        radius: 20
                    }
                });
            }
        });
    }


    render() {
        return (
              <Canvas canvasRef={this.canvasRef} draw={this.draw} update={this.update} width={650} height={650} />
        );
    }
}
export default Game;