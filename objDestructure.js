// const personeInfo = {name:"A", age:12, job:"ABC"};
// // const name = personeInfo.name;
// // const age = personeInfo.age;
// // const job = personeInfo.job;
// // console.log(name, age, job);
// const {name, age, job} = personeInfo;
// console.log(name, age, job);

const multiObject = {
    name:"abc",
    info:{
        address:"Tangail",
        phone: 25342,
    }
}
const {phone} = multiObject.info;
console.log(phone);

