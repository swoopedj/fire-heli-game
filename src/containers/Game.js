import { connect } from 'react-redux';

import App from '../App';
import {
    changeHeliState,
    moveObjects,
    onKeyDown,
    onKeyUp,
    updateObjects
} from '../actions/index';

const mapDispatchToProps = dispatch => ({
    moveObjects: (event) => {
        dispatch(moveObjects(event));
    },
    onKeyUp: (event) => {
        dispatch(onKeyUp(event));
    },
    onKeyDown: (event) => {
        dispatch(onKeyDown(event));
    },
    updateObjects: (canvasRef, newVertVelocity) => {
        dispatch(updateObjects(canvasRef, newVertVelocity));
    },
    changeHeliState: () => {
        dispatch(changeHeliState());
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