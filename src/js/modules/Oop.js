class Oop {
    constructor() {
        this.events()
    }

    events() {
        let eBlock = document.querySelector('.eventBlock');
        let blockToMove = document.querySelector('.blockToMove');

        let arrOfColors = [
            'green',
            'black',
            'yellow',
            'blue',
            'red'
        ]

        function generateColors(arr) {
            return arr[Math.floor((Math.random() * arr.length - 1)) + 1];
        }

        blockToMove.addEventListener('mousedown', function (evt) {
            evt.preventDefault();

            let start = {
                x: evt.clientX,
                y: evt.clientY
            };

            function startToMove(evtMove) {
                evt
            }
            document.addEventListener('mousemove', startToMove);
        })
    }
}

export default Oop;