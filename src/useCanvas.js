import  { useRef, useEffect } from 'react';
import resizeCanvasToDisplaySize from './resizeCanvas'

const useCanvas = (draw, options = {}) => {

    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let frameCount = 0;
        let animationFrameId;

        const render = () => {
            frameCount++;
            resizeCanvasToDisplaySize(canvas)
            draw(context, frameCount, options.predraw, options.postdraw, options.x, options.y);
            animationFrameId = window.requestAnimationFrame(render);
        };

        render();
        
        // Cleanup
        return () => {
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw, options.predraw, options.postdraw]);

    return canvasRef
}

export default useCanvas;