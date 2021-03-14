import React, { Component } from 'react';
import treeTrunk1 from './tree_trunk_2.png';
import treeCanopy1 from './tree_canopy_3.png';
import leftEdgeCanopy from './tree_canopy_left_edge_1.png';
import rightEdgeCanopy from './tree_canopy_right_edge_1.png';

const TILE_WIDTH = 50;

class TerrainCanvas extends Component {

    constructor(props) {
        super(props);
        this.draw = this.draw.bind(this);
    }

    drawGround = (ctx, props) => {
        const { groundHeight, shoreX, lakeWidth, height, width } = props;

        ctx.fillStyle = '#33cc33';
        ctx.fillRect(0, height - groundHeight, shoreX, groundHeight);
        ctx.fillRect(shoreX + lakeWidth, height - groundHeight, width - (shoreX + lakeWidth), groundHeight);
    }

    drawUnderbrush = (ctx, props) => {
        const { groundHeight, brushHeight, shoreX, lakeWidth, height, width } = props;

        var img = new Image();
        img.src = treeTrunk1;
        img.onload = function() {
            var pattern = ctx.createPattern(img, 'repeat');
            ctx.fillStyle = pattern;
            ctx.fillRect(0, height - (groundHeight + brushHeight), shoreX, brushHeight);
            ctx.fillRect(shoreX + lakeWidth, height - (groundHeight + brushHeight), width - (shoreX + lakeWidth), brushHeight);
        };
    }

    drawCanopy = (ctx, props) => {
        const { groundHeight, brushHeight, canopyHeight, shoreX, lakeWidth, height, width } = props;

        var forestImg = new Image();
        forestImg.src = treeCanopy1;
        forestImg.onload = function() {
            var pattern = ctx.createPattern(forestImg, 'repeat');
            ctx.fillStyle = pattern;
            ctx.fillRect(0, height - (groundHeight + brushHeight + canopyHeight), shoreX, canopyHeight);
            ctx.fillRect(shoreX + lakeWidth, height - (groundHeight + brushHeight + canopyHeight), width - (shoreX + lakeWidth), canopyHeight);
        };

        // Left canopy edge (.png width == 8px)
        // var forestLeftEdgeImg = new Image();
        // forestLeftEdgeImg.src = leftEdgeCanopy;
        // forestLeftEdgeImg.onload = function() {
        //     var pattern = ctx.createPattern(forestLeftEdgeImg, 'no-repeat');
        //     ctx.fillStyle = pattern;
        //     ctx.fillRect(shoreX, height - (groundHeight + brushHeight + canopyHeight), 8, canopyHeight);
        //     ctx.fillRect(50, 50, 50, 50)
        // }
    }

    draw = (ctx) => {
        const { groundHeight, shoreX, lakeWidth, height, width } = this.props

        const tileCount = width / TILE_WIDTH;

        // Draw ground
        this.drawGround(ctx, this.props);

        // Draw under brush
        this.drawUnderbrush(ctx, this.props);

        // Draw forest canopy
        this.drawCanopy(ctx, this.props);

        // Draw water
        ctx.fillStyle = 'blue';
        ctx.fillRect(shoreX, height - groundHeight, lakeWidth, groundHeight);

    }

    componentDidMount() {
        const { terrainRef } = this.props;
        const ctx = terrainRef.current.getContext("2d");

        this.draw(ctx);

        // setInterval(() => {
        //     this.draw(ctx);
        //     this.update(terrainRef);
        // }, 1000 / 50);

    }

    render() {
        const { terrainRef, height, width, style } = this.props;

        return (
            <div>
                <canvas ref={terrainRef} width={width} height={height} style={style} />
            </div>
        );
    }

}

export default TerrainCanvas