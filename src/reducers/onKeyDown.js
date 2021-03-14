function onKeyDown(state, action) {
    if (!action.event) return state;

    const { event } = action;

    const { helicopter, keysPressed } = state;

    if (event.keyCode === 38) {
        keysPressed.up = true;
    }
    if (event.keyCode === 39) {
        keysPressed.right = true;
    }
    if (event.keyCode === 37) {
        keysPressed.left = true;
    }
    if (event.keyCode === 32) {
        if (helicopter.bucketState === 'up') {
            // Trigger bucket drop animation

        }

        if (helicopter.bucketState === 'down') {
            // Trigger bucket raise animation

        }

        if (helicopter.bucketState === 'full') {
            // Trigger water release animation

        }
    }

    return {
        ...state,
        keysPressed
    }
}

export default onKeyDown;