export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const ON_KEY_UP = 'ON_KEY_UP';
export const ON_KEY_DOWN = 'ON_KEY_DOWN';
export const UPDATE_OBJECTS = 'UPDATE_OBJECTS';
export const CHANGE_HELI_STATE = 'CHANGE_HELI_STATE';

export const moveObjects = () => ({
  type: MOVE_OBJECTS
});

export const onKeyDown = event => ({
  type: ON_KEY_DOWN,
  event,
});


export const onKeyUp = event => ({
  type: ON_KEY_UP,
  event,
});

export const updateObjects = (canvasRef, newVertVelocity) => ({
  type: UPDATE_OBJECTS,
  canvasRef,
  newVertVelocity
});

export const changeHeliState = () => ({
  type: CHANGE_HELI_STATE
});