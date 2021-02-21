'use strict';
let workingHours=['5am' ,'6am' ,'7am' ,'8am' ,'9am' ,'10am' ,'11am' ,'12pm' ,'1pm' ,'2pm' ,'3pm' ,'4pm' ,'5pm' ,'6pm' ,'7pm' ];
const seattle ={
  name: seattle,
  minCust: 23,
  maxCust: 65,
  AvgCookie: 6.3,
  cookiePerHour:[],//random*avg
  numOfCust: 0,
  image: '',
  getAge: function(min, max) {
    this.age = generateRandomNumber(min, max);
  },

  
  this.numOfCust=generateRandomNumber(this.minCust,this.maxCust),

  cookiePerHour:function(AvgCookie){
      let n=this.generateRandomNumber(this.minCust,this.maxCust);
      cookieNumber=AvgCookie*n;
      return cookieNumber;
  }
  let cookieNumber=cookiePerHour(this.AvgCookie),
  }


}

generateRandomNumber:function (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  render:function(){
      
const parentElement=document.getElementById('shop');
const articleElement=document.createElement('shopname');
parentElement.appendChild(articleElement);

const h4Element=document.createElement('h4');
parentElement.appendChild(h4Element);
h4Element.textContent='SEAATTLE';

const ulElement=document.createElement('ul')
parentElement.appendChild(ulElement);
for (i=0;i<workingHours.length;i++){
const liElement= document.createElement('li');
ulElement.appendChild(liElement);
liElement.textContent=`${workingHours[i]} :${this.cookieNumber}`;
}
console.log(seattle);
  }
seattle.render();
  
// //declare variables
//  var shopname=document.getElementById(shopname);
//  var minCust=document.getElementById(minCust);
//  var maxCust=document.getElementById(miaxCust);
//  var AvgCookie=document.getElementById(AvgCookie);
// //write properties
//  shopname.textContent=shop.name;
//  minCust.textContent=shop.minCust;
//  maxCust.textContent=shop.maxCust;
//  AvgCookie.textContent=shop.AvgCookie;
