function moveObjects(state, action) {
    if (!action.event) return state;

    const helicopter = { ...state.helicopter };
    const keysPressed = { ...state.keysPressed };

    if (keysPressed.up) {
        helicopter.vertVelocity = state.helicopter.vertVelocity + state.lift
    }
    if (keysPressed.right) {
        helicopter.x = state.helicopter.x + 5
    }
    if (keysPressed.left) {
        helicopter.x = state.helicopter.x - 5
    }

    return {
        ...state,
        helicopter,
        keysPressed
    }
}

export default moveObjects;