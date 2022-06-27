let c: 'test' = 'test'

// let c:'test' = 'test2' error
// let c:'test' = 'tes12t' error

type actionType = 'up' | 'down'

// function performAction(action: actionType): -1 | 1 {
//   switch (action) {
//     case 'up':
//       return 1;
//     case 'down':
//       return -1;
//   }
// }

function performAction(action: actionType | ComplexAction) {
  switch (action) {
    case 'up':
      return 1;
    case 'down':
      return -1;
  }
}


interface ComplexAction {
  s: string;
}