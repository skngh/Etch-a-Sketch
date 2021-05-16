let varAmt;
let element;
let color = '';
const container = document.querySelector(".container");
const redbtn = document.querySelector("#red");
const bluebtn = document.querySelector("#blue");
const greenbtn = document.querySelector("#green");
const blackbtn = document.querySelector("#black");
const whitebtn = document.querySelector("#white");

redbtn.addEventListener('click', () => color = 'red');
bluebtn.addEventListener('click', () => color = 'blue');
greenbtn.addEventListener('click', () => color = 'green');
blackbtn.addEventListener('click', () => color = 'black');
whitebtn.addEventListener('click', () => color = 'white');


const button = document.querySelector("#btn");

function GetInputAndGrid() {
    do {
        divAmt = parseInt(window.prompt("How many elements do you want? (1-64)"), 10);
    } while (isNaN(divAmt) || divAmt > 64 || divAmt < 1);
    container.style.gridTemplateColumns = `repeat(${divAmt}, 1fr)`;
    MakeGrid();
}
function MakeGrid () {
    for (let i = 0; i < divAmt * divAmt; i++)
    {
        element = document.createElement('div');
        container.appendChild(element);
        element.classList = 'grid-element';
        element.addEventListener('mouseover', ChangeColor);
    }
}
function ChangeColor(e) {
    switch(color) {
        case 'red':
            e.target.style.backgroundColor = 'red';
            break;
        case 'blue':
            e.target.style.backgroundColor = 'blue';
            break;
        case 'green':
            e.target.style.backgroundColor = 'green';
            break;
        case 'black':
            e.target.style.backgroundColor = 'black';
            break;
        case 'white':
            e.target.style.backgroundColor = 'white';
            break;
        default:
            e.target.style.backgroundColor = 'black';
    }
}
function removeAllChildNodes(parent) {
    while(parent.firstChild) {
        parent.removeChild (parent.firstChild);
    }
}
button.addEventListener('click', () => {
    removeAllChildNodes(container);
    GetInputAndGrid();
});
GetInputAndGrid();