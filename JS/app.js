'use strict';
let workingHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
const seattle = {
  name: 'seattle',
  minCust: 23,
  maxCust: 65,
  AvgCookie: 6.3,
  numOfCustPerHour: [],//randomValue(min,max)(array)
  totalCookiesPerHour: [],//NumOfCust*avgCookie
  totalSales: 0,
  getnum: function () {
    for (let i = 0; i < workingHours.length; i++) {
      // this.temp = Math.ceil(generateRandomNumber(this.minCust, this.maxCust));
      // Math.ceil(this.numOfCustPerHour.push(this.temp)[i]);
      // Math.ceil(this.totalCookiesPerHour.push(this.temp * this.AvgCookie)[i]);
      this.totalCookiesPerHour.push(Math.ceil(this.AvgCookie*generateRandomNumber(this.minCust,this.maxCust)));
      // this.numOfCustPerHour.push(generateRandomNumber(this.minCust,this.maxCust))[i];
    }
    console.log(this.totalCookiesPerHour);
  },
  render: function () {
    const parentElement = document.getElementById('shop');
    const articleElement = document.createElement('article');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(articleElement);
    parentElement.appendChild(h1Element);
    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = `${this.name}`;
    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for (let i = 0; i < workingHours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `at ${workingHours[i]}: ${this.totalCookiesPerHour[i]} Cookies`;
    }

  }
};
// Helper function
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * ((max - min + 1) + min));
}
seattle.getnum();
console.log(seattle);
seattle.render();
////////////////////////////////////////////////////////
const Tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  AvgCookie: 1.2,
  numOfCustPerHour: [],//randomValue(min,max)(array)
  totalCookiesPerHour: [],//NumOfCust*avgCookie
  totalSales: 0,
  temp: [],
  getnum: function () {
    for (let i = 0; i < workingHours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.AvgCookie*generateRandomNumber(this.minCust,this.maxCust)));
    }
  },
  render: function () {
    const parentElement = document.getElementById('shop');
    const articleElement = document.createElement('article');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(articleElement);
    parentElement.appendChild(h1Element);
    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = `${this.name}`;
    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for (let i = 0; i < workingHours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `at ${workingHours[i]}: ${this.totalCookiesPerHour[i]} Cookies`;
    }

  }
};

Tokyo.getnum();
console.log(Tokyo);
Tokyo.render();

//---------------------------------------------------------------------------------------
const Dubai = {
  name: 'Dubai',
  minCust: 11,
  maxCust: 38,
  AvgCookie: 3.7,
  numOfCustPerHour: [],//randomValue(min,max)(array)
  totalCookiesPerHour: [],//NumOfCust*avgCookie
  totalSales: 0,
  temp: [],
  getnum: function () {
    for (let i = 0; i < workingHours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.AvgCookie*generateRandomNumber(this.minCust,this.maxCust)));
    }
  },
  render: function () {
    const parentElement = document.getElementById('shop');
    const articleElement = document.createElement('article');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(articleElement);
    parentElement.appendChild(h1Element);
    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = `${this.name}`;
    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for (let i = 0; i < workingHours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `at ${workingHours[i]}: ${this.totalCookiesPerHour[i]} Cookies`;
    }

  }
};

Dubai.getnum();
console.log(Dubai);
Dubai.render();

//-----------------------------------------------------------------------------

const Paris = {
  name: 'Paris',
  minCust: 20,
  maxCust: 38,
  AvgCookie: 2.3,
  numOfCustPerHour: [],//randomValue(min,max)(array)
  totalCookiesPerHour: [],//NumOfCust*avgCookie
  totalSales: 0,
  temp: [],
  getnum: function () {
    for (let i = 0; i < workingHours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.AvgCookie*generateRandomNumber(this.minCust,this.maxCust)));
    }
  },
  render: function () {
    const parentElement = document.getElementById('shop');
    const articleElement = document.createElement('article');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(articleElement);
    parentElement.appendChild(h1Element);
    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = `${this.name}`;
    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for (let i = 0; i < workingHours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `at ${workingHours[i]}: ${this.totalCookiesPerHour[i]} Cookies`;
    }

  }
};

Paris.getnum();
console.log(Paris);
Paris.render();
//------------------------------------------------------------------

const Lima = {
  name: 'Lima',
  minCust: 2,
  maxCust: 16,
  AvgCookie: 4.6,
  numOfCustPerHour: [],//randomValue(min,max)(array)
  totalCookiesPerHour: [],//NumOfCust*avgCookie
  totalSales: 0,
  temp: [],
  getnum: function () {
    for (let i = 0; i < workingHours.length; i++) {
      this.totalCookiesPerHour.push(Math.ceil(this.AvgCookie*generateRandomNumber(this.minCust,this.maxCust)));
    }
  },
  render: function () {
    const parentElement = document.getElementById('shop');
    const articleElement = document.createElement('article');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(articleElement);
    parentElement.appendChild(h1Element);
    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = `${this.name}`;
    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for (let i = 0; i < workingHours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `at ${workingHours[i]}: ${this.totalCookiesPerHour[i]} Cookies`;
    }

  }
};

Lima.getnum();
console.log(Lima);
Lima.render();



// //-------------------------------------------------------------------------------------
// // homepage

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
// //building constructor
// function shops(name,minCust,maxCust,avgCookie) {
//   this.name= name;
//   this.maxCust=maxCust;
//   this.minCust-minCust;
//   this.AvgCookie=avgCookie;
//   this.numOfCustPerHour=numOfCustPerHour;
//   this.totalCookiesPerHour=this.totalCookiesPerHour;
//   this.customerArr=this.customerArr;
  
  
// }

// const seattle = new shops('seattle', 23, 65, 6.3);
// seattle.randomCustomer(23, 65);
// seattle.render();
// console/log(seattle);

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

















