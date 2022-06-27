let a: number = 5;
let b: string = 'sdf';
let c = true;

// const d = a + c

let d: string[] = ['sdf', 'sdf', 'sdfg'];

let e: any = 3;
e = 'sdf'

function test(a: string): string | number {
  return ''
}

const test2 = (a: number): number => {
  return a * 2
}

d = d.map((x: string) => x.toLowerCase())

function countCoord(coord: { lat: number, long?: number }) {

}

function printIt(id: number | string) {
  if (typeof id === 'number') {
    console.log(id.toString());
  }
  else if (typeof id === 'string') {
    console.log(id.toUpperCase());
  }
}

function getSum(a: number | number[]): void {
  if (Array.isArray(a)) {

  }
}

const x: undefined = undefined;
const z: null = null;

