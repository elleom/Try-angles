
const getUserInput = () =>  {
    let x1 = 0, y1 = 0, x2 = 0, y2 = 0, x3 = 0, y3 = 0;
    let coordinates = [x1, y1, x2, y2, x3, y3]
    let userInput = []
    let inputs = document.getElementsByTagName('input')

    let i = 0

    coordinates.forEach(element => {
        element = inputs[i].value
        console.log(inputs[i].value)
        i++
        userInput.push(element)
    });

    console.log(userInput)


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
    contextAxisX.font = '24px Arial'

    contextAxisX.fillText("x", 980, 35);

    contextAxisX.font = '14px Arial'
    for (let x = 50; x < 1000; x += 50) {

        contextAxisX.moveTo(x, 42);
        contextAxisX.lineTo(x, 50);
        contextAxisX.stroke();
        contextAxisX.fillText(x.toString(), x, 40);
    }

    canvas = document.querySelector("#canvasY");
    let contextAxisY = canvas.getContext('2d');

    contextAxisY.moveTo(25, 0);
    contextAxisY.lineTo(25, 570);
    contextAxisY.stroke();
    contextAxisY.font = '14px Arial'
    contextAxisY.fillText("y", 1, 590);

    contextAxisX.font = '14px Arial'
    for (let y = 50; y <= 550; y += 50) {

        contextAxisY.moveTo(20, y);
        contextAxisY.lineTo(30, y);
        contextAxisY.stroke();
        contextAxisY.fillText(y.toString(), 0, y - 5);
    }

}



