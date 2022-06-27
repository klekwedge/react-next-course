"use strict";
// function logTime(num: number): number {
//   console.log(new Date());
//   return num;
// }
// function logTime2(num: string): string {
//   console.log(new Date());
//   return num;
// }
function logTime(num) {
    console.log(new Date());
    return num;
}
logTime('sdf');
// logTime(5)
logTime(5);
function logTime2(num) {
    if (typeof num === 'string') {
        num.toUpperCase();
    }
    return num;
}
class MyGenClass {
}
const a = new MyGenClass();
// a.value = '5' error
a.value = 5;
function logTimeStamp(num) {
    console.log(num.stamp);
    return num;
}
