"use strict";
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
// enum Decision {
//   Yes = 1,
//   No = 'No'
// }
function calcEnum() {
    return 2;
}
var Decision;
(function (Decision) {
    Decision[Decision["Yes"] = 1] = "Yes";
    Decision[Decision["No"] = calcEnum()] = "No";
})(Decision || (Decision = {}));
// Error
// function calcEnum2() {
//   return ' ';
// }
// enum Decision2 {
//   Yes = 1,
//   No = calcEnum2()
// }
function runEnum(obj) {
}
runEnum(Direction);
var Test;
(function (Test) {
    Test[Test["A"] = 0] = "A";
})(Test || (Test = {}));
let test = Test.A;
let nameA = Test[test]; // A
let c = 0 /* ConstEnum.A */;
function ruDice(dice) {
    switch (dice) {
        case 1 /* Dice.One */:
            return 'Один';
        case 2 /* Dice.Two */:
            return 'Два';
        case 3 /* Dice.Three */:
            return 'Три';
        default:
            const a = dice;
    }
}
