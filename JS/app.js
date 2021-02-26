'use strict';

let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// const seattle = {
//   name: 'seattle',
//   minCust: 23,
//   maxCust: 65,
//   avgCookie: 6.3,
//   numOfCust: [],
//   numOfCookPerHour:[],
//   totalNumOfCook:0,
//   getNum: function () {
//     for (let i=0;i<workingHours.length;i++){
//       let x = Math.ceil(generate(this.minCust, this.maxCust));
//       this.numOfCust.push(x);
//       let y=Math.ceil(x*this.avgCookie);
//       this.numOfCookPerHour.push(y);
//       this.totalNumOfCook=this.numOfCookPerHour[i]+this.totalNumOfCook;
//     }
//   },
//   render:function(){
//     const parentElement=document.getElementById('shop');
//     const h1Element=document.createElement('h1');
//     parentElement.appendChild(h1Element);
//     h1Element.textContent= `${seattle.name}`;
//     const articleElement=document.createElement('article');
//     const pElement=document.createElement('p');
//     parentElement.appendChild(articleElement);
//     parentElement.appendChild(pElement);
//     pElement.textContent=`total number ${this.totalNumOfCook}`;
//     const ulElement=document.createElement('ul');
//     articleElement.appendChild(ulElement);
//     for(let i=0;i<workingHours.length;i++)
//     {
//       const liElement=document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent=`at ${workingHours[i]}:${this.numOfCookPerHour[i]} Cookies`;
//     }
//   }
// };
// seattle.getNum();
// console.log(seattle.getNum);
// console.log(seattle.numOfCust);
// seattle.render();
// console.log(seattle.numOfCookPerHour);
// console.log(seattle.totalNumOfCook);
// //helper function
// function generate(min, max) {
//   return Math.ceil(Math.random() * (max - min) + min);
// }
// //-------------------------------------------------------------------------

// const Tokoyo ={
//   name: 'Tokoyo',
//   minCust: 3,
//   maxCust: 24,
//   avgCookie: 1.2,
//   numOfCust: [],
//   numOfCookPerHour:[],
//   totalNumOfCook:0,
//   getNum: function () {
//     for (let i=0;i<workingHours.length;i++){
//       let x = Math.ceil(generate(this.minCust, this.maxCust));
//       this.numOfCust.push(x);
//       let y=Math.ceil(x*this.avgCookie);
//       this.numOfCookPerHour.push(y);
//       this.totalNumOfCook=this.numOfCookPerHour[i]+this.totalNumOfCook;
//     }
//   },
//   render:function(){
//     const parentElement=document.getElementById('shop');
//     const h1Element=document.createElement('h1');
//     parentElement.appendChild(h1Element);
//     h1Element.textContent= `${Tokoyo.name}`;
//     const articleElement=document.createElement('article');
//     const pElement=document.createElement('p');
//     parentElement.appendChild(articleElement);
//     parentElement.appendChild(pElement);
//     pElement.textContent=`total number ${this.totalNumOfCook}`;
//     const ulElement=document.createElement('ul');
//     articleElement.appendChild(ulElement);
//     for(let i=0;i<workingHours.length;i++)
//     {
//       const liElement=document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent=`at ${workingHours[i]}:${this.numOfCookPerHour[i]} Cookies`;
//     }
//   }
// };
// Tokoyo.getNum();
// console.log(Tokoyo.getNum);
// console.log(Tokoyo.numOfCust);
// Tokoyo.render();
// console.log(Tokoyo.numOfCookPerHour);
// console.log(Tokoyo.totalNumOfCook);
// //--------------------------------------------------------------------------

// const Dubai ={
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 32,
//   avgCookie: 37,
//   numOfCust: [],
//   numOfCookPerHour:[],
//   totalNumOfCook:0,
//   getNum: function () {
//     for (let i=0;i<workingHours.length;i++){
//       let x = Math.ceil(generate(this.minCust, this.maxCust));
//       this.numOfCust.push(x);
//       let y=Math.ceil(x*this.avgCookie);
//       this.numOfCookPerHour.push(y);
//       this.totalNumOfCook=this.numOfCookPerHour[i]+this.totalNumOfCook;
//     }
//   },
//   render:function(){
//     const parentElement=document.getElementById('shop');
//     const h1Element=document.createElement('h1');
//     parentElement.appendChild(h1Element);
//     h1Element.textContent= `${Dubai.name}`;
//     const articleElement=document.createElement('article');
//     const pElement=document.createElement('p');
//     parentElement.appendChild(articleElement);
//     parentElement.appendChild(pElement);
//     pElement.textContent=`total number ${this.totalNumOfCook}`;
//     const ulElement=document.createElement('ul');
//     articleElement.appendChild(ulElement);
//     for(let i=0;i<workingHours.length;i++)
//     {
//       const liElement=document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent=`at ${workingHours[i]}:${this.numOfCookPerHour[i]} Cookies`;
//     }
//   }
// };
// Dubai.getNum();
// console.log(Dubai.getNum);
// console.log(Dubai.numOfCust);
// Dubai.render();
// console.log(Dubai.numOfCookPerHour);
// console.log(Dubai.totalNumOfCook);
// //---------------------------------------------------------

// const Paris ={
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   avgCookie: 2.3,
//   numOfCust: [],
//   numOfCookPerHour:[],
//   totalNumOfCook:0,
//   getNum: function () {
//     for (let i=0;i<workingHours.length;i++){
//       let x = Math.ceil(generate(this.minCust, this.maxCust));
//       this.numOfCust.push(x);
//       let y=Math.ceil(x*this.avgCookie);
//       this.numOfCookPerHour.push(y);
//       this.totalNumOfCook=this.numOfCookPerHour[i]+this.totalNumOfCook;
//     }
//   },
//   render:function(){
//     const parentElement=document.getElementById('shop');
//     const h1Element=document.createElement('h1');
//     parentElement.appendChild(h1Element);
//     h1Element.textContent= `${Paris.name}`;
//     const articleElement=document.createElement('article');
//     const pElement=document.createElement('p');
//     parentElement.appendChild(articleElement);
//     parentElement.appendChild(pElement);
//     pElement.textContent=`total number ${this.totalNumOfCook}`;
//     const ulElement=document.createElement('ul');
//     articleElement.appendChild(ulElement);
//     for(let i=0;i<workingHours.length;i++)
//     {
//       const liElement=document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent=`at ${workingHours[i]}:${this.numOfCookPerHour[i]} Cookies`;
//     }
//   }
// };
// Paris.getNum();
// console.log(Paris.getNum);
// Paris.render();
// console.log(Paris.numOfCookPerHour);
// console.log(Paris.totalNumOfCook);

// //-----------------------------------------------------

// const Lima ={
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   avgCookie: 4.6,
//   numOfCust: [],
//   numOfCookPerHour:[],
//   totalNumOfCook:0,
//   getNum: function () {
//     for (let i=0;i<workingHours.length;i++){
//       let x = Math.ceil(generate(this.minCust, this.maxCust));
//       this.numOfCust.push(x);
//       let y=Math.ceil(x*this.avgCookie);
//       this.numOfCookPerHour.push(y);
//       this.totalNumOfCook=this.numOfCookPerHour[i]+this.totalNumOfCook;
//     }
//   },
//   render:function(){
//     const parentElement=document.getElementById('shop');
//     const h1Element=document.createElement('h1');
//     parentElement.appendChild(h1Element);
//     h1Element.textContent= `${Lima.name}`;
//     const articleElement=document.createElement('article');
//     const pElement=document.createElement('p');
//     parentElement.appendChild(articleElement);
//     parentElement.appendChild(pElement);
//     pElement.textContent=`total number ${this.totalNumOfCook}`;
//     const ulElement=document.createElement('ul');
//     articleElement.appendChild(ulElement);
//     for(let i=0;i<workingHours.length;i++)
//     {
//       const liElement=document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent=`at ${workingHours[i]}:${this.numOfCookPerHour[i]} Cookies`;
//     }
//   }
// };
// Lima.getNum();
// console.log(Lima.getNum);
// console.log(Lima.numOfCust);
// Lima.render();
// console.log(Lima.numOfCookPerHour);
// console.log(Lima.totalNumOfCook);
// FINISHED LAB 6 DONT TOUCH #######################################################################
// let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// const seattle = {
//   name: 'seattle',
//   minCust: 23,
//   maxCust: 65,
//   AvgCookie: 6.3,
//   numOfCustPerHour: [],//randomValue(min,max)(array)
//   totalCookiesPerHour: [],//NumOfCust*avgCookie
//   totalSales: 0,
//   getnum: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       // this.temp = Math.ceil(generateRandomNumber(this.minCust, this.maxCust));
//       // Math.ceil(this.numOfCustPerHour.push(this.temp)[i]);
//       // Math.ceil(this.totalCookiesPerHour.push(this.temp * this.AvgCookie)[i]);
//       this.totalCookiesPerHour.push(Math.ceil(this.AvgCookie * generateRandomNumber(this.minCust, this.maxCust)));
//       // this.numOfCustPerHour.push(generateRandomNumber(this.minCust,this.maxCust))[i];
//     }
//     console.log(this.totalCookiesPerHour);
//   },
//   render: function () {
//     const parentElement = document.getElementById('shop');
//     const articleElement = document.createElement('article');
//     const h1Element = document.createElement('h1');
//     parentElement.appendChild(articleElement);
//     parentElement.appendChild(h1Element);
//     const pElement = document.createElement('p');
//     articleElement.appendChild(pElement);
//     pElement.textContent = `${this.name}`;
//     const ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);
//     for (let i = 0; i < workingHours.length; i++) {
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = `at ${workingHours[i]}: ${this.totalCookiesPerHour[i]} Cookies`;
//     }

//   }
// };
// // Helper function
// function generateRandomNumber(min, max) {
//   return Math.floor(Math.random() * ((max - min + 1) + min));
// }
// seattle.getnum();
// console.log(seattle);
// seattle.render();
// ////////////////////////////////////////////////////////
// const Tokyo = {
//   name: 'Tokyo',
//   minCust: 3,
//   maxCust: 24,
//   AvgCookie: 1.2,
//   numOfCustPerHour: [],//randomValue(min,max)(array)
//   totalCookiesPerHour: [],//NumOfCust*avgCookie
//   totalSales: 0,
//   temp: [],
//   getnum: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil(this.AvgCookie*generateRandomNumber(this.minCust,this.maxCust)));
//     }
//   },
//   render: function () {
//     const parentElement = document.getElementById('shop');
//     const articleElement = document.createElement('article');
//     const h1Element = document.createElement('h1');
//     parentElement.appendChild(articleElement);
//     parentElement.appendChild(h1Element);
//     const pElement = document.createElement('p');
//     articleElement.appendChild(pElement);
//     pElement.textContent = `${this.name}`;
//     const ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);
//     for (let i = 0; i < workingHours.length; i++) {
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = `at ${workingHours[i]}: ${this.totalCookiesPerHour[i]} Cookies`;
//     }

//   }
// };

// Tokyo.getnum();
// console.log(Tokyo);
// Tokyo.render();

// //---------------------------------------------------------------------------------------
// const Dubai = {
//   name: 'Dubai',
//   minCust: 11,
//   maxCust: 38,
//   AvgCookie: 3.7,
//   numOfCustPerHour: [],//randomValue(min,max)(array)
//   totalCookiesPerHour: [],//NumOfCust*avgCookie
//   totalSales: 0,
//   temp: [],
//   getnum: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil(this.AvgCookie*generateRandomNumber(this.minCust,this.maxCust)));
//     }
//   },
//   render: function () {
//     const parentElement = document.getElementById('shop');
//     const articleElement = document.createElement('article');
//     const h1Element = document.createElement('h1');
//     parentElement.appendChild(articleElement);
//     parentElement.appendChild(h1Element);
//     const pElement = document.createElement('p');
//     articleElement.appendChild(pElement);
//     pElement.textContent = `${this.name}`;
//     const ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);
//     for (let i = 0; i < workingHours.length; i++) {
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = `at ${workingHours[i]}: ${this.totalCookiesPerHour[i]} Cookies`;
//     }

//   }
// };

// Dubai.getnum();
// console.log(Dubai);
// Dubai.render();

// //-----------------------------------------------------------------------------

// const Paris = {
//   name: 'Paris',
//   minCust: 20,
//   maxCust: 38,
//   AvgCookie: 2.3,
//   numOfCustPerHour: [],//randomValue(min,max)(array)
//   totalCookiesPerHour: [],//NumOfCust*avgCookie
//   totalSales: 0,
//   temp: [],
//   getnum: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil(this.AvgCookie*generateRandomNumber(this.minCust,this.maxCust)));
//     }
//   },
//   render: function () {
//     const parentElement = document.getElementById('shop');
//     const articleElement = document.createElement('article');
//     const h1Element = document.createElement('h1');
//     parentElement.appendChild(articleElement);
//     parentElement.appendChild(h1Element);
//     const pElement = document.createElement('p');
//     articleElement.appendChild(pElement);
//     pElement.textContent = `${this.name}`;
//     const ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);
//     for (let i = 0; i < workingHours.length; i++) {
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = `at ${workingHours[i]}: ${this.totalCookiesPerHour[i]} Cookies`;
//     }

//   }
// };

// Paris.getnum();
// console.log(Paris);
// Paris.render();
// //------------------------------------------------------------------

// const Lima = {
//   name: 'Lima',
//   minCust: 2,
//   maxCust: 16,
//   AvgCookie: 4.6,
//   numOfCustPerHour: [],//randomValue(min,max)(array)
//   totalCookiesPerHour: [],//NumOfCust*avgCookie
//   totalSales: 0,
//   temp: [],
//   getnum: function () {
//     for (let i = 0; i < workingHours.length; i++) {
//       this.totalCookiesPerHour.push(Math.ceil(this.AvgCookie*generateRandomNumber(this.minCust,this.maxCust)));
//     }
//   },
//   render: function () {
//     const parentElement = document.getElementById('shop');
//     const articleElement = document.createElement('article');
//     const h1Element = document.createElement('h1');
//     parentElement.appendChild(articleElement);
//     parentElement.appendChild(h1Element);
//     const pElement = document.createElement('p');
//     articleElement.appendChild(pElement);
//     pElement.textContent = `${this.name}`;
//     const ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);
//     for (let i = 0; i < workingHours.length; i++) {
//       const liElement = document.createElement('li');
//       ulElement.appendChild(liElement);
//       liElement.textContent = `at ${workingHours[i]}: ${this.totalCookiesPerHour[i]} Cookies`;
//     }

//   }
// };

// Lima.getnum();
// console.log(Lima);
// Lima.render();



// //-------------------------------------------------------------------------------------
// // homepagelaaaaaaaaaaaaaaaaaaaaaab7777777777777777777777777777777777777777777

// function render2() {
//   const parentElement = document.getElementById('home');
//   const articleElement = document.createElement('article');
//   const h1Element = document.createElement('h1');
//   parentElement.appendChild(articleElement);
//   parentElement.appendChild(h1Element);
//   h1Element.textContent = 'Welcome to Salmon cookie shop';
//   //h1Element.
//   const pElement = document.createElement('p');
//   articleElement.appendChild(pElement);
//   const ulElement = document.createElement('ul');
//   articleElement.appendChild(ulElement);


// // pElement.textContent = `${this.name} shop has ${this.minCust} min number of customers, and ${this.maxCust} max number of customers and ${this.AvgCookie} avg cookie number per customer`;
// }
// render2();


// ////////////////////////////////////////////////////
//building constructor


// Cat.prototype.getAge = function(min, max) {
//   this.age = generateRandomNumber(min, max);
//   // console.log(age);
// };

// Cat.prototype.render = function() {
//   const parentElement = document.getElementById('kittenProfiles');

// Create Element
// append element to parent element
// set text content to the element
// function Shops(name, minCust, maxCust, avgCookie) {
//   this.name = name;
//   this.maxCust = maxCust;
//   this.minCust - minCust;
//   this.AvgCookie = avgCookie;
//   this.numOfCustPerHour = [];
//   this.totalCookiesPerHour = [];
//   this.customerArr = [];
// }

// Shops.prototype.getnum = function (minCust, maxCust) {
//   this.numOfCustPerHour = Math.ceil(generateRandomNumber(minCust, maxCust));
//   return (generateRandomNumber(this.minCust, this.maxCust));
// }

// Shops.prototype.getCook=function(avgCookie,numOfCustPerHour){
//   for(let i=0;i<workingHours.length;i++){
//     this.totalCookiesPerHour.push(Math.ceil(avgCookie*this.numOfCustPerHour));
// }
// // };
// const seattle = new Shops('seattle', 23, 65, 6.3);
// // seattle.render();
// console.log(seattle);
// seattle.getnum(23, 65);
// const Dubai = new shops('Dubai', 11, 38, 3.7);
// seattle.randomCustomer(11, 38                         );
// seattle.render();
// console/log(Dubai);

// const Paris = new shops('Paris', 23, 65, 6.3);
// seattle.randomCustomer(23, 65);
// seattle.render();
// console/log(Paris);

// const Lima = new shops('lLima', 23, 65, 6.3);
// seattle.randomCustomer(23, 65);
// seattle.render();
// console/log(Lima);

// const Tokyo = new shops('Tokyo', 23, 65, 6.3);
// seattle.randomCustomer(23, 65);
// seattle.render();
// console/log(Tokyo);


// salmonShop.prototype.randomCustomer=function () {
//   for(let i=0;i<workingHours.length;i++){
//     let hourSales=Math.ceil(randomNumber(this.minCust,this.maxCust)*avgCookie));
//     this.customerArr.push(hourSales);
//     maxCust*this.avgCookie;
//   }

// };



// salmonShop.prototype.render=function (params) {
//   const tableElement = document.getElementsById('placeTable');

//   const tr=document.createElement('tr');
//   tableElement.appendChild('tr');


// }

// const tableFooter=function () {
//   const tableElement =document.getElementsById('placeTable');

//   const tr=document.createElement('tr');
//   tableElement.appendChild(tr);
//   const th1=document.createElement('th');
//   tr.appendChild(th1);
//   th1.textContent='total'
//   for(let i =0 ;i<workingHours.length;i++){
//     consr th2 = document.createElement('th');
//     tr.appendChild('th2');
//     th2.textContent=
// ;  }
// }


// const td3

//helper
function randomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
let columnHeader = ['cookies/h', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm','8pm','DailyLocationTotal'];

function Shops(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.numOfCust = [];
  this.numOfCookPerHour = [];
  this.totalNumOfCook = 0;
  Shops.prototype.getRandom = function () {
    for (let i = 0; i < workingHours.length; i++) {
      let x = Math.ceil(randomNumber(this.minCust, this.maxCust)) ;
      this.numOfCust.push(x);
      let y = Math.ceil(x* this.avgCookie);
      this.numOfCookPerHour.push(y);
      this.totalNumOfCook=this.numOfCookPerHour[i]+this.totalNumOfCook;
    }
  };
  console.log(this.numOfCust);
  Shops.prototype.render = function () {
    const tableElement = document.getElementById('mytable');
    const trElement = document.createElement('tr');
    tableElement.appendChild(trElement);
    const thElement = document.createElement('th');
    trElement.appendChild(thElement);
    thElement.textContent=`${this.name}`;
    for(let i = 0; i <workingHours.length; i++) {
      const tdElement = document.createElement('td');
      trElement.appendChild(tdElement);
      tdElement.textContent = this.numOfCookPerHour[i];
    }
    const tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = this.totalNumOfCook;
  };
}
const header = function () {
  const parentElement = document.getElementById('shop');
  const tableHead = document.createElement('table');
  parentElement.appendChild(tableHead);
  tableHead.setAttribute('id', 'mytable');
  const tr = document.createElement('tr');
  tableHead.appendChild(tr);
  for (let i = 0; i < columnHeader.length; i++) {
    const th1 = document.createElement('tH');
    tr.appendChild(th1);
    th1.textContent = columnHeader[i];
  }
};
// Shops.prototype.render2=function () {
//   for(let i = 0; i <workingHours.length; i++) {
//     const thElement = document.createElement('th');
//     this.articleElement.appendChild(thElement);
//     thElement.textContent = this.numOfCookPerHour[i];
//   }
// };
//     const h1Element = document.createElement('h1');
//     parentElement.appendChild(h1Element);
//     h1Element.textContent = `${this.name}`;
//     const pElement=document.createElement('p');
//     parentElement.appendChild(pElement);
//     pElement.textContent=`the total is ${this.totalNumOfCook} Cookies`;
//     articleElement.appendChild(tableElement);

//     const tr1Element = document.createElement('tr');
//     tableElement.appendChild(tr1Element);

//     const th1Element = document.createElement('th');
//     tr1Element.appendChild(th1Element);
//     th1Element.textContent = 'Is Good with Other Cat';

//     const th2Element = document.createElement('th');
//     tr1Element.appendChild(th2Element);
//     th2Element.textContent = 'Is Good with Kids';
//     const th3Element = document.createElement('th');
//     tr1Element.appendChild(th3Element);
//     th3Element.textContent = 'Is Good with Dog';

//     const tr2Element = document.createElement('tr');
//     tableElement.appendChild(tr2Element);

//     const td1Element = document.createElement('td');
//     tr2Element.appendChild(td1Element);
//     td1Element.textContent = this.isGoodWithOtherCat;

//     const td2Element = document.createElement('td');
//     tr2Element.appendChild(td2Element);
//     td2Element.textContent = this.isGoodWithKids;

//     const td3Element = document.createElement('td');
//     tr2Element.appendChild(td3Element);
//     td3Element.textContent = this.isGoodWithDogs;

//     const trElement = document.createElement('tr');
//     articleElement.appendChild(trElement);

//     for(let i = 0; i <workingHours.length; i++) {
//       const trElement = document.createElement('tr');
//       trElement.appendChild(trElement);
//       trElement.textContent = this.numOfCookPerHour[i];
//     }
//     // articleElement.appendChild(tableElement);
//     // const tr1Element = document.createElement('tr');
//     // tableElement.appendChild(tr1Element);
//     // tr1Element.textContent = `${this.name}`;
//     // const tr2Element = document.createElement('tr');
//     // articleElement.appendChild(tableElement);
//     // tr2Element.textContent = `${this.name}`;

//     // const tr3Element = document.createElement('tr');
//     // articleElement.appendChild(tableElement);
//     // tr3Element.textContent = `${this.name}`;

//     // const tr4Element = document.createElement('tr');
//     // articleElement.appendChild(tableElement);
//     // tr4Element.textContent = `${this.name}`;


//     // for (let j = 0; j < workingHours.length; j++) {
//     //   const trElement = document.createElement('tr');
//     //   tableElement.appendChild(trElement);
//     //   trElement.textContent = `at ${workingHours[j]}: ${this.numOfCookPerHour[j]} Cookies`;

//     // }
//   };
// }
// //     const pElement=document.createElement('p');
// //     parentElement.appendChild(articleElement);
// //     parentElement.appendChild(pElement);
// //     pElement.textContent=`total number ${this.totalNumOfCook}`;
// //     const ulElement=document.createElement('ul');
// //     articleElement.appendChild(ulElement);
// //     for(let i=0;i<workingHours.length;i++)
// //     {
// //       const liElement=document.createElement('li');
// //       ulElement.appendChild(liElement);
// //       liElement.textContent=`at ${workingHours[i]}:${this.numOfCookPerHour[i]} Cookies`;
header();
const seattle = new Shops('seattle', 23, 65, 6.3);
seattle.getRandom(23,65);
seattle.render();

const Tokoyo = new Shops('Tokoyo', 3, 24, 1.2);
Tokoyo.getRandom(3,24);
Tokoyo.render();

const Dubai = new Shops('Dubai', 11, 32, 37);
Dubai.getRandom(11,32);
Dubai.render();

const Paris = new Shops('Paris', 20, 38, 23);
Paris.getRandom(20,38);
Paris.render();

const Lima = new Shops('Lima', 2, 16, 4.8);
Lima.getRandom(2,16);
Lima.render();
const footer = function () {
  const tableElement = document.getElementById('mytable');
  const tr = document.createElement('tr');
  tableElement.appendChild(tr);
  const th1 = document.createElement('th');
  tr.appendChild(th1);
  th1.textContent = 'Totals';
  for (let i = 0; i < workingHours.length; i++) {
    const th2 = document.createElement('th');
    tr.appendChild(th2);
    th2.textContent = seattle.numOfCookPerHour[i] + Tokoyo.numOfCookPerHour[i] + Dubai.numOfCookPerHour[i] + Paris.numOfCookPerHour[i] + Lima.numOfCookPerHour[i];
  }
  const th2 = document.createElement('th');
  tr.appendChild(th2);
  th2.textContent = seattle.totalNumOfCook + Tokoyo.totalNumOfCook + Dubai.totalNumOfCook + Paris.totalNumOfCook + Lima.totalNumOfCook;
};

footer();


// const Tokyo=new Shops('Tokyo',3,24,1.2);
// seattle.maysaa();
// console.log(Tokyo.numOfCookPerHour);

// const Dubai=new Shops('Dubai',11,32,37);
// const Paris=new Shops('Paris',20,38,2.3);
// const Lima=new Shops('Lima',2,16,4.8);
