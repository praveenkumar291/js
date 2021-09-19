  //for each

const production = [{
  name: 'cmpny one', category: 'chips industry', start: 1981, end: 2021,

},
{
  name: 'cmpny two', category: 'chips industry', start: 1951, end: 2021,

},
{
  name: 'cmpny three', category: 'publishers', start: 1982, end: 2021,

},
];

// const kill= ['hello','bar','world',]
const kill = [2,3,5,6,677,]


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
// const praveen = kill.filter(age => age >= 21);
//  console.log(praveen);

// filter retail company

// const retailCompanies =  companies.filter( function(company)  {

//   if (company.category === 'chips industry') {
//     return true;
//   }

// });
// console.log(retailCompanies);

// const praveen =production.filter(company => company.category === 'chips industry');
// console.log(praveen);


// const eights = production.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eights);


//map
//create array of company names to company

// const praveen = production.map(function (company) {
//   return company;
// });
// console.log(praveen);

// const todos = production.map((company) => `${company.name} [${company.start} - ${company.end}]`);


// console.log(todos);

// const todos = production.map((company) => {
//   return company = (production);x
// });
// console.log(todos);

// const todos = kill.map((company) => {
//   return company ;
// });
// console.log(todos);


//sort

// const todos = production.sort((a, b) => (a.start > b.start ? 1 : -1));
// console.log(todos);
//tolocale compare

//sort ages
// const todos = kill.sort((a, b) => a.localeCompare(b));
// console.log(kill);

// sort of numbers
const todos = kill.sort((a, b) => a - b);// reverse oreder : b-a

console.log(todos);
// console.log('praveen');
