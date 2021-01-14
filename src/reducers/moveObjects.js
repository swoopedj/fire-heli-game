function moveObjects(state, action) {
    if (!action.keyCode) return state;

    const { keyCode } = action;

    const helicopter = { ...state.helicopter };

    if (keyCode === 38) {
        helicopter.vertVelocity = state.helicopter.vertVelocity + state.lift
    }
    if (keyCode === 39) {
        helicopter.x = state.helicopter.x + 5
    }
    if (keyCode === 37) {
        helicopter.x = state.helicopter.x - 5
    }

    return {
        ...state,
        helicopter
    }
}

export default moveObjects;