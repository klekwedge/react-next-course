type Point = {
  x: number,
  y: number
}

type D3Point = Point & {
  z: number;
}

type stringOrNumber = string | number;


const c = (point: IPoint) =>{ 
  const d: I3DPoint = point as I3DPoint;
}

const myCanvas = document.getElementById('canvas') as HTMLCanvasElement;

interface IPoint {
  x: number,
  y: number
}

interface I3DPoint extends IPoint {
  z: number;
}

// function print(coord: { x: number, y: number }) {}

function print2(coord: stringOrNumber) { }

function print(coord: Point) { }


interface ITest {
  a: number;
}

interface ITest {
  b: number;
}

// Error
// type Test  = {
//   a: number;
// }

// type Test  = {
//   b: number;
// }