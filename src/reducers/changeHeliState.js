function changeHeliState(state) {
    const helicopter = { ...state.helicopter };

    helicopter.imageState = helicopter.imageState === 1 ? 2 : 1;

    return {
        ...state,
        helicopter
    }
}

export default changeHeliState;