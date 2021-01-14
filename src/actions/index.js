export const MOVE_OBJECTS = 'MOVE_OBJECTS';
export const UPDATE_OBJECTS = 'UPDATE_OBJECTS';

export const moveObjects = keyCode => ({
  type: MOVE_OBJECTS,
  keyCode,
});

export const updateObjects = (canvasRef, newVertVelocity) => ({
  type: UPDATE_OBJECTS,
  canvasRef,
  newVertVelocity
});