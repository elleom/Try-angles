const getUserInput = () =>  {

    let x1 = 0, y1 = 0, x2 = 0, y2 = 0, x3 = 0, y3 = 0;
    let userInput = [x1, y1, x2, y2, x3, y3]
    let inputs = document.getElementsByTagName('input')

    let i = 0

    userInput.forEach(element => {
        element = inputs[i].value
        //console.log(inputs[i].value)
        userInput[i] = element;
        i++

    });

    console.log(userInput.length);


    drawTriangle(userInput)


}
const drawTriangle = (userInput) => {
    let canvas = document.querySelector("#myCanvas");
    let context = canvas.getContext('2d');
    console.log(userInput)

    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.width, canvas.height);

    //radians
    let height = (x1-y1) * Math.cos(Math.PI / 6);

    context.beginPath();
    context.moveTo(userInput[0], userInput[1]);
    context.lineTo(userInput[2], userInput[3]);
    context.lineTo(userInput[4], userInput[5]);
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
    contextAxisX.moveTo(0, 50);
    contextAxisX.lineTo(1000, 50);
    contextAxisX.stroke();
    contextAxisX.font = '24px Arial'

    contextAxisX.fillText("x", 980, 35);

    contextAxisX.font = '14px Arial'
    for (let x = 50; x < 1000; x += 50) {

        contextAxisX.moveTo(x, 42);
        contextAxisX.lineTo(x, 50);
        contextAxisX.stroke();
        contextAxisX.fillText(x.toString(), x+50, 40);
    }

    canvas = document.querySelector("#canvasY");
    let contextAxisY = canvas.getContext('2d');

    contextAxisY.moveTo(50, 0);
    contextAxisY.lineTo(50, 570);
    contextAxisY.stroke();
    contextAxisY.font = '14px Arial'
    contextAxisY.fillText("y", 1, 590);

    contextAxisX.font = '14px Arial'
    for (let y = 50; y <= 550; y += 50) {

        contextAxisY.moveTo(40, y);
        contextAxisY.lineTo(50, y);
        contextAxisY.stroke();
        contextAxisY.fillText(y.toString(), 25, y - 5);
    }
}

const onclickDrawHandler = () => {
    document.getElementById('draw-btn').addEventListener('click', getUserInput)
}



