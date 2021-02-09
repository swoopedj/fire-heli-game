import {
    ON_KEY_DOWN,
    ON_KEY_UP,
    MOVE_OBJECTS,
    UPDATE_OBJECTS,
    CHANGE_HELI_STATE
} from '../actions';
import moveObjects from './moveObjects';
import onKeyDown from './onKeyDown';
import onKeyUp from './onKeyUp';
import updateObjects from './updateObjects';
import changeHeliState from './changeHeliState';

const initialState = {
    gravity: 0.1,
    lift: -2,
    helicopter: {
        x: 100,
        y: 100,
        radius: 20,
        vertVelocity: 0,
        horizVelocity: 0,
        horizMomentum: 0,
        imageState: 1
    },
    keysPressed: {
        left: false,
        right: false,
        up: false,
        down: false
    }
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case ON_KEY_DOWN:
            return onKeyDown(state, action);
        case ON_KEY_UP:
            return onKeyUp(state, action);
        case MOVE_OBJECTS:
            return moveObjects(state, action);
        case UPDATE_OBJECTS:
            return updateObjects(state, action);
        case CHANGE_HELI_STATE:
            return changeHeliState(state, action)
        default:
            return state;
    }
}

export default reducer;