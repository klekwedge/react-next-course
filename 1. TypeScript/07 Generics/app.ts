// function logTime(num: number): number {
//   console.log(new Date());
//   return num;
// }

// function logTime2(num: string): string {
//   console.log(new Date());
//   return num;
// }

function logTime<T>(num: T): T {
  console.log(new Date());
  return num;
}


logTime<string>('sdf');
// logTime(5)
logTime<number>(5)


function logTime2<T>(num: T): T {
  if (typeof num === 'string') {
    num.toUpperCase();
  }

  return num;
}


// interface MyInterface {
//   transform: <T>(a: T) => T
// }

interface MyInterface {
  transform: <T, F>(a: T) => F
}

class MyGenClass<T>{
  value: T
}

const a = new MyGenClass<number>()
// a.value = '5' error
a.value = 5


interface TimeStamp {
  stamp: number
}

function logTimeStamp<T extends TimeStamp>(num: T): T {
  console.log(num.stamp);
  return num;
}

