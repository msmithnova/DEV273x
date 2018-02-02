class die {
    length: number = 4;
    width: number = 100;
    border: string = "10px solid black";
    color: string = "black";
    div: Element;
    constructor(div: Element) {
        this.div = div;
    }
}

interface dieSet {
    'div': Element,
    'p': Element
}

enum DieValues {
    One,
    Two,
    Three,
    Four,
    Five,
    Six
}

class dieRoller extends die {
    static DieValues = DieValues;
    constructor(div: Element) {
        super(div);
        (this.div as HTMLElement).style.height = this.width + "px";;
        (this.div as HTMLElement).style.width = this.width + "px";
        (this.div as HTMLElement).style.border = this.border;
        (this.div as HTMLElement).style.color = this.color;
        (this.div as HTMLElement).style.cssFloat = "left";
        (this.div as HTMLElement).style.margin = "10px";
    }
    rollDie(index : number) : string {
        return DieValues[index];
    }
}

let dieSets : Array<dieSet> = [];

for (let index: number = 0; index < 4; index++) {
    dieSets.push({
        'div': document.createElement('div'),
        'p': document.createElement('p')
    })
}

let getRandomIntInc: Function = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

dieSets.map( (elem, index) => {
    let dieClass = new dieRoller(elem.div);
    document.body.appendChild(elem.div);
    elem.p.textContent = dieClass.rollDie(getRandomIntInc(0, 5));
    (elem.p as HTMLElement).style.textAlign = "center";
    (elem.p as HTMLElement).style.fontSize = "2em";
    elem.div.appendChild(elem.p);
})

let button: Element = document.createElement("button");
button.textContent = "Roll the Dice";
document.body.appendChild(button);
(button as HTMLElement).onclick = (event) => {
    for (let i: number = 0; i < dieSets.length; i++) {
        let dieClass = new dieRoller(dieSets[i].div);
        dieSets[i].p.textContent = dieClass.rollDie(getRandomIntInc(0, 5));
    }
}