function onKeyUp(state, action) {
    if (!action.event) return state;

    const { event } = action;

    const keysPressed = { ...state.keysPressed };

    if (event.keyCode === 38) {
        keysPressed.up = false;
    }
    if (event.keyCode === 39) {
        keysPressed.right = false;
    }
    if (event.keyCode === 37) {
        keysPressed.left = false;
    }

    return {
        ...state,
        keysPressed
    }
}

export default onKeyUp;