import React, { Component } from 'react';
import mountainsImg1 from './mountains_1.png';

class MountainCanvas extends Component {

    constructor(props) {
        super(props);
        this.draw = this.draw.bind(this);
    }



    draw = (ctx) => {
        const { height, width } = this.props
        var img = new Image();
        img.src = mountainsImg1;
        img.onload = function() {
            var pattern = ctx.createPattern(img, 'no-repeat');
            ctx.fillStyle = pattern;
            ctx.fillRect(0, 0, width, height);
        }

        ctx.clearRect(0,0,width,height);

        ctx.drawImage(img, 0, 0, height, width);
    }

    componentDidMount() {
        const { mountainsRef } = this.props;
        const ctx = mountainsRef.current.getContext("2d");

        this.draw(ctx);

        // setInterval(() => {
        //     this.draw(ctx);
        //     this.update(mountainsRef);
        // }, 1000 / 50);

    }

    render() {
        const { mountainsRef, height, width, style } = this.props;

        const mountainsStyle = { ...style, zIndex: 1};

        return (
            <div>
                <canvas ref={mountainsRef} width={width} height={height} style={mountainsStyle} />
            </div>
        );
    }

}

export default MountainCanvas