// alert('hello world');
// console.log('hello world');
// console.error('hello world');
// console.warn('hello world');

//var,let,const
// let is reasign values
// let age = 30;
// console.log(age)
// const age = 32;
// age = 34;
// console.log(age)
// const score=10
// console.log(score)
//data types
//strings,numbers,bollean,nul,undefined,symbols,
// const name = 'praveen';
// const age = 27
// const rating = 4.5;
// const iscool = true;
// const x = null;
// const y = undefined;
// let z;
// console.log(name,age,rating,iscool,x,y,z)

// const name = 'praveen';
// const age = '27';
//concatination
// console.log('my name is '+name +'and i am'+age)
//templete strings
// console.log(`my name is ${name} and i am ${age}`)
// const hello = `My name is ${name} i am ${age}`;
// console.log(hello)
// const p = 'hello praveen';
// console.log(p.substring(0,5).toUpperCase().toLowerCase())
// console.log(p.split(''));

// const p = 'praveen,vijju,varun,bhargav,pavan,paramesh,';
//  console.log(p.split(','))


//arrays  - varibles that hold multiple values

// const numbers = new Array(1, 2, 3, 4, 5, 6, 7);
// console.log(numbers);

// const fruits = ['apple', 'orenge,', 'banana'];
// //add onto the end
// fruits[3] = 'grapes'
// fruits.push('mang') // end adding arry
// fruits.unshift('guva')  //before addding arry
// fruits.pop()
// console.log(Array.isArray('mng'))
// console.log(fruits);



// objectleteralls
// const person = {
//   firstName: 'praveen',
//   lastName: 'kumar',
//   age: 36,
//   hobbies: ['music', 'movie', 'video',],
//   address: {
//     street: '12mainstreet',
//     city: 'London',
//     state: 'UK',
//   }
// }
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.address.city);

// person.email = 'praveen@gmail.com';
// console.log(person);



// const todos = [
//   {
//     id: 1,
//     text: 'take to trash',
//     isComplete: true,
//   },
//   {
//     id: 2,
//     text: 'meeting with boos',
//     isComplete: true,
//   },
//   {
//     id: 1,
//     text: 'meet with friend',
//     isComplete: true,
//   },
// ];
// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);



// loops:


//forloop


// for (let i = 0; i <= 10; i++) {
//   console.log(`For loop Number: ${i}`);
// }

// for (let i = 0; i < todos; i++) { .........2

//   console.log(todos[i]);
// }
// for (let p of todos) {
//   console.log(`${p.id}`);
// }.......3
//whieloop
// let i = 0;
// while (i < 10) {
//   console.log(`while loop:${i}`)
//   i++;
// }
//
//foreach

// todos.forEach(function (todo) {

//   console.log(todo.text)
//   console.log(todo.id)
// })
//map
// const p = todos.map((todo)=>  {
//   return todo=( todos) ;
// });
// console.warn(p);

//if statement

// const x = 20;
// if (x === 10) {
//   console.log('praveen');
// } else if (x > 10) {
//   console.log('x is greater than 10');
// }

// else {
//   console.log('x is Not 10');
// }
