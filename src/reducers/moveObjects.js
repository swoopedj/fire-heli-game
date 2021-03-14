function moveObjects(state, action) {
    const helicopter = { ...state.helicopter };
    const keysPressed = { ...state.keysPressed };

    if (keysPressed.up) {
        helicopter.vertVelocity = state.helicopter.vertVelocity + state.lift
    }
    if (keysPressed.right) {
        helicopter.x = state.helicopter.x + 3;
        helicopter.direction = 'right';
    }
    if (keysPressed.left) {
        helicopter.x = state.helicopter.x - 3;
        helicopter.direction = 'left';
    }

    return {
        ...state,
        helicopter,
        keysPressed
    }
}

export default moveObjects;