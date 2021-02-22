function render() {
  img='./img/Salmon.PNG',
  const parentElement = document.getElementById('home');
  const articleElement = document.createElement('article');
  const articleElement = document.createElement('article');
  const h1Element = document.createElement('h1');
  parentElement.appendChild(articleElement);
  parentElement.appendChild(h1Element);
  h1Element.textContent = 'Welcome to Salmon cookie shop';
  //h1Element.
  const pElement = document.createElement('p');
  articleElement.appendChild(pElement);
  const ulElement = document.createElement('ul');
  articleElement.appendChild(ulElement);
  imgElement.setAttribute('src', this.image);


// pElement.textContent = `${this.name} shop has ${this.minCust} min number of customers, and ${this.maxCust} max number of customers and ${this.AvgCookie} avg cookie number per customer`;
}
render();
