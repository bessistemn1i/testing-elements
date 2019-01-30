class Canvas {
    constructor() {
        this.events();
    }
    events() {
        const canvas = document.querySelector('#canvas');
        let ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.moveTo(100, 100);
        ctx.lineTo(80, 60);
        ctx.stroke();
    }
}

export default Canvas;