import React, { Component } from 'react';
import HelicopterCanvas from './HelicopterCanvas';
import TerrainCanvas from './TerrainCanvas';

const DIMENSIONS = {
    height: 750,
    width: 1400
};

const TERRAIN_DIMENSIONS = {
    groundHeight: 10,
    brushHeight: 20,
    canopyHeight: 40,
    shoreX: 550,
    lakeWidth: 50
}

const containerStyle = {
    position: 'relative'
};

const canvasStyle = {
    position: 'absolute',
    top: '0px',
    left: '0px'
};

class Game extends Component {
    constructor(props) {
        super(props);
        this.helicopterRef = React.createRef();
        this.terrainRef = React.createRef();
    }

    componentDidMount() {
        const { moveObjects, onKeyDown, onKeyUp } = this.props;

        document.addEventListener("keydown", moveObjects);
        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("keyup", onKeyUp);
    }

    render() {
        return (
            <div style={containerStyle}>
              <HelicopterCanvas helicopterRef={this.helicopterRef} style={canvasStyle} width={DIMENSIONS.width} height={DIMENSIONS.height} {...this.props} />
              <TerrainCanvas terrainRef={this.terrainRef} style={canvasStyle} width={DIMENSIONS.width} height={DIMENSIONS.height} {...TERRAIN_DIMENSIONS} {...this.props} />
            </div>

        );
    }
}

export default Game;
