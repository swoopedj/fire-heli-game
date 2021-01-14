import { 
    MOVE_OBJECTS,
    UPDATE_OBJECTS } from '../actions';
import moveObjects from './moveObjects';
import updateObjects from './updateObjects';

const initialState = {
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
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case MOVE_OBJECTS:
            return moveObjects(state, action);
        case UPDATE_OBJECTS:
            return updateObjects(state, action);
        default:
            return state;
    }
}

export default reducer;