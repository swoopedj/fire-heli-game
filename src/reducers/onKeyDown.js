function onKeyDown(state, action) {
    if (!action.event) return state;

    const { event } = action;

    const keysPressed = { ...state.keysPressed };

    if (event.keyCode === 38) {
        keysPressed.up = true;
    }
    if (event.keyCode === 39) {
        keysPressed.right = true;
    }
    if (event.keyCode === 37) {
        keysPressed.left = true;
    }

    return {
        ...state,
        keysPressed
    }
}

export default onKeyDown;