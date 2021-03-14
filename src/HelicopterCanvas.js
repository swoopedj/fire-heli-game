import React, { Component } from 'react';
import helicopterRight1 from './heli_hover_right_1.png';
import helicopterRight2 from './heli_hover_right_2.png';
import helicopterLeft1 from './heli_hover_left_1.png';
import helicopterLeft2 from './heli_hover_left_2.png';

class HelicopterCanvas extends Component {

    constructor(props) {
        super(props);
        this.draw = this.draw.bind(this);
        this.update = this.update.bind(this);
    }

    draw = (ctx) => {
        const { helicopterRef, helicopter } = this.props
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, helicopterRef.current.width,   
                     helicopterRef.current.height);

        var heliImage = new Image();
        if (helicopter.direction === 'left') {
            heliImage.src = helicopter.imageState === 1 ? helicopterLeft1 : helicopterLeft2;
        }

        if (helicopter.direction === 'right') {
            heliImage.src = helicopter.imageState === 1 ? helicopterRight1 : helicopterRight2;
        }
        
        if (helicopter.state === '') {
            // Animation play out
        }
        // Draw helicopter
        ctx.drawImage(heliImage, helicopter.x, helicopter.y, 60, 25);

    }

    update = () => {
        const { helicopterRef, gravity, helicopter, updateObjects, moveObjects } = this.props;
        let newVertVelocity = (helicopter.vertVelocity + gravity) * 0.9;

        updateObjects(helicopterRef, newVertVelocity);
        moveObjects();
    }

    componentDidMount() {
        const { helicopterRef, changeHeliState } = this.props;
        const ctx = helicopterRef.current.getContext("2d");

        setInterval(() => {
            this.draw(ctx);
            this.update(helicopterRef);
        }, 1000 / 50);

        setInterval(() => {
            changeHeliState();
        }, 200);

    }

    render() {
        const { helicopterRef, height, width, style } = this.props;

        return (
            <div>
                <canvas ref={helicopterRef} width={width} height={height} style={style} />
            </div>
        );
    }

}

export default HelicopterCanvas