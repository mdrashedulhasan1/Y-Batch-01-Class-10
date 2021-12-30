const giveNum = () => 5;
const doubleIT = (num) => num*2;
const add = (a, b) =>{
    const sum = a+b;
    const sub = a-b;
    const multi = sum*sub;
    return multi;
}
const result = giveNum();
const result2 = doubleIT(2);
const result3 = add(3, 2);
console.log(result3);
console.log(result2);
console.log(result);