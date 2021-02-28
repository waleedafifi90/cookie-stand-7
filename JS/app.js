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

//helper
function randomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
let columnHeader = ['cookies/h', '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'DailyLocationTotal'];

function Shops(name, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.numOfCust = [];
  this.numOfCookPerHour = [];
  this.totalNumOfCook = 0;
  Shops.allShops.push(this);
}
Shops.allShops=[];
Shops.prototype.getRandom = function () {
  for (let i = 0; i < workingHours.length; i++) {
    let x = Math.ceil(randomNumber(this.minCust, this.maxCust));
    this.numOfCust.push(x);
    let y = Math.ceil(x * this.avgCookie);
    this.numOfCookPerHour.push(y);
    this.totalNumOfCook = this.numOfCookPerHour[i] + this.totalNumOfCook;
  }
};
console.log(this.numOfCust);
Shops.prototype.render = function () {
  const tableElement = document.getElementById('mytable');
  const trElement = document.createElement('tr');
  tableElement.appendChild(trElement);
  const thElement = document.createElement('th');
  trElement.appendChild(thElement);
  thElement.textContent = `${this.name}`;
  for (let i = 0; i < workingHours.length; i++) {
    const tdElement = document.createElement('td');
    trElement.appendChild(tdElement);
    tdElement.textContent = this.numOfCookPerHour[i];
  }
  const tdElement = document.createElement('td');
  trElement.appendChild(tdElement);
  tdElement.textContent = this.totalNumOfCook;
};
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
header();
const seattle = new Shops('seattle', 23, 65, 6.3, []);
seattle.getRandom(23, 65);
seattle.render();

const Tokoyo = new Shops('Tokoyo', 3, 24, 1.2, []);
Tokoyo.getRandom(3, 24);
Tokoyo.render();

const Dubai = new Shops('Dubai', 11, 32, 37, []);
Dubai.getRandom(11, 32);
Dubai.render();

const Paris = new Shops('Paris', 20, 38, 23, []);
Paris.getRandom(20, 38);
Paris.render();

const Lima = new Shops('Lima', 2, 16, 4.8, []);
Lima.getRandom(2, 16);
Lima.render();
console.log(Shops.allShops);

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
  const th3 = document.createElement('th');
  tr.appendChild(th3);
  th3.textContent = seattle.totalNumOfCook + Tokoyo.totalNumOfCook + Dubai.totalNumOfCook + Paris.totalNumOfCook + Lima.totalNumOfCook;
  let totalCookies = 0;
  for (let j = 0; j <Shops.allShops.length; j++) {
    totalCookies += parseInt(Shops.allShops[j].numOfCookPerHour[j]);
  }
  th3.textContent = totalCookies;
  const th4 = document.createElement('th');
  tr.appendChild(th4);
  th4.textContent = seattle.totalNumOfCook + Tokoyo.totalNumOfCook + Dubai.totalNumOfCook + Paris.totalNumOfCook + Lima.totalNumOfCook;
};


Shops.allShops = [];
footer();
const formElement = document.getElementById('addnewshop');
formElement.addEventListener('submit', function (event) {
  event.preventDefault();
  const shopName0 = event.target.shop_name.value;
  const minCust1 = event.target.min_Cust.value;
  const maxCust2 = event.target.max_Cust.value;
  const avdCook3 = event.target.avg_Cook.value;
  document.getElementById('mytable').removeChild(document.getElementById('mytable').lastChild);
  const shop = new Shops(shopName0, minCust1, maxCust2, avdCook3);
  formElement.reset();
  shop.getRandom(minCust1, maxCust2);
  shop.render();
});
console.log(Shops.allShops);
