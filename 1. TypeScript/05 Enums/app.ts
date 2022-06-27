enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

// enum Decision {
//   Yes = 1,
//   No = 'No'
// }

function calcEnum() {
  return 2;
}

enum Decision {
  Yes = 1,
  No = calcEnum()
}

// Error
// function calcEnum2() {
//   return ' ';
// }

// enum Decision2 {
//   Yes = 1,
//   No = calcEnum2()
// }

function runEnum(obj: { Up: string }) {

}
runEnum(Direction)

enum Test {
  A
}

let test = Test.A
let nameA = Test[test] // A

const enum ConstEnum {
  A,
  B
}

let c = ConstEnum.A


const enum Dice {
  One = 1,
  Two,
  Three
}

function ruDice(dice: Dice) {
  switch (dice) {
    case Dice.One:
      return 'Один'
    case Dice.Two:
      return 'Два'
    case Dice.Three:
      return 'Три'
    default:
      const a: never = dice;
  }
}