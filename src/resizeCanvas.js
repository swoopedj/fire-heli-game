const resizeCanvas = canvas => {

    const { width, height } = canvas.getBoundingClientRect();

    if (canvas.width !== width || canvas.height !== height) {
        // Define canvas size according to device pixel ratio
        const { devicePixelRatio:ratio=1 } = window;
        const context = canvas.getContext('2d');
        canvas.width = width*ratio;
        canvas.height = height*ratio;
        context.scale(ratio, ratio);

        return true; // here you can return some usefull information like delta width and delta height instead of just true
        // this information can be used in the next redraw...
    };

    return false;
};

export default resizeCanvas;