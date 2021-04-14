
const getUserInput = () =>  {
    let x1, y1, x2, y2, x3, y3;
    let  coordinates = [x1, y1, x2, y2, x3, y3]

    const slog = (obj) => {
        coordinates.forEach(coordinate => console.log(coordinate) )}

    slog(coordinates);


}
const drawTriangle = () => {
    let canvas = document.querySelector("#myCanvas");
    let context = canvas.getContext('2d');

    let x1 = 50;
    let y1 = 0;

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.width, canvas.height);

    //radians
    let height = (x1-y1) * Math.cos(Math.PI / 6);

    context.beginPath();
    context.moveTo(x1, 500);
    context.lineTo(700, 300);
    context.lineTo(200, 300 - height);
    context.closePath();

    // border
    context.lineWidth = 1;
    context.strokeStyle = '#666666';
    context.stroke();

    // fill
    context.fillStyle = "#4a92ad";
    context.fill();

}

const drawAxis = () => {

    let canvas = document.querySelector("#canvasX");
    let contextAxisX = canvas.getContext('2d');
    contextAxisX.moveTo(25, 50);
    contextAxisX.lineTo(1000, 50);
    contextAxisX.stroke();
    contextAxisX.font = '16px Arial'
    contextAxisX.fillText('(x=0,y=0)', 5,40);
    contextAxisX.fillText("(x=1000)", 900, 40 );

    canvas = document.querySelector("#canvasY");
    let contextAxisY = canvas.getContext('2d');

    contextAxisY.moveTo(25, 0);
    contextAxisY.lineTo(25, 570);
    contextAxisY.stroke();
    contextAxisY.font = '16px Arial'
    contextAxisY.fillText("(y=600)", 1, 590 );

}



