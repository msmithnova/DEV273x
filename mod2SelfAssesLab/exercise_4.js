var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var die = /** @class */ (function () {
    function die(div) {
        this.length = 4;
        this.width = 100;
        this.border = "10px solid black";
        this.color = "black";
        this.div = div;
    }
    return die;
}());
var DieValues;
(function (DieValues) {
    DieValues[DieValues["One"] = 0] = "One";
    DieValues[DieValues["Two"] = 1] = "Two";
    DieValues[DieValues["Three"] = 2] = "Three";
    DieValues[DieValues["Four"] = 3] = "Four";
    DieValues[DieValues["Five"] = 4] = "Five";
    DieValues[DieValues["Six"] = 5] = "Six";
})(DieValues || (DieValues = {}));
var dieRoller = /** @class */ (function (_super) {
    __extends(dieRoller, _super);
    function dieRoller(div) {
        var _this = _super.call(this, div) || this;
        _this.div.style.height = _this.width + "px";
        ;
        _this.div.style.width = _this.width + "px";
        _this.div.style.border = _this.border;
        _this.div.style.color = _this.color;
        _this.div.style.cssFloat = "left";
        _this.div.style.margin = "10px";
        return _this;
    }
    dieRoller.prototype.rollDie = function (index) {
        return DieValues[index];
    };
    dieRoller.DieValues = DieValues;
    return dieRoller;
}(die));
var dieSets = [];
for (var index = 0; index < 4; index++) {
    dieSets.push({
        'div': document.createElement('div'),
        'p': document.createElement('p')
    });
}
var getRandomIntInc = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
dieSets.map(function (elem, index) {
    var dieClass = new dieRoller(elem.div);
    document.body.appendChild(elem.div);
    elem.p.textContent = dieClass.rollDie(getRandomIntInc(0, 5));
    elem.p.style.textAlign = "center";
    elem.p.style.fontSize = "2em";
    elem.div.appendChild(elem.p);
});
var button = document.createElement("button");
button.textContent = "Roll the Dice";
document.body.appendChild(button);
button.onclick = function (event) {
    for (var i = 0; i < dieSets.length; i++) {
        var dieClass = new dieRoller(dieSets[i].div);
        dieSets[i].p.textContent = dieClass.rollDie(getRandomIntInc(0, 5));
    }
};
