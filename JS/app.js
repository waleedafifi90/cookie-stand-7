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
  temp: [],
  getnum: function () {
    for (let i = 0; i < workingHours.length; i++) {
      this.temp = Math.ceil(generateRandomNumber(this.minCust, this.maxCust));
      Math.ceil(this.numOfCustPerHour.push(this.temp)[i]);
      Math.ceil(this.totalCookiesPerHour.push(this.temp * this.AvgCookie)[i]);
    }
  },
  render: function () {
    const parentElement = document.getElementById('shop');
    const articleElement = document.createElement('article');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(articleElement);
    parentElement.appendChild(h1Element);
    h1Element.textContent = 'Welcome to Salmon cookie shop';
    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = `${this.name} shop has ${this.minCust} min number of customers, and ${this.maxCust} max number of customers and ${this.AvgCookie} avg cookie number per customer`;
    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for (let i = 0; i < workingHours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `at ${workingHours[i]} we have ${this.numOfCustPerHour[i]} customers and we sell ${this.totalCookiesPerHour[i]} Cookies`;
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
      this.temp = Math.ceil(generateRandomNumber(this.minCust, this.maxCust));
      Math.ceil(this.numOfCustPerHour.push(this.temp)[i]);
      Math.ceil(this.totalCookiesPerHour.push(this.temp * this.AvgCookie)[i]);
    }
  },
  render: function () {
    const parentElement = document.getElementById('shop');
    const articleElement = document.createElement('article');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(articleElement);
    parentElement.appendChild(h1Element);
    h1Element.textContent = 'Welcome to Salmon cookie shop';
    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = `${this.name} shop has ${this.minCust} min number of customers, and ${this.maxCust} max number of customers and ${this.AvgCookie} avg cookie number per customer`;
    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for (let i = 0; i < workingHours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `at ${workingHours[i]} we have ${this.numOfCustPerHour[i]} customers and we sell ${this.totalCookiesPerHour[i]} Cookies`;
    }

  }
};

Tokyo.getnum();
console.log(Tokyo);
Tokyo.render();

//---------------------------------------------------------------------------------------
const Dubai = {
  name: 'Dubai',
  image: './img/Salmon.PNG',
  minCust: 11,
  maxCust: 38,
  AvgCookie: 3.7,
  numOfCustPerHour: [],//randomValue(min,max)(array)
  totalCookiesPerHour: [],//NumOfCust*avgCookie
  totalSales: 0,
  temp: [],
  getnum: function () {
    for (let i = 0; i < workingHours.length; i++) {
      this.temp = Math.ceil(generateRandomNumber(this.minCust, this.maxCust));
      Math.ceil(this.numOfCustPerHour.push(this.temp)[i]);
      Math.ceil(this.totalCookiesPerHour.push(this.temp * this.AvgCookie)[i]);
    }
  },
  render: function () {
    const parentElement = document.getElementById('shop');
    const articleElement = document.createElement('article');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(articleElement);
    parentElement.appendChild(h1Element);
    h1Element.textContent = 'Welcome to Salmon cookie shop';
    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = `${this.name} shop has ${this.minCust} min number of customers, and ${this.maxCust} max number of customers and ${this.AvgCookie} avg cookie number per customer`;
    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for (let i = 0; i < workingHours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `at ${workingHours[i]} we have ${this.numOfCustPerHour[i]} customers and we sell ${this.totalCookiesPerHour[i]} Cookies`;
    }

  }
};

Dubai.getnum();
console.log(Dubai);
Dubai.render();

//-----------------------------------------------------------------------------

const Paris = {
  name: 'Paris',
  minCust: 3,
  maxCust: 24,
  AvgCookie: 1.2,
  numOfCustPerHour: [],//randomValue(min,max)(array)
  totalCookiesPerHour: [],//NumOfCust*avgCookie
  totalSales: 0,
  temp: [],
  getnum: function () {
    for (let i = 0; i < workingHours.length; i++) {
      this.temp = Math.ceil(generateRandomNumber(this.minCust, this.maxCust));
      Math.ceil(this.numOfCustPerHour.push(this.temp)[i]);
      Math.ceil(this.totalCookiesPerHour.push(this.temp * this.AvgCookie)[i]);
    }
  },
  render: function () {
    const parentElement = document.getElementById('shop');
    const articleElement = document.createElement('article');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(articleElement);
    parentElement.appendChild(h1Element);
    h1Element.textContent = 'Welcome to Salmon cookie shop';
    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = `${this.name} shop has ${this.minCust} min number of customers, and ${this.maxCust} max number of customers and ${this.AvgCookie} avg cookie number per customer`;
    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for (let i = 0; i < workingHours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `at ${workingHours[i]} we have ${this.numOfCustPerHour[i]} customers and we sell ${this.totalCookiesPerHour[i]} Cookies`;
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
      this.temp = Math.ceil(generateRandomNumber(this.minCust, this.maxCust));
      Math.ceil(this.numOfCustPerHour.push(this.temp)[i]);
      Math.ceil(this.totalCookiesPerHour.push(this.temp * this.AvgCookie)[i]);
    }
  },
  render: function () {
    const parentElement = document.getElementById('shop');
    const articleElement = document.createElement('article');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(articleElement);
    parentElement.appendChild(h1Element);
    h1Element.textContent = 'Welcome to Salmon cookie shop';
    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = `${this.name} shop has ${this.minCust} min number of customers, and ${this.maxCust} max number of customers and ${this.AvgCookie} avg cookie number per customer`;
    const ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);
    for (let i = 0; i < workingHours.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `at ${workingHours[i]} we have ${this.numOfCustPerHour[i]} customers and we sell ${this.totalCookiesPerHour[i]} Cookies`;
    }

  }
};

Lima.getnum();
console.log(Lima);
Lima.render();



