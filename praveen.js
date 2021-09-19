  //for each

const company = [{
  name: 'cmpny one', category: 'chips industry', start: 1981, end: 2021,

},
{
  name: 'cmpny two', category: ' induction  industry', start: 1951, end: 2021,

},
{
  name: 'cmpny one', category: 'tech industry', start: 1982, end: 2021,

},
];

const kill= [33, 21, 23,]


// company.forEach((company) => {
//   console.log(company);

// })



//filter

// const praveen = kill.filter((ages) => {
//   if (ages > 21) {
//     return true;
//   }
// });
// console.log(praveen);


//short way to
const praveen = kill.filter(age => age >= 21);
 console.log(praveen);
