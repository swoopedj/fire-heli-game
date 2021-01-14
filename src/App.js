import  React, { Component } from 'react';
// import Canvas from './Canvas';
import Game from './Game';
import './App.css';

class App extends Component {

  render() {
    return (
      <Game />
    )
  }
};

// function App() {
  // const [xPos, setXPos] = useState(0);
  // const [yPos, setYPos] = useState(0);

  // const draw = (ctx, frameCount, predraw, postDraw, x, y) => {
  //   predraw();
  //   ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //   ctx.fillStyle = '#000000';
  //   ctx.beginPath();
  //   ctx.arc(x, y, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI);
  //   ctx.fillText('Testing...',25,25)
  //   ctx.fill();
  //   const gamePiece = component(ctx, 30, 30, "red", 10, 120);
    // setXPos(x + 1);
    // setYPos(y + 1);
  //   postDraw();
  // };

  // const component = (ctx, width, height, color, x, y) => {
  //   let context = ctx;
  //   context.fillStyle = color;
  //   context.fillRect(x, y, width, height);
  // }

  // return <Canvas draw={draw} x={xPos} y={yPos} />
  // return <Canvas draw={draw} x={200} y={400} />
// }

export default App;