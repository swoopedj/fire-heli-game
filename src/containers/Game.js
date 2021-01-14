import { connect } from 'react-redux';

import App from '../App';
import { moveObjects, updateObjects } from '../actions/index';

const mapDispatchToProps = dispatch => ({
    moveObjects: (keyCode) => {
        dispatch(moveObjects(keyCode));
    },
    updateObjects: (canvasRef, newVertVelocity) => {
        dispatch(updateObjects(canvasRef, newVertVelocity));
    }
});

const mapStateToProps = state => ({
    helicopter: state.helicopter,
    gravity: state.gravity,
    lift: state.lift,
});

const Game = connect(
    mapStateToProps,
    mapDispatchToProps
)(App);

export default Game;