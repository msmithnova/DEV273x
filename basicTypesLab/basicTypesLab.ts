let colorArray: string[] = ["green", "red", "blue"];
let index: number = 0;
//let color: string = "green";
let squareSizeNum: number = 100;
let squareSize: string = `${ squareSizeNum }px`;
let button: Element = document.createElement('button');
let div: Element = document.createElement('div');

button.textContent = "Change Color";

let colorChange: Function = (elem: Element, color: string) : boolean => {
    (elem as HTMLElement).style.backgroundColor = color;
    return true;
}

(div as HTMLElement).style.width = squareSize;
(div as HTMLElement).style.height = squareSize;

(button as HTMLElement).onclick = (event) => {
    colorChange(div, colorArray[index]);
    index++;
    index %= colorArray.length;
}

document.body.appendChild(button);
document.body.appendChild(div);
