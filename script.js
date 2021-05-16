let varAmt;
let container = document.querySelector(".container");
let element;
const button = document.querySelector("button");

function GetInputAndGrid() {
    do {
        divAmt = parseInt(window.prompt("How many elements do you want?"), 10);
    } while (isNaN(divAmt) || divAmt > 100 || divAmt < 0);
    MakeGrid();
}
function MakeGrid () {
    for (let i = 0; i < divAmt; i++)
    {
        element = document.createElement('div');
        //element.textContent = 'Hello'
        container.appendChild(element);
        element.style.background = 'red';
        element.style.border = '10px solid red';
        element.style.padding = '10px'
        element.style.margin = '20px';
        element.classList.add('div-hover');
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