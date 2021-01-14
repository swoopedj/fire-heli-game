function updateObjects(state, action) {
    if (!action.canvasRef || !action.newVertVelocity) return state;
    const {canvasRef, newVertVelocity } = action;
    const helicopter = { ...state.helicopter };

    helicopter.vertVelocity = newVertVelocity;
    helicopter.y = Math.max(
        Math.min(
            helicopter.y + newVertVelocity,
            canvasRef.current.height - helicopter.radius
        ), 0);

    return {
        ...state,
        helicopter
    }
}

export default updateObjects;