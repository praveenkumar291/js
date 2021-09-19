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

// const kill= [33, 21, 23,]


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


const eights = production.filter(company => (company.start >= 1980 && company.start < 1990));
 console.log(eights);
